import Button from './Button';

export default {
    title: 'Components/Form/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' }, // automatically logs clicks
    },
};

// Each story now uses "args" instead of manually calling Button()
export const Primary = {
    args: {
        variant: 'primary',
        children: 'Primary Button',
        onClick: () => console.log('Primary button clicked!'),
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