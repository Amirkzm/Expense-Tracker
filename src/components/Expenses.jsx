import { Container } from "@mui/material";
import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [stateData, setStateData] = useState(
    props.data.filter(
      (item) =>
        item.date.split(" ")[1] ===
        props.data.map((item) => item.date.split(" ")[1]).sort()[0]
    )
  );

  const changeYearHandler = (year) => {
    setStateData(
      props.data.filter((item) => {
        return item.date.split(" ")[1] === year;
      })
    );
  };

  return (
    <Container>
      <ExpenseFilter data={props.data} onChangeYear={changeYearHandler} />
      <ExpenseList data={stateData} />
    </Container>
  );
};

export default Expenses;
