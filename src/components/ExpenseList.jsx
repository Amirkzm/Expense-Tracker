import { Container } from "@mui/material";
import React from "react";
import Expense from "./Expense";

const ExpenseList = (props) => {
  return (
    <Container>
      {props.data.map((item) => (
        <Expense
          key={item.id}
          date={item.date}
          price={item.price}
          desc={item.description}
        />
      ))}
    </Container>
  );
};

export default ExpenseList;
