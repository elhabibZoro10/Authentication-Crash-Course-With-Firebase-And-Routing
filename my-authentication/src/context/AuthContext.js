import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    sendPasswordResetEmail, 
    signInWithEmailAndPassword, 
    signOut, 
    updateEmail, 
    updatePassword,
    reauthenticateWithCredential,
    EmailAuthProvider 
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import auth from "../firebaseConfig";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const logout = () => {
        return signOut(auth)
    }
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    const reauthenticate = (currentPassword) => {
        const credential = EmailAuthProvider.credential(auth.currentUser.email, currentPassword);
        return reauthenticateWithCredential(auth.currentUser, credential);
    }

    const updateUserEmail = (email, currentPassword) => {
        return reauthenticate(currentPassword).then(() => {
            return updateEmail(auth.currentUser, email);
        });
    };

    const updateUserPassword = (password, currentPassword) => {
        return reauthenticate(currentPassword).then(() => {
            return updatePassword(auth.currentUser, password);
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser, signup, logout, login, resetPassword, updateUserEmail, updateUserPassword }}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext)
}
