import './Input.css';


type InputProps = {
  type: 'text' | 'password' | 'email' | 'number',
  placeholder?: string,
  value?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  size?: string,
}

export default function Input(props: InputProps) {

  const { size = "medium", ...rest } = props

  return (
    <input className={`input ${size}`}  {...rest} />
  )
}
