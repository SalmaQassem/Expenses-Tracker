import "./App.css";
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "car insurance",
    price: 294.7,
    date: new Date(2021, 1, 28),
  },
  {
    id: 2,
    title: "groceries",
    price: 150,
    date: new Date(2022, 3, 1),
  },
  {
    id: 3,
    title: "home & utilities",
    price: 210,
    date: new Date(2023, 2, 15),
  },
  {
    id: 4,
    title: "transportation fares",
    price: 60,
    date: new Date(2023, 5, 8),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const onSaveFormDataHandler = (savedData) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, savedData];
    });
  };

  return (
    <div className="App">
      <NewExpense onSaveFormData={onSaveFormDataHandler} />
      <Expenses data={expenses} />
    </div>
  );
};

export default App;
