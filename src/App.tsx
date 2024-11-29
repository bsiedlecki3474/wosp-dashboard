import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { app } from './firebase'
import { signInWithPopup, signOut, getAuth, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
// import { useAuthState } from ''
import { useAuthState } from 'react-firebase-hooks/auth';


const auth = getAuth(app);
const provider = new GoogleAuthProvider();



function App() {
  const [count, setCount] = useState(0);
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <p>Loading...</p>
  } else if (!user) {
    return (
      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <button onClick={() => signInWithPopup(auth, provider)}>login</button>
      </>
    )
  }

  console.log(user.displayName);
  // console.log(import.meta.env)

  return (
    <button onClick={() => signOut(auth)}>logout</button>
  )






}

export default App
