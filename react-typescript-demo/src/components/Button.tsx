type ButtonProps = {
    // Take no input event and return
    // handleClick: () => void
    // React button event
    // handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
    // React button event with button id
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}
export const Button = (props: ButtonProps) => {
    // return <button onClick={props.handleClick}>Click</button>
    return <button onClick={(event) => props.handleClick(event, 87)}>Click</button>
}