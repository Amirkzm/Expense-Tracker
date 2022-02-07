import { Container } from "@mui/material";
import React, { useState } from "react";
import ExpenseChartItem from "./ExpenseChartItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [filteredExpense, setFilteredExpense] = useState(
    props.data.filter(
      (item) =>
        item.date.split(" ")[1] ===
        props.data.map((item) => item.date.split(" ")[1]).sort()[0]
    )
  );
  const [selectedYear, setSelectedYear] = useState(
    props.data.map((item) => item.date.split(" ")[1]).sort()[0]
  );
  const [yearChanged, setYearChanged] = useState("false");

  const changeYearHandler = (year) => {
    setSelectedYear(year);
    setFilteredExpense(
      props.data.filter((item) => {
        return item.date.split(" ")[1] === year;
      })
    );
    setYearChanged((prev) => !prev);
  };

  return (
    <Container
      sx={(theme) => ({
        bgcolor: theme.palette.common.black,
        width: "50vw",
        height: "90vh",
      })}
    >
      <ExpenseFilter data={props.data} onChangeYear={changeYearHandler} />
      <ExpenseChartItem
        data={filteredExpense}
        selectedYear={selectedYear}
        yearChanged={yearChanged}
      />
      <ExpenseList data={filteredExpense} />
    </Container>
  );
};

export default Expenses;
