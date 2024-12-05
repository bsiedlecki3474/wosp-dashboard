import { useCallback, useEffect, useState } from 'react'
import { signOut } from "firebase/auth";
import { app } from '../firebase'
import { getDatabase, ref, get, query, set } from 'firebase/database';
import type { Auth, User } from "firebase/auth";
import { Counter } from './Counter';
import { AddVolunteerDialog } from './AddVolunteerDialog';
import { Button } from '@/components/ui/button';
import { AddUserDialog } from './AddUserDialog';

interface Props {
  user: User;
  auth: Auth;
}

const db = getDatabase(app);

export const enum DialogType {
  ADD_USER,
  ADD_VOLUNTEER,
};

export const AuthedUser = ({ user, auth }: Props) => {
  const [dialogOpen, setDialogOpen] = useState<DialogType | false>(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const getOrg = useCallback((): string | null => {
    if (!user?.email || !user?.uid) return null;
    const [, domain] = user.email.split('@');
    const org = domain.replace('.', '_');
    return (!import.meta.env.DEV && org === 'gmail_com') ? null : org;
  }, [user])

  const org = getOrg();
  
  const isUserAdmin = async (): Promise<boolean> => {
    if (!org) return false;
    const usersRef = ref(db, `tenants/${org}/users/${user.uid}/role`);
    try {
      const readUsers = await get(query(usersRef));
      return Object.values<string>(readUsers.val())?.includes(user.uid);
    } catch (e) {
      console.log(org, e)
      return false;
    }
  }

  const createOrgRootUser = (): void => {
    if (!org) return;
    const usersRef = ref(db, `tenants/${org}/users/${user.uid}`);
    set(usersRef, {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      role: 'root',
    }).then(() => setIsAdmin(true));
  }

  const setAddUserDialogOpen = (value: boolean) => {
    setDialogOpen(value ? DialogType.ADD_USER : false);
  }  

  const setAddVolunteerDialogOpen = (value: boolean) => {
    setDialogOpen(value ? DialogType.ADD_VOLUNTEER : false);  
  }

  useEffect(() => {
    user && isUserAdmin().then((result) => {
      setIsAdmin(result);
      if (!result) {
        createOrgRootUser();
      }
    });
  }, [user]);

  return (
    <div>
      {org && <b><Counter org={org} /></b>}
      {org && <p>org: <code>{org}</code></p>}
      <p>displayName: <code>{user.displayName}</code></p>
      <p>email: <code>{user.email}</code></p>
      <p>isAdmin: <code>{isAdmin.toString()}</code></p>
      <AddUserDialog org={org!} open={dialogOpen === DialogType.ADD_USER} setOpen={setAddUserDialogOpen} />
      <AddVolunteerDialog org={org!} open={dialogOpen === DialogType.ADD_VOLUNTEER} setOpen={setAddVolunteerDialogOpen} />
      <Button onClick={() => signOut(auth)}>logout</Button>
      <Button onClick={() => setAddUserDialogOpen(true)}>add user</Button>
      <Button onClick={() => setAddVolunteerDialogOpen(true)}>add volunteer</Button>
    </div>
  )
}