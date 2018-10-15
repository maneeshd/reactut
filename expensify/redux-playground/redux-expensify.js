import { createStore, combineReducers } from "redux";
import uuid from "uuid"


/******************************** Actions **********************************/
//Add Expense
const add_expense = ({ description = "", note = "NA", amount = 0.0, created_at = 0 } = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description: description,
        note: note,
        amount: amount,
        created_at: created_at
    }
})

// Remove Expense
const remove_expense = (id) => ({
    type: "REMOVE_EXPENSE",
    id: id
})

// Edit Expense
const edit_expense = (id, updates = {}) => ({
    type: "EDIT_EXPENSE",
    id: id,
    updates: updates
})

// Set Text Filter
const set_text_filter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text: text
})

// Sort By Amount
const sort_by_amount = () => ({
    type: "SORT_BY_AMOUNT"
})

// Sort By Date
const sort_by_date = () => ({
    type: "SORT_BY_DATE"
})

// Set start date
const set_start_date = (start_date = undefined) => ({
    type: "SET_START_DATE",
    start_date: start_date
})

// Set end date
const set_end_date = (end_date = undefined) => ({
    type: "SET_END_DATE",
    end_date: end_date
})

/******************************** Reducers **********************************/
// Expenses Reducer
const expenses_reducer_default_state = []

const expenses_reducer = (state = expenses_reducer_default_state, action) => {
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

// Filters Reducer
const filters_default_state = {
    text: "",
    sort_by: "date",
    start_date: undefined,
    end_date: undefined
}

const filters_reducer = (state = filters_default_state, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            }
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sort_by: "amount"
            }
        case "SORT_BY_DATE":
            return {
                ...state,
                sort_by: "date"
            }
        case "SET_START_DATE":
            return {
                ...state,
                start_date: action.start_date
            }
        case "SET_END_DATE":
            return {
                ...state,
                end_date: action.end_date
            }
        default:
            return state
    }
}

const store = createStore(
    combineReducers({
        expenses: expenses_reducer,
        filters: filters_reducer
    })
)

// State Visibility
const get_visible_expenses = (expenses, {text, sort_by, start_date, end_date }) => {
    // Apply Filter
    let filtered_expenses = expenses.filter((expense) => {
        const start_date_match = typeof start_date !== "number" || expense.created_at >= start_date
        const end_date_match = typeof start_date !== "number" || expense.created_at <= end_date
        const text_match = (expense.description.toLowerCase().includes(text.toLowerCase()) ||
                            expense.note.toLowerCase().includes(text.toLowerCase()))

        return start_date_match && end_date_match && text_match
    })

    const date_comparator = (exp1, exp2) => (
        (exp1.created_at > exp2.created_at) ? 1 : (exp1.created_at < exp2.created_at) ? -1 : 0
    )

    const amount_comparator = (exp1, exp2) => (
        (exp1.amount > exp2.amount) ? -1 : (exp1.amount < exp2.amount) ? 1 : 0
    )

    // Apply Sort
    switch (sort_by) {
        case "date":
            return filtered_expenses.sort(date_comparator)
        case "amount":
            return filtered_expenses.sort(amount_comparator)
        default:
            return filtered_expenses
    }
}

// Store Change Subscription
store.subscribe(() => {
    const cur_state = store.getState()
    const visible_expenses = get_visible_expenses(cur_state.expenses, cur_state.filters)
    console.log(visible_expenses)
})


// Action Dispatchers
const expense_1 = store.dispatch(add_expense({
    "description": "October Rent",
    "amount": 7700.0,
    "created_at": 117
}))

const expense_2 = store.dispatch(add_expense({
    "description": "Ass fucking fee",
    "amount": 10.0,
    "created_at": 127
}))

store.dispatch(remove_expense(expense_1.expense.id))

store.dispatch(edit_expense(expense_2.expense.id, {"description": "Milk"}))

store.dispatch(set_text_filter("milk"))

store.dispatch(set_start_date(125))

store.dispatch(set_end_date(130))

store.dispatch(add_expense({
    "description": "Grocery",
    "amount": 15.0,
    "note": "milk & eggs",
    "created_at": 129
}))

store.dispatch(sort_by_amount())

//store.dispatch(sort_by_date())

// Example state
const demo_state = {
    expenses: [{
        id: "123456",
        description: "October rent",
        note: "This was the penultimate payment for that address",
        amount: 7700,
        created_at: 0
    }],
    filters: {
        text: "rent",
        sort_by: "amount",    // date or amount
        start_date: undefined,
        end_date: undefined
    }
}