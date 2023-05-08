import { useState, useEffect } from "react";
import { auth, signInWithGoogle, signOutWithGoogle } from "./Server/Firebase";
import Mapp from './page/Mapp';
import SignIn from "./component/SignIn";

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const photoURL = auth.currentUser?.photoURL;
    const displayName = auth.currentUser?.displayName;
    const email = auth.currentUser?.email;

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    const handleSignIn = async () => {
        await signInWithGoogle();
    };

    const handleSignOut = async () => {
        await signOutWithGoogle();
    };

    return (
        <>
            {currentUser ? (
                <>
                    <Mapp handleSignOut={handleSignOut} photoURL={photoURL} displayName={displayName} email={email} />
                </>
            ) : (
                <>
                    <SignIn handleSignIn={handleSignIn} />
                </>
            )}
        </>
    )
}

export default App
