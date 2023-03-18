import "./ExpenseDate.css";

function ExpenseDate(props) {
  const newDate = new Date(props.date);
  const month = newDate.toLocaleString("en-US", { month: "long" });
  const day = newDate.toLocaleString("en-US", { day: "2-digit" });
  const year = newDate.getFullYear();
  return (
    <div className="expense-date">
      <div className="month">{month}</div>
      <div className="year">{year}</div>
      <div className="day">{day}</div>
    </div>
  );
}
export default ExpenseDate;
