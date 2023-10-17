import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const clickAddExpenseHandler = () => {
    setIsEditing(true);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expenseData);
    setIsEditing(false);
  };

  const stopEditing = () =>{
      setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing &&<button onClick={clickAddExpenseHandler}>Add Expense</button>}
      {isEditing && <ExpenseForm onCancel={stopEditing}onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
