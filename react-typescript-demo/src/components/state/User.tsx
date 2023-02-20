import { useState } from "react";

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    // const [user, setUser] = useState(null)
    const [user, setUser] = useState<null | AuthUser>(null)
    /*
    Compiled with problems:X

    ERROR in src/components/state/User.tsx:12:13

    TS2345: Argument of type '{ name: string; email: string; }' is not assignable to parameter of type 'SetStateAction<null>'.
    Object literal may only specify known properties, and 'name' does not exist in type '(prevState: null) => null'.
        10 |     const handleLogin = () => {
        11 |         setUser({
    > 12 |             name: 'Vishwas',
        |             ^^^^^^^^^^^^^^^
        13 |             email: 'vishwas@exmple.com'
        14 |         })
        15 |     }
    */
    // const handleLogin = () => {
    //     setUser({
    //         name: 'Vishwas',
    //         email: 'vishwas@exmple.com'
    //     })
    // }
    const handleLogin = () => {
        setUser({
            name: 'Vishwas',
            email: 'vishwas@exmple.com'
        })
    }
    const handleLogout = () => {
        // set user to null
        setUser(null)
    }
    return (
        // Since user can be null so we use user?.*
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
}