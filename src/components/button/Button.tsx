import './Button.css'


type ButtonProps = {
    variant: 'primary' | 'secondary' | 'danger' | 'success',
    children: React.ReactNode,
    [key: string]: unknown
}

function Button(props: ButtonProps) {
    const { variant = 'primary', children, ...rest } = props
    return (
        <button className={`button ${variant}`} {...rest}>
            {children}
        </button>
    )
}

export default Button