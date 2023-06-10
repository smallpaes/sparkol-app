import { FC, InputHTMLAttributes } from 'react';

import {
  FormInputContainer,
  FormInputField,
  FormInputMessage,
  FormInputLabel,
} from './form-input.styles';

interface IFormInput extends InputHTMLAttributes<HTMLInputElement> {
  isTouched: boolean;
  isInvalid: boolean;
  invalidMessage: string;
  isShowLabel?: boolean;
}

const FormInput: FC<IFormInput> = ({
  isTouched = false,
  isInvalid = false,
  invalidMessage = '',
  isShowLabel = true,
  name,
  id,
  ...otherInputProps
}) => {
  const isInValidInput = isTouched && isInvalid;
  return (
    <FormInputContainer>
      <FormInputLabel $isHidden={!isShowLabel} htmlFor={id}>
        {name}
      </FormInputLabel>
      <FormInputField
        $isInvalid={isInValidInput}
        id={id}
        name={name}
        {...otherInputProps}
      />
      {isInValidInput && <FormInputMessage>{invalidMessage}</FormInputMessage>}
    </FormInputContainer>
  );
};

export default FormInput;
