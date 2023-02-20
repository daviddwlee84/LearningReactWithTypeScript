type PersonListProps = {
    names: {
        first: string
        last: string
    }[] // make this a list
}

export const PersonList = (props: PersonListProps) => {
    return (
        // <div>
        //     <h2>Bruce Wayne</h2>
        //     <h2>Clark Kent</h2>
        //     <h2>Princess Diana</h2>
        // </div>
        <div>
            {
                props.names.map(name => {
                    return (
                        <h2 key={name.first}>
                            {name.first} {name.last}
                        </h2>
                    )
                })
            }
        </div>
    )
}