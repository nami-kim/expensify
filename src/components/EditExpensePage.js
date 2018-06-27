import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {

  onSubmit = (updates) => {
    this.props.editExpense(this.props.expense.id, updates)
    this.props.history.push('/')
  };
  onRemove = ({ id }) => {
    this.props.removeExpense({ id: this.props.expense.id })
    this.props.history.push('/')
  };
  
  render() {

    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1>Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button onClick={this.onRemove} className="button button--secondary">Remove Expense</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, updates) => dispatch(editExpense(id, updates)),
  removeExpense: ({ id }) => dispatch(removeExpense({ id }))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);