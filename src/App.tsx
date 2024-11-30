import { useEffect, useState } from 'react'
import './App.css'
import { app } from './firebase'
import { signInWithPopup, signOut, getAuth, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { getDatabase, ref, get, query, orderByChild, equalTo } from 'firebase/database';
import type { User } from 'firebase/auth'

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const db = getDatabase(app);

const isUserAdmin = async (user: User): Promise<boolean> => {
  if (!user?.uid) return false;
  const usersRef = ref(db, `tenants/${user.uid}/users`);
  const readUsers = await get(query(usersRef, orderByChild('uid'), equalTo('mPf1iBnjH8XSgLQ1SNUVLVs4vp43')));
  return readUsers.val().filter((el: User) => !!el?.uid).length > 0;
}

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    user && isUserAdmin(user).then((result) => setIsAdmin(result));
  }, [user])

  if (loading) {
    return <p>Loading...</p>
  } else if (!user) {
    return (
      <>
        <p>testing stuff</p>
        <button onClick={() => signInWithPopup(auth, provider)}>login</button>
      </>
    )
  }

  return (
    <div>
      <p>displayName: <code>{user.displayName}</code></p>
      <p>email: <code>{user.email}</code></p>
      <p>isAdmin: <code>{isAdmin.toString()}</code></p>
      <button onClick={() => signOut(auth)}>logout</button>
    </div>
  )
}

export default App
