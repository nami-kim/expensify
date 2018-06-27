import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import expensesTotal from '../selectors/expensesTotal'
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral'


const ExpensesSummary = ({ expensesTotal, expenseCount }) => {
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header_title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
        <Link className="button" to="/create">Add Expense</Link>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  return {
    expensesTotal: expensesTotal(visibleExpenses),
    expenseCount: visibleExpenses.length
  }
}

export default connect(mapStateToProps)(ExpensesSummary)