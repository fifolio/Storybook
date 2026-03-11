import Input from './Input';

export default {
    title: 'Components/Form/Input',
    Component: Input,
}

export const Small = () => Input({
    type: 'text',
    placeholder: 'Enter text',
    size: "small"
})

export const Medium = () => Input({
    type: 'text',
    placeholder: 'Enter text',
    size: "medium"
})

export const Large = () => Input({
    type: 'text',
    placeholder: 'Enter text',
    size: "large"
})

Small.storyName = 'Small Input'
Medium.storyName = 'Medium Input'
Large.storyName = 'Large Input'