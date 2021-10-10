import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../Filter/ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredItems = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
  <ExpensesList items={filteredItems} />
      </Card>
    </div>
  );
};

export default Expenses;
