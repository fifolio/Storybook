import Button from './Button'

export default {
    title: 'Components/Form/Button',
    component: Button,
    // 1. Define base Args that apply to all stories in this file
    args: {
        variant: 'primary',
        children: 'Submit',
    },
    // 2. Map specific props to specific UI controls (optional)
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'danger', 'success']
            }
        },
    }
}

export const Button_with_args = {};