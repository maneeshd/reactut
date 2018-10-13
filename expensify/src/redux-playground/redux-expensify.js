import { createStore, combineReducers } from "react-redux";


const demo_state = {
    expenses: [{
        id: "mdivana",
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
