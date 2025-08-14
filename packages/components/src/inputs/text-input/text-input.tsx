import type { ChangeEvent, CSSProperties } from 'react';
import './text-input.scss';

export type TextInputProps = {
  /**
   * The ID of the input element.
   */
  id?: string;
  /**
   * The value of the input element.
   */
  value?: string;
  /**
   * Callback function that is fired when the input value changes.
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /**
   * The placeholder text for the input.
   */
  placeholder?: string;
  /**
   * The type of the input element.
   * @default 'text'
   */
  type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url';
  /**
   * The name of the input element.
   */
  name?: string;
  /**
   * Optional class name to be applied to the input element.
   */
  className?: string;
  /**
   * Optional inline styles to be applied to the input element.
   */
  style?: CSSProperties;
};

/**
 * A visually appealing and easy-to-use text input component.
 * It features clean styling with distinct hover and focus states,
 * seamlessly integrating with the application's theme.
 */
export function TextInput({
  id,
  value,
  onChange,
  placeholder,
  type = 'text',
  name,
  className,
  style,
}: TextInputProps) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
      className={className ? `textInput ${className}` : 'textInput'}
    />
  );
}
