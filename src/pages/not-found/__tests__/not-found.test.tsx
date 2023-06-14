import { expect, test, describe } from 'vitest';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import NotFound from '../not-found.component';
import { theme } from '../../../theme';

describe('NotFound', () => {
  test('should render the not found page skeleton', async () => {
    const notFoundPage = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <NotFound />
        </ThemeProvider>
      </BrowserRouter>,
    );

    const title = await notFoundPage.findByTestId('not-found-title');
    const button = await notFoundPage.findByTestId('not-found-button');
    const icon = await notFoundPage.findByTestId('not-found-icon');

    expect(title.textContent).toContain('Page not found');
    expect(button.textContent).toContain('To Home');
    expect(icon).toBeTruthy();
    notFoundPage.unmount();
  });

  test('should have a link to redirect the user back to the home page', async () => {
    const notFoundPage = render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <NotFound />
        </ThemeProvider>
      </BrowserRouter>,
    );
    const link = await notFoundPage.findByRole('link');
    expect(link).toBeTruthy();
    expect(link.attributes.getNamedItem('href')?.value).toBe('/');
    notFoundPage.unmount();
  });
});
