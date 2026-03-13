import Button from './Button';

export default {
  title: 'Components/Form/Button',
  component: Button,
  tags: ['autodocs'], // this enables the Docs page. (Storybook generates documentation automatically from stories when the autodocs tag is present.)
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    onClick: console.log('Primary Button Clicked'),
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    children: 'Danger Button',
  },
};

export const Success = {
  args: {
    variant: 'success',
    children: 'Success Button',
  },
};