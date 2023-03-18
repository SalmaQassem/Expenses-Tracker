import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length > 0) {
    return props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        price={expense.price}
        date={expense.date}
      />
    ));
  } else {
    return <p className="message">no data found</p>;
  }
};
export default ExpensesList;
