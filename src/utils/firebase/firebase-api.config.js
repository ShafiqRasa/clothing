import { initializeApp } from "firebase/app";

// in order to use firebase service(authentication), you need to import the required methods
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// in order to use another firebase service(firestore), you need to import the required methods
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYJ5SgQ5wgQw8BumqT-Ie6x1il01wf0B8",
  authDomain: "clothing-db-c487e.firebaseapp.com",
  projectId: "clothing-db-c487e",
  storageBucket: "clothing-db-c487e.appspot.com",
  messagingSenderId: "992199821990",
  appId: "1:992199821990:web:ec5a21d2bf885bed600267",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = new getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  const { uid, displayName, email } = userAuth;
  const userDocRef = doc(db, "users", uid);
  const userDocSnappShot = await getDoc(userDocRef);
  if (!userDocSnappShot.exists()) {
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error while creating user to the database", error);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
