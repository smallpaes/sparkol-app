import styled from 'styled-components';

import { AbsoluteCenter } from '../../theme/commonStyles';
import Button from '../../components/button/button.component';

export const HomePageContainer = styled.section`
  ${AbsoluteCenter}
  text-align: center;
`;

export const HomePageContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const HomePageTitle = styled.h1`
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const HomePageSubtitle = styled.h4`
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const HomePageButton = styled(Button)`
  width: 100px;
`;
