// Type of "react component"
type OscarProps = {
    // No need to import "react" with React later than version 17
    // Check this in package.json
    // "@types/react": "^17.0.0"
    children: React.ReactNode
}

export const Oscar = (props: OscarProps) => {
    return <div>{props.children}</div>
}