import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Button, styled } from "@mui/material";

const FormBox = styled(Box)(({ theme }) => ({
  width: "47vw",
  height: "25vh",
  backgroundColor: theme.palette.grey[100],
  borderRadius: theme.shape.borderRadius,
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: theme.spacing(5),
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  padding: theme.spacing(2),
  columnGap: theme.spacing(4),
  "&>*": { flex: "0 1 auto" },
  "&>*:nth-child(4)": {
    flex: "0 1 30%",
    marginLeft: "40%",
    marginRight: "40%",
  },
}));

const ExpenseForm = (props) => {
  const [date, setDate] = useState(null);
  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const priceHandler = (event) => {
    setPrice(event.target.value);
  };

  const addNewExpenseHandler = () => {
    const stringDate = date
      .toString()
      .split(" ")
      .slice(1, 4)
      .reduce((acc, item) => {
        acc = acc + " " + item;
        console.log(acc);
        return acc;
      });
    console.log(stringDate);
    const yearFormat =
      stringDate.split(" ")[0] +
      " " +
      stringDate.split(" ")[2] +
      " " +
      stringDate.split(" ")[1];
    props.onAddExpense(title, price, yearFormat);
  };

  return (
    <FormBox component="form" noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        onChange={titleHandler}
      >
        {title}
      </TextField>
      <TextField
        id="filled-basic"
        label="price"
        variant="outlined"
        onChange={priceHandler}
      >
        {price}
      </TextField>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          value={date}
          label="Date"
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
          sx={{ width: 50 }}
        />
      </LocalizationProvider>
      <Button
        variant="contained"
        sx={{
          height: 50,
        }}
        onClick={addNewExpenseHandler}
      >
        Add
      </Button>
    </FormBox>
  );
};

export default ExpenseForm;
