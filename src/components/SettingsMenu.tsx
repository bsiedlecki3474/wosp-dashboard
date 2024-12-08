import { Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface SettingsMenuElement {
  label: string;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  onClick: any;
}

interface Props {
  elements: SettingsMenuElement[]
}

export function SettingsMenu({ elements }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="absolute h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {elements.map((el: SettingsMenuElement) => (
          <DropdownMenuItem onClick={el.onClick}>
            {el.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}