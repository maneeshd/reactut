import { createStore } from "redux"


// Action Generators => Functions that generate redux action objects
const increment_count = ({ increment_by = 1} = {}) => {
    return {
        type: "INCREMENT",
        increment_by: typeof increment_by === "number" ? increment_by : 1
    }
}

const decrement_count = ({ decrement_by = 1} = {}) => {
    return {
        type: "DECREMENT",
        decrement_by: typeof decrement_by === "number" ? decrement_by : 1
    }
}

const set_count = ({ count = 0 } = {}) => {
    return {
        type: "SET",
        count: typeof count === "number" ? count : 0
    }
}

const reset_count = () => {
    return {
        type: "SET",
        count: 0
    }
}

/*
Reducers: Decide the state of the app based on the action
Properties of redices:
    1. Reduces are pure functions. (Output of the function depends only on the input variables)
    2. Never change state or action directly. Always return the new state.
*/
const count_reducer = (state = {count: 0}, action) => {    // Reducer
    switch (action.type) {
        case "SET": {
            return {
                count: action.count
            }
        }
        case "INCREMENT": {
            return {
                count: state.count + action.increment_by
            }
        }
        case "DECREMENT": {
            return {
                count: state.count - action.decrement_by
            }
        }
        default: {
            return state
        }
    }
}

// Redux Store
const store = createStore(count_reducer)

console.log(store.getState())

// subscribe returns a function to stop subscribing
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

// Send an action to store
store.dispatch(increment_count())

store.dispatch(decrement_count({decrement_by: 2}))

store.dispatch(increment_count({increment_by: 3}))

store.dispatch(set_count({count: 10}))

store.dispatch(reset_count())

// Stop subscribing state from store
unsubscribe()

store.dispatch(increment_count())