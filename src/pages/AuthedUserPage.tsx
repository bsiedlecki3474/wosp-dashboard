import { useCallback, useEffect } from 'react'
import { app } from '../firebase'
import { getDatabase, ref, get, query, set } from 'firebase/database';
import type { User } from "firebase/auth";
import { Counter } from '../components/Counter';
import { AddVolunteerDialog } from '../components/AddVolunteerDialog';
import { RequestAdminDialog } from '../components/RequestAdminDialog';
import { useCurrentUser } from '@/context/UserContext';
import { DialogType } from '@/types';

interface Props {
  user: User;
}

const db = getDatabase(app);

export const AuthedUserPage = ({ user }: Props) => {
  const { isAdmin, setIsAdmin, org, setOrg, dialogOpen, setDialogOpen } = useCurrentUser();

  const getOrg = useCallback((): string | null => {
    if (!user?.email || !user?.uid) return null;
    const [, domain] = user.email.split('@');
    const org = domain.replace('.', '_');
    return (!import.meta.env.DEV && org === 'gmail_com') ? null : org;
  }, [user])

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
    }).then(() => setIsAdmin(true)).then(setOrgAdminCode);
  }

  const setOrgAdminCode = () => {
    const orgRef = ref(db, `tenants/${org}}/admin_code`);
    set(orgRef, generateCode(6))
  }

  const generateCode = (length: number) => {
    return Array.from({ length }, () => Math.floor(Math.random() * 8)).join('');
  }

  const setRequestAdminDialogOpen = (value: boolean) => {
    setDialogOpen(value ? DialogType.REQUEST_ADMIN : false);
  }

  const setAddVolunteerDialogOpen = (value: boolean) => {
    setDialogOpen(value ? DialogType.ADD_VOLUNTEER : false);
  }

  useEffect(() => {
    setOrg(getOrg());
    isUserAdmin().then((result) => {
      setIsAdmin(result);
      if (!result) {
        createOrgRootUser();
      }
    });
  }, [org]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {org && <b><Counter org={org} /></b>}
      {org && <p>org: <code>{org}</code></p>}
      <p>displayName: <code>{user.displayName}</code></p>
      <p>email: <code>{user.email}</code></p>
      <p>isAdmin: <code>{isAdmin.toString()}</code></p>
      {/* todo: get org from context */}
      {org && (
        <>
          <RequestAdminDialog org={org} open={dialogOpen === DialogType.REQUEST_ADMIN} setOpen={setRequestAdminDialogOpen} />
          <AddVolunteerDialog org={org} open={dialogOpen === DialogType.ADD_VOLUNTEER} setOpen={setAddVolunteerDialogOpen} />
        </>
      )}
    </div>
  )
}