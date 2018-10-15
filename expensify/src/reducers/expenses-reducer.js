// Expenses Reducer
const expenses_reducer_default_state = []

export default (state = expenses_reducer_default_state, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            // return state.concat(action.expense) -> using 'spread' below
            return [...state, action.expense]
        case "REMOVE_EXPENSE":
            return state.filter(({ id }) => id !== action.id)
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        default:
            return state
    }
}