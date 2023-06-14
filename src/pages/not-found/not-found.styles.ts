import styled from 'styled-components';

import { AbsoluteCenter } from '../../theme/commonStyles';
import Button from '../../components/button/button.component';

export const NotFoundContainer = styled.section`
  ${AbsoluteCenter}
  text-align: center;
`;

export const NotFoundButton = styled(Button)`
  width: 100px;
`;

export const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const NotFoundTitle = styled.h1`
  color: ${({ theme }) => theme.colors.tertiary};
`;
