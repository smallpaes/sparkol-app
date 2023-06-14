import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import LogIn from './pages/log-in/log-in.component';
import AuthLayout from './layouts/auth-layout/auth-layout.component';
import HomePage from './pages/home-page/home-page.component';
import NotFound from './pages/not-found/not-found.component';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />

      {/* Protect Routes */}
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<HomePage />} />
      </Route>

      {/* Fallback route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
