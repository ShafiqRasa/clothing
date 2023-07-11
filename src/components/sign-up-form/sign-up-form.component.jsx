import { useState } from "react";
import Input from "../form-input/form-input.component";
import Button from "../genral-button/genral-button.component";
import { signUpStart } from "../../store/user/user-actions";
import { useDispatch } from "react-redux";

const fields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formField, setFormField] = useState(fields);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  const resetFormField = () => {
    setFormField(fields);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = formField;
    if (password !== confirmPassword) {
      alert("Password does not match, please try again!");
      return;
    }
    try {
      dispatch(signUpStart({ displayName, email, password }));
      resetFormField();
    } catch ({ code }) {
      switch (code) {
        case "auth/weak-password":
          alert("Weak Password, please make it strong!");
          break;
        case "auth/email-already-in-use":
          alert("Can not create user, Email is already in use!");
          break;
        default:
          console.log(code);
          break;
      }
    }
  };

  return (
    <div>
      <h1>I do not have an account</h1>
      <h2>Sign up with your email and password</h2>
      <form onSubmit={onSubmit}>
        <Input
          label="Name"
          type="text"
          name="displayName"
          onChange={handleChange}
          value={formField.displayName}
          required
        />
        <Input
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={formField.email}
          required
        />
        <Input
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={formField.password}
          required
        />
        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={formField.confirmPassword}
          required
        />
        <Button btnType="inverted" type="submit">
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
