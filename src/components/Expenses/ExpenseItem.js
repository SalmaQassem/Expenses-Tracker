import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-data">
        <p className="title">{props.title}</p>
        <div className="price">${props.price}</div>
      </div>
    </Card>
  );
};
export default ExpenseItem;
