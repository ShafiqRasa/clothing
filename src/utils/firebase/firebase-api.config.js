import { initializeApp } from "firebase/app";

// in order to use firebase service(authentication), you need to import the required methods
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// in order to use another firebase service(firestore), you need to import the required methods
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  getDocs,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYJ5SgQ5wgQw8BumqT-Ie6x1il01wf0B8",
  authDomain: "clothing-db-c487e.firebaseapp.com",
  projectId: "clothing-db-c487e",
  storageBucket: "clothing-db-c487e.appspot.com",
  messagingSenderId: "992199821990",
  appId: "1:992199821990:web:ec5a21d2bf885bed600267",
};

// Initialize Firebase
initializeApp(firebaseConfig);

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
 *    after checking if the authenticated user is exsit in our database or not,
 *    if not, store the user to the database using setDoc
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
        // why we passed additionalInfo object,
        // because maybe sometimes the user which is authenticated with google account has not displayName,
        // however the authenticated user using email and password always has! check the flow from sign up form...
      });
    } catch (error) {
      console.log("error while creating user to the database", error);
    }
  }
  return userDocSnappShot;
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

/**
 *
 * @param {*} collectionKey is the name of callection which is gonna suppose to write inside
 * @param {*} data is the data suppose to be stored to that collection
 */
export const writeDataToDB = async (collectionKey, data, field) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  data.forEach((item) => {
    const docRef = doc(collectionRef, item[field].title.toLowerCase());
    batch.set(docRef, item);
  });
  await batch.commit();
  console.log("data has been uploaded successfully!");
};
/************ End ***************/

/**
 *
 * @param {*} collectionKey is the specific collectionName which we want to fetch data from.
 * @returns
 */
export const getDataFromDB = async (collectionKey) => {
  const collectionRef = collection(db, collectionKey); // point out to the collection
  const q = query(collectionRef); // with the collectionRef, now have access to the query instance

  const querySnapshot = await getDocs(q); // with the query instance, now have access to the querySnapshot using getDocs method
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};
/************ End ***************/

/** trying to change all async actions to the saga */
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
