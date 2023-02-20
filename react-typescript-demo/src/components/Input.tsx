type InputProps = {
    value: string
    // handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
    // Pass event as a props
    // return <input type='text' value={props.value} onChange={props.handleChange} />
    // Define event as an element
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
    // The text box value will be fixed into empty string
    return <input type='text' value={props.value} onChange={handleInputChange} />
    // return <input type='text' />
}