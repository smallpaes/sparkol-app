import { describe, test, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { theme } from '../../../theme';
import * as useLogin from '../hooks/useLogin';
import { LogInContext } from '../log-in.context';
import LogInContent from '../components/log-in-content.component';
import { IFormData } from '../log-in.types';

const pureFormData: IFormData = {
  username: '',
  password: '',
  isPasswordTouched: false,
  isUsernameTouched: false,
};

describe('LogInContent', () => {
  test('should render the initial log in form', async () => {
    const setFormData = () => undefined;
    const logInContent = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <LogInContext.Provider
            value={{
              formData: pureFormData,
              setFormData,
            }}
          >
            <LogInContent />
          </LogInContext.Provider>
        </ThemeProvider>
      </BrowserRouter>,
    );

    expect(logInContent.findByTestId('log-in-content-form')).toBeTruthy();
    const usernameInput = await logInContent.findByTestId(
      'log-in-username-input',
    );
    expect(usernameInput.getAttribute('name')).contain('User Name');
    const passwordInput = await logInContent.findByTestId(
      'log-in-content-password-input',
    );
    expect(passwordInput.getAttribute('name')).contain('Password');
    const submitButton = await logInContent.findByTestId(
      'log-in-content-submit-button',
    );
    expect(submitButton.textContent).contain('Log in');
    const warningMessage = screen.queryByTestId(
      'log-in-content-warning-message',
    );
    expect(warningMessage).toBeNull();
    logInContent.unmount();
  });

  test('should render the warning message if user enter invalid', async () => {
    const mockWarningMessage = 'mock warning message';
    vi.spyOn(useLogin, 'default').mockReturnValue({
      login: () => Promise.resolve(),
      error: mockWarningMessage,
      isLoading: false,
    });
    const setFormData = () => undefined;
    const logInContent = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <LogInContext.Provider
            value={{
              formData: pureFormData,
              setFormData,
            }}
          >
            <LogInContent />
          </LogInContext.Provider>
        </ThemeProvider>
      </BrowserRouter>,
    );

    const usernameInput = await logInContent.findByTestId(
      'log-in-content-warning-message',
    );
    expect(usernameInput.textContent).contain(mockWarningMessage);
    logInContent.unmount();
  });

  test('should be able to type password and update the context', async () => {
    const setFormData = vi.fn();
    const logInContent = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <LogInContext.Provider
            value={{
              formData: pureFormData,
              setFormData,
            }}
          >
            <LogInContent />
          </LogInContext.Provider>
        </ThemeProvider>
      </BrowserRouter>,
    );

    const passwordInput = await logInContent.findByTestId(
      'log-in-content-password-input',
    );
    const mockChangeEvent = { target: { value: 't' } };
    fireEvent.change(passwordInput, mockChangeEvent);
    expect(setFormData).toBeCalled();
    expect(setFormData).toBeCalledWith({
      ...pureFormData,
      password: mockChangeEvent.target.value,
    });

    logInContent.unmount();
  });

  test('should be able to type username and update the context', async () => {
    const setFormData = vi.fn();
    const logInContent = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <LogInContext.Provider
            value={{
              formData: pureFormData,
              setFormData,
            }}
          >
            <LogInContent />
          </LogInContext.Provider>
        </ThemeProvider>
      </BrowserRouter>,
    );

    const usernameInput = await logInContent.findByTestId(
      'log-in-username-input',
    );
    const mockChangeEvent = { target: { value: 't' } };
    fireEvent.change(usernameInput, mockChangeEvent);
    expect(setFormData).toBeCalled();
    expect(setFormData).toBeCalledWith({
      ...pureFormData,
      username: mockChangeEvent.target.value,
    });

    logInContent.unmount();
  });

  test('should be able to submit the form', async () => {
    const mockLogin = vi.fn();
    vi.spyOn(useLogin, 'default').mockReturnValue({
      login: mockLogin,
      error: null,
      isLoading: false,
    });

    const logInContent = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <LogInContext.Provider
            value={{
              formData: pureFormData,
              setFormData: () => undefined,
            }}
          >
            <LogInContent />
          </LogInContext.Provider>
        </ThemeProvider>
      </BrowserRouter>,
    );

    const button = await logInContent.findByTestId(
      'log-in-content-submit-button',
    );
    button.click();
    expect(mockLogin).toBeCalled();
    logInContent.unmount();
  });

  test("should update username input's touch status after clicking and input and then somewhere else", async () => {
    const setFormData = vi.fn();
    const logInContent = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <LogInContext.Provider
            value={{
              formData: pureFormData,
              setFormData,
            }}
          >
            <LogInContent />
          </LogInContext.Provider>
        </ThemeProvider>
      </BrowserRouter>,
    );

    const usernameInput = await logInContent.findByTestId(
      'log-in-username-input',
    );
    fireEvent.blur(usernameInput);
    expect(setFormData).toBeCalled();
    expect(setFormData).toBeCalledWith({
      ...pureFormData,
      isUsernameTouched: true,
    });
    logInContent.unmount();
  });

  test("should update password input's touch status after clicking and input and then somewhere else", async () => {
    const setFormData = vi.fn();
    const logInContent = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <LogInContext.Provider
            value={{
              formData: pureFormData,
              setFormData,
            }}
          >
            <LogInContent />
          </LogInContext.Provider>
        </ThemeProvider>
      </BrowserRouter>,
    );

    const passwordInput = await logInContent.findByTestId(
      'log-in-content-password-input',
    );
    fireEvent.blur(passwordInput);
    expect(setFormData).toBeCalled();
    expect(setFormData).toBeCalledWith({
      ...pureFormData,
      isPasswordTouched: true,
    });
    logInContent.unmount();
  });
});
