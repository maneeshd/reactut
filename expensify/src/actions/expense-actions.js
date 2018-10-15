import uuid from "uuid"

//Add Expense
export const add_expense = (description = "", note = "NA", amount = 0.0, created_at = 0) => ({
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
export const remove_expense = (id) => ({
    type: "REMOVE_EXPENSE",
    id: id
})

// Edit Expense
export const edit_expense = (id, updates = {}) => ({
    type: "EDIT_EXPENSE",
    id: id,
    updates: updates
})