import styled from 'styled-components';

import { AbsoluteCenter } from '../../theme/commonStyles';
import Button from '../../components/button/button.component';
import { ReactComponent as BearHeadSvg } from '../../assets/bear-head.svg';

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
  margin-bottom: 1.5rem;
  align-items: center;
`;

export const NotFoundTitle = styled.h1`
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const NotFoundIcon = styled(BearHeadSvg)`
  width: 50px;
  height: 50px;
  fill: ${({ theme }) => theme.colors.tertiary};
`;
