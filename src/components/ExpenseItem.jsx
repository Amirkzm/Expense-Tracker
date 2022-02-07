import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const DateBox = styled(Box)(({ theme }) => ({
  width: 80,
  height: "80%",
  marginTop: "auto",
  marginBottom: "auto",
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

const ExpenseItem = (props) => {
  const month = props.date.split(" ")[0];
  const year = props.date.split(" ")[1];
  const day = props.date.split(" ")[2];
  return (
    <Container
      sx={(theme) => ({
        width: "90%",
        height: "20%",

        borderRadius: 4,
        bgcolor: theme.palette.grey[600],
        display: "flex",
        justifyContent: "space-between",
        padding: theme.spacing(1),
        mb: theme.spacing(1),
      })}
    >
      <DateBox>
        <Typography>{month}</Typography>
        <Typography>{year}</Typography>
        <Typography variant="h4">{day}</Typography>
      </DateBox>

      <Typography
        variant="h5"
        sx={(theme) => ({
          color: theme.palette.common.white,
          mr: "auto",
          mt: "auto",
          mb: "auto",
          ml: "5%",
        })}
      >
        {props.desc}
      </Typography>

      <DateBox sx={{ width: 100, height: 50, mt: 2 }}>{props.price}</DateBox>
    </Container>
  );
};

export default ExpenseItem;
