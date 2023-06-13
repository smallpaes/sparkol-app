import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../theme';
import FormInput from '../form-input.component';

describe('FormInput', () => {
  test('should render invalid message if the input is touched and is not valid', async () => {
    const mockInvalidMessage = 'invalid message';
    const formInput = render(
      <ThemeProvider theme={theme}>
        <FormInput
          isTouched={true}
          isInvalid={true}
          invalidMessage={mockInvalidMessage}
        />
      </ThemeProvider>,
    );

    const inputMessage = await formInput.findByTestId('form-input-message');
    expect(inputMessage.textContent).contain(mockInvalidMessage);
    formInput.unmount();
  });

  test('should not render invalid message if the input is touched but the value is valid', async () => {
    const mockInvalidMessage = 'invalid message';
    const formInput = render(
      <ThemeProvider theme={theme}>
        <FormInput
          isTouched={false}
          isInvalid={false}
          invalidMessage={mockInvalidMessage}
        />
      </ThemeProvider>,
    );
    expect(screen.queryByTestId('form-input-message')).toBeNull();
    formInput.unmount();
  });

  test('should render an input field', async () => {
    const mockInputName = 'input name';
    const mockInputId = 'input id';
    const formInput = render(
      <ThemeProvider theme={theme}>
        <FormInput
          isTouched={false}
          isInvalid={false}
          invalidMessage=""
          name={mockInputName}
          id={mockInputId}
        />
      </ThemeProvider>,
    );
    const input = await formInput.findByRole('textbox', {
      name: mockInputName,
    });
    expect(input).not.toBeNull();
    formInput.unmount();
  });

  test('should render an label field', async () => {
    const mockInputName = 'input name';
    const mockInputId = 'input id';
    const formInput = render(
      <ThemeProvider theme={theme}>
        <FormInput
          isTouched={false}
          isInvalid={false}
          invalidMessage=""
          name={mockInputName}
          id={mockInputId}
        />
      </ThemeProvider>,
    );
    const label = await formInput.findByTestId('form-input-label');
    expect(label.textContent).contain(mockInputName);
  });
});
