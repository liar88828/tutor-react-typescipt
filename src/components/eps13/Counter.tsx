import { useReducer } from 'react'

type CounterState = { count: number }

// type CounterAction = {
//     type: 'increment' | 'decrement' | 'reset'// for strict 
//     payload?: number
// }

type CounterAction = UpdateAction | ResetAction


type UpdateAction = {
    type: 'increment' | 'decrement', payload: number
}

type ResetAction = { type: 'reset' }

const initialState = { count: 0 }

const reducer = (state: CounterState, action: CounterAction) => {
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


const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>Counter : {state.count}

            <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>Increment +</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>Decrement -</button>
            <button onClick={() => dispatch({
                type: 'reset', //payload: 0
            })}>Reset</button>
        </div >
    )
}

export default Counter