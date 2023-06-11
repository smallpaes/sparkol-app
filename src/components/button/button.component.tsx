import { FC, ButtonHTMLAttributes } from 'react';

import { CustomButton } from './button.styles';
import { ButtonType } from './button.types';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
  isOutlined?: boolean;
}

const Button: FC<IButton> = ({
  children,
  buttonType = ButtonType.PRIMARY,
  isOutlined = false,
  ...otherProps
}) => {
  return (
    <CustomButton
      $buttonType={buttonType}
      $isOutlined={isOutlined}
      {...otherProps}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
