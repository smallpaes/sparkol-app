import { expect, test, describe, vi } from 'vitest';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import HomePage from '../home-page.component';
import { UserContext } from '../../../context/UserContext';
import { IDefaultUser } from '../../../types/user';
import { theme } from '../../../theme';
import * as useLogOut from '../../../hooks/useLogOut';

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

    const title = await homePage.findByTestId('home-page-title');
    const subtitle = await homePage.findByTestId('home-page-subtitle');
    const button = await homePage.findByTestId('home-page-button');
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

    const title = await homePage.findByTestId('home-page-title');
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

    const title = await homePage.findByTestId('home-page-title');
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

    const button = await homePage.findByTestId('home-page-button');
    expect(button.textContent).toContain('Log Out');
    homePage.unmount();
  });

  test('should call the log out function when the log out button is clicked', async () => {
    const mockLogOut = vi.fn();
    const spyUseLogOut = vi
      .spyOn(useLogOut, 'default')
      .mockReturnValue(mockLogOut);
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

    const button = await homePage.findByTestId('home-page-button');
    button.click();
    expect(spyUseLogOut).toHaveBeenCalled();
    expect(mockLogOut).toHaveBeenCalled();
  });
});
