import React, { useState } from "react";
import Input from "../form-input";
import Button from "../genral-button";
import { SignInContainer } from "./sign-in-form.style";
import { BUTTON_TYPES } from "../genral-button/Button";
import { useDispatch } from "react-redux";
import { googleSignInStart, emailSignInStart } from "../../store/user/actions";

const fields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formField, setFormField] = useState(fields);
  const dispatch = useDispatch();

  const resetFormField = () => setFormField(fields);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const SignInWithGoogle = async () => dispatch(googleSignInStart());

  const onSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formField;

    try {
      dispatch(emailSignInStart(email, password));
      resetFormField();
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
