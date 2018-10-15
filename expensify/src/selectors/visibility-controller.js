// State Visibility
const date_comparator = (exp1, exp2) => (
    (exp1.created_at > exp2.created_at) ? 1 : (exp1.created_at < exp2.created_at) ? -1 : 0
)

const amount_comparator = (exp1, exp2) => (
    (exp1.amount > exp2.amount) ? -1 : (exp1.amount < exp2.amount) ? 1 : 0
)


export default (expenses, {text, sort_by, start_date, end_date }) => {
    // Apply Filter
    let filtered_expenses = expenses.filter((expense) => {
        const start_date_match = typeof start_date !== "number" || expense.created_at >= start_date
        const end_date_match = typeof start_date !== "number" || expense.created_at <= end_date
        const text_match = (expense.description.toLowerCase().includes(text.toLowerCase()) ||
                            expense.note.toLowerCase().includes(text.toLowerCase()))

        return start_date_match && end_date_match && text_match
    })

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