import uuid from "uuid"

//Add Expense
export const add_expense = (expense_name = "", description = "NA", amount = 0.0, created_on = 0) => ({
    type: "ADD_EXPENSE",
    expense: {
        eid: uuid(),
        expense_name: expense_name,
        description: description,
        amount: amount,
        created_on: created_on
    }
})

// Remove Expense
export const remove_expense = (eid) => ({
    type: "REMOVE_EXPENSE",
    eid: eid
})

// Edit Expense
export const edit_expense = (eid, updates = {}) => ({
    type: "EDIT_EXPENSE",
    eid: eid,
    updates: updates
})