import { Box, Container, Slide, styled, Typography } from "@mui/material";
import React, { useRef, useState } from "react";

const ChartItem = styled(Box)(({ theme }) => ({
  width: 10,
  height: 90,
  backgroundColor: theme.palette.secondary.light,
  borderRadius: theme.shape.borderRadius,
}));

const ChartData = [
  { label: "Jan", value: 0 },
  { label: "Feb", value: 0 },
  { label: "Mar", value: 0 },
  { label: "Apr", value: 0 },
  { label: "May", value: 0 },
  { label: "Jun", value: 0 },
  { label: "Jul", value: 0 },
  { label: "Aug", value: 0 },
  { label: "Sep", value: 0 },
  { label: "Oct", value: 0 },
  { label: "Nov", value: 0 },
  { label: "Dec", value: 0 },
];

const ExpenseChartItem = (props) => {
  const [slideBar, setSlidebar] = useState(true);
  ChartData.forEach((item) => (item.value = 0));
  let totalExpense = 0.0;
  props.data.forEach((expense) => {
    totalExpense += parseFloat(expense.price.split("$")[1]);
    ChartData.forEach((item) => {
      if (expense.date.split(" ")[0].substr(0, 3) === item.label) {
        item.value += parseFloat(expense.price.split("$")[1]);
      }
    });
  });

  const chartBox = ChartData.map((item, index) => {
    let temp = parseInt((item.value / totalExpense) * 90);
    return (
      <Box
        key={index}
        sx={{
          mr: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ChartItem
          sx={{
            display: "flex",
            flexDirection: "column-reverse",
            overflow: "hidden",
          }}
        >
          <Slide direction="up" in={slideBar} timeout={1000}>
            <Box
              sx={(theme) => ({
                width: 10,
                height: temp,
                backgroundColor: theme.palette.primary.main,
                borderRadius: theme.shape.borderRadius,
              })}
            />
          </Slide>
        </ChartItem>
        <Typography sx={{ color: "white", fontSize: 8 }}>
          {item.label}
        </Typography>
      </Box>
    );
  });
  slideBar = false;
  return <Container sx={{ display: "flex", mb: 10 }}>{chartBox}</Container>;
};

export default ExpenseChartItem;
