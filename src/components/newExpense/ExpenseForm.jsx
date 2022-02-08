import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import DateAdapter from "@mui/lab/AdapterDayjs";

const ExpenseForm = () => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Title" variant="outlined" />
      <TextField id="filled-basic" label="Amount" variant="filled" />
      <TextField id="standard-basic" label="Date" variant="standard" />
    </Box>
  );
};

export default ExpenseForm;
