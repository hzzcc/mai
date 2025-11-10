import type { Meta, StoryObj } from 'storybook-react-rsbuild';

import { TextInput } from '../text-input';

const meta: Meta<typeof TextInput> = {
  title: 'Components/Inputs/TextInput',
  component: TextInput,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof TextInput> = {};

export const EmailInput: StoryObj<typeof TextInput> = {
  args: {
    type: 'email',
    placeholder: 'Email Address',
    name: 'email',
    id: 'email',
  },
};

export const PasswordInput: StoryObj<typeof TextInput> = {
  args: {
    type: 'password',
    placeholder: 'Password',
    name: 'password',
    id: 'password',
  },
};

export const SearchInput: StoryObj<typeof TextInput> = {
  args: {
    type: 'search',
    placeholder: 'Search...',
    name: 'search',
    id: 'search',
  },
};
