// To be an object {}
type GreetProps = {
    name: string
    // Make this an optional parameter
    messageCount?: number
    isLoggedIn: boolean
}

/*
If without identify the props's type

ERROR in src/components/Greet.tsx:1:23
TS7006: Parameter 'props' implicitly has an 'any' type.
  > 1 | export const Greet = (props) => {
      |                       ^^^^^
    2 |     return (
    3 |         <div>
    4 |             <h2>Welcome {props.name}! You have 10 unread messages</h2>
*/
export const Greet = (props: GreetProps) => {
    const { messageCount = 0 } = props; // give default value
    return (
        <div>
            <h2>
                {
                    props.isLoggedIn
                        ? `Welcome ${props.name}! You have ${messageCount} unread messages`
                        : 'Welcome Guest'
                }
            </h2>
        </div>
    )
}
