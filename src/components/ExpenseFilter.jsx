import {
  Box,
  Container,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const ExpenseFilter = (props) => {
  const handleChange = (event) => {
    props.onChangeYear(event.target.value);
  };

  const yearsList = props.data.map((item) => item.date.split(" ")[1]);
  const finalYearsList = yearsList
    .filter((value, index) => yearsList.indexOf(value) === index)
    .sort();

  const Items = finalYearsList.map((item, index) => (
    <MenuItem key={index} value={item}>
      {item}
    </MenuItem>
  ));

  return (
    <Container
      sx={{
        width: "80%",
        ml: "auto",
        mr: "auto",
        mt: 5,
        mb: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          pt: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={(theme) => ({ color: theme.palette.common.white })}
        >
          Filter by Year
        </Typography>
        <FormControl
          fullWidth
          sx={(theme) => ({
            width: "25%",
            ml: "auto",
            bgcolor: theme.palette.common.white,
            color: theme.palette.common.black,
          })}
        >
          <Select
            label="year"
            defaultValue={finalYearsList[0]}
            onChange={handleChange}
            sx={(theme) => ({
              color: theme.palette.common.black,
              bgColor: "red",
            })}
          >
            {Items}
          </Select>
        </FormControl>
      </Box>
    </Container>
  );
};

export default ExpenseFilter;
