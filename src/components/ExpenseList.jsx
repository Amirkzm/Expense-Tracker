import { Container } from "@mui/material";
import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  const expenses = props.data.map((item) => {
    return (
      <ExpenseItem
        key={item.id}
        date={item.date}
        price={item.price}
        desc={item.description}
      />
    );
  });
  return <Container sx={{}}>{expenses}</Container>;
};

export default ExpenseList;
