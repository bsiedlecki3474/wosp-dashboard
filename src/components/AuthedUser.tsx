import { useCallback, useEffect, useState } from 'react'
import { signOut } from "firebase/auth";
import { app } from '../firebase'
import { getDatabase, ref, get, query, push } from 'firebase/database';
import type { Auth, User } from "firebase/auth";
import { Counter } from './Counter';
import { AddVolunteerDialog } from './AddVolunteerDialog';
import { Button } from '@/components/ui/button';

interface Props {
  user: User;
  auth: Auth;
}

const db = getDatabase(app);

export const AuthedUser = ({ user, auth }: Props) => {
  const [dialogOpen, setDialogOpen] = useState(false);
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
    const usersRef = ref(db, `tenants/${org}/users`);
    try {
      const readUsers = await get(query(usersRef));
      return readUsers.val().includes(user.uid);
      // return Object.values<User>(readAdmin.val())?.filter((el: User) => !!el?.uid)?.length > 0;
    } catch (e) {
      console.log(org, e)
      return false;
    }
  }

  const createUserOrg = (): void => {
    if (!org) return;
    const usersRef = ref(db, `tenants/${org}/users`);
    push(usersRef, user.uid).then(() => setIsAdmin(true));
  }

  useEffect(() => {
    user && isUserAdmin().then((result) => {
      setIsAdmin(result);
      if (!result) {
        createUserOrg();
      }
    });
  }, [user]);

  return (
    <div>
      {org && <Counter org={org} />}
      {org && <p>org: <code>{org}</code></p>}
      <p>displayName: <code>{user.displayName}</code></p>
      <p>email: <code>{user.email}</code></p>
      <p>isAdmin: <code>{isAdmin.toString()}</code></p>
      <AddVolunteerDialog open={dialogOpen} setOpen={() => setDialogOpen(true)} />
      <Button onClick={() => signOut(auth)}>logout</Button>
      <Button onClick={() => setDialogOpen(true)}>open dialog</Button>
    </div>
  )
}