import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {

    const [currentId, setCurrentId] = useState(1);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: currentId.toString()
        };
        setCurrentId(prevId => prevId + 1);
        console.log(expenseData)
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
};

export default NewExpense;