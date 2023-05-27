import { initializeApp } from "firebase/app";

// in order to use firebase service(authentication), you need to import the required methods
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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

/**
 * 1. create provider and auth, to pass to the signInWithPopup firestore service to do user authentication using google account
 **/
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = new getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
/************ End ***************/

/**
 * 2. using getFirestore, actually we pointting to the database which we have just created inside firestore!
 * after checking if the authenticated user is exsit in our database or not,
 * if not, store the user to the database using setDoc
 *  */
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
/************ End ***************/

// sign-up form api called, createUserWithEmailAndPassword
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
/************ End ***************/

// sign-in form api call, signInWithEmailAndPassword
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
/************ End ***************/

export const userSignOut = async () => signOut(auth);

/**
 * onAuthStateChanged is one more important and effecient service which firebase provided for us,
 * in order to treger signing in and signing out of the user effeciently.
 * Firebase provides a really helpful listner to keep traking of user authenitcation called OBSERVER PATTERN(onAuthStateChanged!)
 **/
export const onAuthStateChangedListner = (
  callback,
  errorCallback,
  completeCallback
) => onAuthStateChanged(auth, callback, errorCallback, completeCallback);

/**
 * OBSERVER PATTERN callbacks, we can track based on especific callback and do the right thing,
 * in order to prvide professional user experience.
 *
 * 1. next: callback
 * 2. error: errorCallback
 * 3. complete: completeCallback
 */
/************ End ***************/
