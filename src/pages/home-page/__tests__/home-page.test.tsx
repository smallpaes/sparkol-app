import { expect, test, describe } from 'vitest';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import HomePage from '../home-page.component';
import { UserContext } from '../../../context/UserContext';
import { IDefaultUser } from '../../../types/user';
import { theme } from '../../../theme';

describe('HomePage', () => {
  test('should render the home page skeleton', async () => {
    const mockUser: IDefaultUser = {
      user: {
        name: 'Test User',
        id: 1,
        token: 'test-token',
      },
      clearUser: () => undefined,
      setUser: () => undefined,
    };
    const homePage = render(
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={mockUser}>
          <HomePage />
        </UserContext.Provider>
      </ThemeProvider>,
    );

    const title = await homePage.findByTestId('title');
    const subtitle = await homePage.findByTestId('subtitle');
    const button = await homePage.findByTestId('button');
    expect(title.textContent).toContain('Welcome');
    expect(subtitle.textContent).toContain('You are logged in');
    expect(button.textContent).toContain('Log Out');
    homePage.unmount();
  });

  test('should render the user name when provided', async () => {
    const mockUser: IDefaultUser = {
      user: {
        name: 'Test User',
        id: 1,
        token: 'test-token',
      },
      clearUser: () => undefined,
      setUser: () => undefined,
    };
    const homePage = render(
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={mockUser}>
          <HomePage />
        </UserContext.Provider>
      </ThemeProvider>,
    );

    const title = await homePage.findByTestId('title');
    expect(title.textContent).toContain('Test User');
    homePage.unmount();
  });

  test('should render default name when name is not provided', async () => {
    const mockUser: IDefaultUser = {
      user: null,
      clearUser: () => undefined,
      setUser: () => undefined,
    };
    const homePage = render(
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={mockUser}>
          <HomePage />
        </UserContext.Provider>
      </ThemeProvider>,
    );

    const title = await homePage.findByTestId('title');
    expect(title.textContent).toContain('User');
    homePage.unmount();
  });

  test('should render the log out button', async () => {
    const mockUser: IDefaultUser = {
      user: {
        name: 'Test User',
        id: 1,
        token: 'test-token',
      },
      clearUser: () => undefined,
      setUser: () => undefined,
    };
    const homePage = render(
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={mockUser}>
          <HomePage />
        </UserContext.Provider>
      </ThemeProvider>,
    );

    const button = await homePage.findByTestId('button');
    expect(button.textContent).toContain('Log Out');
    homePage.unmount();
  });
});
