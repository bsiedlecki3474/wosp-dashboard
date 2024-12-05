import './App.css'
import { app } from './firebase'
import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { AuthedUser } from './components/AuthedUser';
import { Button } from '@/components/ui/button';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.addScope('openid');
provider.addScope('email');

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <p>Loading...</p>
  } else if (!user) {
    return (
      <>
        <p>testing stuff</p>
        <Button onClick={() => signInWithPopup(auth, provider)}>login</Button>
      </>
    )
  }

  return (
    <AuthedUser user={user} auth={auth} />
  );

}

export default App;
