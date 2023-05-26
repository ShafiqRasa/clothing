import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase-api.config";

const SignIn = () => {
  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      createUserDocumentFromAuth(user);
    } catch (error) {
      console.log("error while google sign in", error.message);
    }
  };
  return (
    <div>
      <button onClick={logGoogleUser}>Sign In with Google account</button>
    </div>
  );
};

export default SignIn;
