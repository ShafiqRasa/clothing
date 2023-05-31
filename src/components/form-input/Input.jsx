import React from "react";
import { Group, FormInput, FormInputLabel } from "./form-input.style";

const Input = ({ label, ...otherProps }) => {
  return (
    <Group>
      <FormInput {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default Input;
