type ButtonProps = {
    // Take no input event and return
    // handleClick: () => void
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}
export const Button = (props: ButtonProps) => {
    return <button onClick={props.handleClick}>Click</button>
}