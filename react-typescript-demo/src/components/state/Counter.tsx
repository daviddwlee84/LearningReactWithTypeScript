import { useReducer } from "react";

type CounterState = {
    count: number
}

type UpdateAction = {
    type: 'increment' | 'decrement'
    payload: number
}

type ResetAction = {
    type: 'reset'
}

type CounterAction = UpdateAction | ResetAction;

/*
type CounterAction = {
    // type: string
    // Template literal
    type: 'increment' | 'decrement' | 'reset'
    payload?: number
}
*/

// Counter's initial state
const initialState: CounterState = { count: 0 };

// For updating the state
function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return initialState
        default:
            return state
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // JSX
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment', payload: 10})}>Increment 10</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10})}>Decrement 10</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </> 
    )
}
