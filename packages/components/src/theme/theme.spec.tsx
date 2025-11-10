import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { expect } from 'vitest';

import { DatlasTheme } from './theme';

describe('DatlasTheme', () => {
  it('renders with the correct children', () => {
    const { getByText } = render(
      <MemoryRouter>
        <DatlasTheme>Hello world!</DatlasTheme>
      </MemoryRouter>,
    );
    const rendered = getByText('Hello world!');
    expect(rendered).toBeTruthy();
  });

  it('toggles theme mode when toggleTheme is called', () => {
    const { container } = render(
      <MemoryRouter>
        <DatlasTheme>
          <button type="button" data-testid="toggle-button">
            Toggle Theme
          </button>
        </DatlasTheme>
      </MemoryRouter>,
    );

    const toggleButton = container.querySelector(
      '[data-testid="toggle-button"]',
    ) as HTMLButtonElement;
    expect(toggleButton).toBeTruthy();

    fireEvent.click(toggleButton);
  });

  it('provides the theme context value', () => {
    const { container } = render(
      <MemoryRouter>
        <DatlasTheme>
          <div data-testid="theme-mode"></div>
        </DatlasTheme>
      </MemoryRouter>,
    );

    const themeModeElement = container.querySelector(
      '[data-testid="theme-mode"]',
    ) as HTMLDivElement;
    expect(themeModeElement).toBeTruthy();
  });
});
