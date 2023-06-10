import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import LogIn from './pages/log-in/log-in.component';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
};

export default App;
