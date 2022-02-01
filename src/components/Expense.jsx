import { Box, Container, Grid, Typography } from "@mui/material";
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

const PriceBox = styled(Box)(({ theme }) => ({
  width: 100,
  height: 50,
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
}));

const Expense = () => {
  return (
    <Container
      sx={(theme) => ({
        width: "40%",
        borderRadius: 4,
        bgcolor: theme.palette.grey[600],
        display: "flex",
        justifyContent: "space-between",
        padding: theme.spacing(1),
      })}
    >
      <DateBox>
        <Typography>March</Typography>
        <Typography>2021</Typography>
        <Typography variant="h4">12</Typography>
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
        New TV
      </Typography>

      <DateBox sx={{ width: 100, height: 50, mt: 2 }}>$ 780</DateBox>
    </Container>
  );
};

export default Expense;
