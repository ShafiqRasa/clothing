import React, { useState, useContext } from "react";
import Input from "../form-input";
import Button from "../genral-button";
import "./sign-in-form.style.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase-api.config";
import { UserContext } from "../../contexts/user";

const fields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formField, setFormField] = useState(fields);
  const { setCurrentUser } = useContext(UserContext);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  const SignInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      createUserDocumentFromAuth(user);
    } catch (error) {
      console.log("error while google sign in", error.message);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formField;
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      setCurrentUser(user);
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
        <div className=" sign-in-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" btnType="google" onClick={SignInWithGoogle}>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
