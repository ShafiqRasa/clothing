import React, { useState } from "react";
import Input from "../form-input";
import Button from "../genral-button/genral-button.component";
import { SignInContainer } from "./sign-in-form.style";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase-api.config";
import { BUTTON_TYPES } from "../genral-button/genral-button.component";

const fields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formField, setFormField] = useState(fields);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  const SignInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
    } catch (error) {
      console.log("error while google sign in", error.message);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formField;
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
    } catch ({ code }) {
      switch (code) {
        case "auth/wrong-password":
          alert("Wrong credintials, password not exist!");
          break;
        case "auth/user-not-found":
          alert("User not found, please try agian!");
          break;
        default:
          console.log(code);
          break;
      }
    }
  };
  return (
    <div>
      <h1>I have already an account</h1>
      <h2>Sign in with your email and password</h2>
      <form onSubmit={onSubmit}>
        <Input
          label="email"
          type="email"
          name="email"
          onChange={handleChange}
          value={formField.email}
          required
        />
        <Input
          label="password"
          type="password"
          name="password"
          onChange={handleChange}
          value={formField.password}
          required
        />
        <SignInContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            btnType={BUTTON_TYPES.google}
            onClick={SignInWithGoogle}
          >
            Sign In With Google
          </Button>
        </SignInContainer>
      </form>
    </div>
  );
};

export default SignInForm;