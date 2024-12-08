import { app } from '../firebase'
import { signInWithPopup, getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { AuthedUserPage } from './AuthedUserPage';
import { Button } from '@/components/ui/button';

import { DashboardPage } from './DashboardPage';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useMemo, useState } from 'react';
import { UserContextProvider } from '@/context/UserContext';
import { DialogType } from '@/types';
import { SettingsMenu } from '@/components/SettingsMenu';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const MainPage = () => {
  const [user, loading] = useAuthState(auth);

  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [org, setOrg] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState<DialogType | false>(false);

  const navItems = useMemo(() => [
    {
      component: ThemeToggle
    },
    {
      component: () => user && <SettingsMenu elements={[
        ...(isAdmin ? [{
          label: 'Add volunteer',
          onClick: (value: DialogType | false) => setDialogOpen(value ? DialogType.ADD_VOLUNTEER : false),
        }] : [{
          label: 'Request admin',
          onClick: (value: DialogType | false) => setDialogOpen(value ? DialogType.REQUEST_ADMIN : false),
        }]),
      ]} />
    },
    ...(user ? [{
      label: 'Log out',
      onClick: () => signOut(auth),
    }] : [{
      label: 'Log in',
      onClick: () => signInWithPopup(auth, provider),
    }]),
  ], [user, isAdmin, auth, provider])

  return (
    <UserContextProvider value={{
      isAdmin,
      setIsAdmin,
      org,
      setOrg,
      dialogOpen,
      setDialogOpen,
    }}>
      <div className="flex justify-end px-4 py-2 gap-2 absolute w-screen">
        {navItems.map((el) => {
          if (el?.component) {
            return <el.component />
          } else if (el?.label && el?.onClick) {
            return <Button variant="outline" onClick={el.onClick}>{el.label}</Button>
          } else return <></>;
        })}
      </div>
      {loading ? <p>Loading...</p> : user ? (<AuthedUserPage user={user} />) : (<DashboardPage />)}
    </UserContextProvider>

  )
};