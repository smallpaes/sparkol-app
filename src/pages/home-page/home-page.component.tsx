import { FC, useContext } from 'react';

import {
  HomePageContainer,
  HomePageContent,
  HomePageTitle,
  HomePageSubtitle,
  HomePageButton,
} from './home-page.styles';
import { UserContext } from '../../context/UserContext';
import useLogOut from '../../hooks/useLogOut';
import { ButtonType } from '../../components/button/button.types';

const HomePage: FC = () => {
  const { user } = useContext(UserContext);
  const logOut = useLogOut();
  return (
    <HomePageContainer>
      <HomePageContent>
        <HomePageTitle data-testid="home-page-title">
          Welcome, {user?.name || 'User'}
        </HomePageTitle>
        <HomePageSubtitle data-testid="home-page-subtitle">
          You are logged in
        </HomePageSubtitle>
      </HomePageContent>
      <HomePageButton
        data-testid="home-page-button"
        buttonType={ButtonType.PRIMARY}
        type="button"
        onClick={logOut}
      >
        Log Out
      </HomePageButton>
    </HomePageContainer>
  );
};

export default HomePage;
