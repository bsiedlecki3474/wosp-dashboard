import { createContext, useContext, type Dispatch, type SetStateAction } from "react";
import type { DialogType } from "@/types";

interface ContextValue {
	isAdmin: boolean;
	setIsAdmin: Dispatch<SetStateAction<boolean>>;
	org: string | null,
	setOrg: Dispatch<SetStateAction<string | null>>;
	dialogOpen: DialogType | false;
	setDialogOpen: Dispatch<SetStateAction<DialogType | false>>;
}

interface Props {
	children: JSX.Element | JSX.Element[];
	value: ContextValue
}

const Context = createContext<ContextValue>({} as ContextValue);

export const UserContextProvider = ({ children, value }: Props) => {
	return (
		<Context.Provider value={value}>
			{children}
		</Context.Provider>
	)
}

export const useCurrentUser = () => {
	const value = useContext(Context);
	return value;
}