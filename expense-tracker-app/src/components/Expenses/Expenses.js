import React, {useState} from "react";
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        // console.log('Expenses.js')
        // console.log(selectedYear);
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expenseContent = <p>No expenses found...</p>;

    if(filteredExpenses.length > 0){
        expenseContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}/>
        ));

    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter startYear={filteredYear} onChangeFilterYear={filterChangeHandler}/>
                {expenseContent}
            </Card>
        </div>
    );
}
export default Expenses;