import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import LogIn from './pages/log-in/log-in.component';
import HomePage from './pages/home-page/home-page.component';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default App;
