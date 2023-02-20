// https://blog.logrocket.com/using-react-children-prop-with-typescript/
type HeadingProps = {
    children: string
}

export const Heading = (props: HeadingProps) => {
    return <h2>{props.children}</h2>
}
