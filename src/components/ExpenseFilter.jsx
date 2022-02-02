import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const ExpenseFilter = (props) => {
  const [selectedYear, setSelectedYear] = useState(
    props.data.map((item) => item.date.split(" ")[1]).sort()[0]
  );
  const handleChange = (event) => {
    props.onChangeYear(event.target.value);
  };

  const yearsList = props.data.map((item) => item.date.split(" ")[1]);
  const finalYearsList = yearsList
    .filter((value, index) => yearsList.indexOf(value) === index)
    .sort();

  let i = 0;
  const Items = finalYearsList.map((item) => (
    <MenuItem key={i++} value={item}>
      {item}
    </MenuItem>
  ));

  return (
    <Box sx={{ width: "40%", ml: "auto", mr: "auto", mt: 5 }}>
      <FormControl fullWidth>
        <InputLabel>year</InputLabel>
        <Select
          label="year"
          defaultValue={finalYearsList[0]}
          onChange={handleChange}
        >
          {Items}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ExpenseFilter;
