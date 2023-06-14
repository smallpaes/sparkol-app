import { FC } from 'react';
import { Link } from 'react-router-dom';

import {
  NotFoundContainer,
  NotFoundButton,
  NotFoundContent,
  NotFoundTitle,
} from './not-found.styles';
import { ButtonType } from '../../components/button/button.types';

const NotFound: FC = () => {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <NotFoundTitle data-testid="not-found-title">
          Oops! Page not found!
        </NotFoundTitle>
      </NotFoundContent>
      <NotFoundButton
        data-testid="not-found-button"
        buttonType={ButtonType.PRIMARY}
        type="button"
        onClick={undefined}
      >
        <Link to="/">To Home</Link>
      </NotFoundButton>
    </NotFoundContainer>
  );
};

export default NotFound;
