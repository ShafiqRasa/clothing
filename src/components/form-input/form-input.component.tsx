import { InputHTMLAttributes, FC } from "react";
import { Group, FormInput, FormInputLabel } from "./form-input.style";

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;
const Input: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <FormInput {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === "string" &&
              otherProps.value.length
          )}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default Input;
