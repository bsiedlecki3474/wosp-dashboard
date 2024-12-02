import './App.css'
import { app } from './firebase'
import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { AuthedUser } from './components/AuthedUser';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/user.organization.read');

function App() {
  const [user, loading] = useAuthState(auth);

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

  return <AuthedUser user={user} auth={auth} />

}

export default App;
