// State Visibility
const date_comparator = (exp1, exp2) => (
    (exp1.created_on.valueOf() > exp2.created_on.valueOf()) ? 1 : (exp1.created_on.valueOf() < exp2.created_on.valueOf()) ? -1 : 0
)

const amount_comparator = (exp1, exp2) => (
    (exp1.amount > exp2.amount) ? 1 : (exp1.amount < exp2.amount) ? -1 : 0
)


export default (expenses, {text, sort_by, sort_order, start_date, end_date }) => {
    // Apply Filter
    let filtered_expenses = expenses.filter((expense) => {
        const start_date_match = typeof start_date !== "number" || expense.created_on.valueOf() >= start_date
        const end_date_match = typeof start_date !== "number" || expense.created_on.valueOf() <= end_date
        const text_match = (expense.expense_name.toLowerCase().includes(text.toLowerCase()) ||
                            expense.description.toLowerCase().includes(text.toLowerCase()))

        return start_date_match && end_date_match && text_match
    })

    // Apply Sort
    switch (sort_by) {
        case "date":
            if(sort_order === "asc") {
                return filtered_expenses.sort(date_comparator)
            } else {
                return filtered_expenses.sort(date_comparator).reverse()
            }
        case "amount":
            if(sort_order === "asc") {
                return filtered_expenses.sort(amount_comparator)
            } else {
                return filtered_expenses.sort(amount_comparator).reverse()
            }
        default:
            return filtered_expenses
    }
}