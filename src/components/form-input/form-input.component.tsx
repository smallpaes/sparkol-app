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
  ...otherInputProps
}) => {
  const isInValidInput = isTouched && isInvalid;
  return (
    <FormInputContainer>
      {isShowLabel && <FormInputLabel>{name}</FormInputLabel>}
      <FormInputField $isInvalid={isInValidInput} {...otherInputProps} />
      {isInValidInput && <FormInputMessage>{invalidMessage}</FormInputMessage>}
    </FormInputContainer>
  );
};

export default FormInput;
