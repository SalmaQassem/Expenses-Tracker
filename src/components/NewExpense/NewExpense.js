import "./NewExpense.css";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [clickState, setclickState] = useState(false);

  const saveDataHandler = (enteredData) => {
    const data = {
      id: Math.random().toString(),
      ...enteredData,
    };
    props.onSaveFormData(data);
  };

  const cancelHandler = () => {
    setclickState(false);
  };

  const onClickAddHandler = () => {
    setclickState(true);
  };

  return (
    <Card className="new-expense">
      {clickState === true && (
        <ExpenseForm onSaveData={saveDataHandler} onCancel={cancelHandler} />
      )}
      {clickState === false && (
        <div className="add-expense">
          <button onClick={onClickAddHandler}>add new expense</button>
        </div>
      )}
    </Card>
  );
};

export default NewExpense;
