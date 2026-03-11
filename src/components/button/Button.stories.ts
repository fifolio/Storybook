import Button from './Button'

export default {
    title: 'Components/Form/Button',
    component: Button,
}

export const Primary = () => Button({ variant: 'primary', children: 'Primary Button' })
export const Secondary = () => Button({ variant: 'secondary', children: 'Secondary Button' })
export const Danger = () => Button({ variant: 'danger', children: 'Danger Button' })
export const Success = () => Button({ variant: 'success', children: 'Success Button' }) 