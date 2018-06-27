import React from 'react';
import ExpenseList from './ExpenseList'
import ExpensesFilters from './ExpensesFilters'
import ExpensesSummary from './ExpensesSummary'


const DashboardPage = () => (
  <div>
      <ExpensesSummary />
      <ExpensesFilters />
      <ExpenseList />
  </div>
)


export default DashboardPage;
