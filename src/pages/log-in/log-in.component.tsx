import { FC } from 'react';

import LogInContent from './components/log-in-content.component';
import { LogInProvider } from './log-in.context';

const LogIn: FC = () => {
  return (
    <LogInProvider>
      <LogInContent />
    </LogInProvider>
  );
};

export default LogIn;
