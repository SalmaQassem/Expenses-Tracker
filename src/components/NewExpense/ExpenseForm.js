import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [userInputs, setUserInputs] = useState({
    title: "",
    price: "",
    date: "",
  });

  const titleChangeHandler = (e) => {
    if (e.target.value.trim() !== "") {
      setUserInputs((prevTitle) => {
        return { ...prevTitle, title: e.target.value.trim() };
      });
    }
  };

  const amountChangeHandler = (e) => {
    if (e.target.value.trim() !== "") {
      setUserInputs((prevAmount) => {
        return { ...prevAmount, price: +e.target.value.trim() };
      });
    }
  };

  const dateChangeHandler = (e) => {
    if (e.target.value.trim() !== "") {
      setUserInputs((prevDate) => {
        return { ...prevDate, date: e.target.value };
      });
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.onSaveData(userInputs);
    setUserInputs({
      title: "",
      price: "",
      date: "",
    });
  };

  const onCancelHandler = () => {
    props.onCancel();
  };

  return (
    <form className="expense-form" onSubmit={formSubmitHandler}>
      <div className="expenses-controls">
        <div className="expenses-control">
          <label>title</label>
          <input
            placeholder="Enter Title"
            type="text"
            value={userInputs.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="expenses-control">
          <label>amount</label>
          <input
            placeholder="Enter Amount"
            type="number"
            min="0.01"
            step="0.01"
            value={userInputs.price}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="expenses-control">
          <label>date</label>
          <input
            placeholder="Enter Date"
            type="date"
            value={userInputs.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="expenses-submit">
        <button type="text" onClick={onCancelHandler}>
          cancel
        </button>
        <button type="submit">add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
