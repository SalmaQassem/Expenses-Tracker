import "./Expenses.css";
import Card from "../UI/Card";
import FilterExpense from "./FilterExpense";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("");

  const onChangeYearHandler = (year) => {
    setFilteredYear(year);
  };

  let filteredExpenses = props.data.filter(
    (expense) =>
      new Date(expense.date).getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <FilterExpense onChangeYear={onChangeYearHandler} />
      <ExpensesChart data={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};
export default Expenses;
