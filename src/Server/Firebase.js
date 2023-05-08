import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBgySrc9zUAXQ9f5noR4JOFug8Ns0GGrW0",
    authDomain: "clevertalk-986c5.firebaseapp.com",
    projectId: "clevertalk-986c5",
    storageBucket: "clevertalk-986c5.appspot.com",
    messagingSenderId: "149415965043",
    appId: "1:149415965043:web:8317f5fe2fe517a3221506",
    measurementId: "G-PRZYSXY4VP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        return result.user;
    } catch (error) {
        console.log(error);
    }
};

export const signOutWithGoogle = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.log(error);
    }
};