import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Computer",
    amount: 999,
    date: new Date(2022,2, 3),
  },
  {
    id: "e6",
    title: "Monitor",
    amount: 200,
    date: new Date(2022, 8, 12),
  },
  {
    id: "e7",
    title: "Lamp",
    amount: 80,
    date: new Date(2022, 4, 12),
  },
  {
    id: "e8",
    title: "Speakers",
    amount: 740,
    date: new Date(2022, 1, 12),
  },
  {
    id: "e9",
    title: "Laptop",
    amount: 500,
    date: new Date(2019, 2, 12),
  },
  {
    id: "e10",
    title: "Chair",
    amount: 210,
    date: new Date(2019, 5, 12),
  },
  {
    id: "e11",
    title: "Mouse",
    amount: 70,
    date: new Date(2019, 7, 12),
  },
  {
    id: "e12",
    title: "Logitech Keyboard",
    amount: 200,
    date: new Date(2019, 4, 12),
  },
  {
    id: "e13",
    title: "Track pad",
    amount: 250,
    date: new Date(2019, 9, 12),
  },
  {
    id: "e14",
    title: "Camera",
    amount: 400,
    date: new Date(2019, 2, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddNewExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
