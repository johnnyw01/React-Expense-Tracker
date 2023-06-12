import React from "react";
import "./ExpenseForm.css";
import {useState} from "react";

const ExpenseForm = (props) => {
   const [enteredTitle, setEnteredTitle] = useState('');
   const [enteredAmount, setEnteredAmount] = useState('');
   const [enteredDate, setEnteredDate] = useState('');

    //Alternative Single-State Syntax instead of the multi-state syntax above
   // const [userInput, setUserInput] = useState({
   //      enteredTitle: '',
   //      enteredAmount: '',
   //      enteredDate: ''
   //  });
    const titleChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredTitle(event.target.value);

        //Alternative single-state syntax that uses the most recent previous state and only modifies a specific KVP within the state object
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle: event.target.value};
        // });
    };
    const amountChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredAmount(event.target.value);

        //Alternative single-state syntax that uses the most recent previous state and only modifies a specific KVP within the state object
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredAmount: event.target.value};
        // });
    };
    const dateChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredDate(event.target.value);

        //Alternative single-state syntax that uses the most recent previous state and only modifies a specific KVP within the state object
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredDate: event.target.value};
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };

    return (
        <form onSubmit={submitHandler} action="">
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount}  onChange={amountChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" min="2020-01-01" max="2029-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    );
};
export default ExpenseForm;