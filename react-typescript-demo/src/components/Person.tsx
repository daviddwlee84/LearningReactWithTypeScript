// Tip2: put type definition in different files
import { PersonProps } from "./Person.types"

/*
type PersonProps = {
    name: {
        first: string
        last: string
    }
}
*/

export const Person = (props: PersonProps) => {
    // return <div>Bruce Wayne</div>
    return <div>{props.name.first} {props.name.last}</div>
}
