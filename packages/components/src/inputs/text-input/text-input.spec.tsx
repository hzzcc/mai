import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';

import { TextInput } from './text-input'; // Fixed import path
import styles from './text-input.module.scss';

describe('TextInput', () => {
  it('should render a text input with the correct placeholder', () => {
    const placeholderText = 'Enter text here';
    const { getByPlaceholderText } = render(
      <TextInput placeholder={placeholderText} />,
    );
    const inputElement = getByPlaceholderText(placeholderText);
    expect(inputElement).toBeInTheDocument();
  });

  it('should update the value when the input changes', () => {
    const onChange = vi.fn();
    const { container } = render(<TextInput onChange={onChange} />);
    const inputElement = container.querySelector(
      `.${styles.textInput}`,
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'new value' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should apply the correct class name', () => {
    const { container } = render(<TextInput />);
    const inputElement = container.querySelector(`.${styles.textInput}`);
    expect(inputElement).toBeInTheDocument();
  });
});
