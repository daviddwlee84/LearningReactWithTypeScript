type ButtonProps = {
    // Take no input event and return
    handleClick: () => void
}
export const Button = (props: ButtonProps) => {
    return <button onClick={props.handleClick}>Click</button>
}