import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses";
import ExpenseForm from "./components/newExpense/ExpenseForm";

const DUMMY_EXPENSES = [
  { id: "e1", date: "March 2021 12", description: "New TV", price: "$780" },
  { id: "e2", date: "April 2020 19", description: "basket", price: "$860" },
  { id: "e3", date: "June 2021 08", description: "Laptop", price: "$59" },
  {
    id: "e4",
    date: "March 2020 11",
    description: "New phone",
    price: "$665.69",
  },
  { id: "e5", date: "January 2021 28", description: "Bed", price: "$72.50" },
  { id: "e6", date: "March 2022 06", description: "TShirt", price: "$25.80" },
  { id: "e7", date: "July 2022 23", description: "bottle", price: "$45.80" },
];

function App() {
  const [initialData, setInitialData] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (title, price, date) => {
    const id =
      "e" + (parseInt(initialData[initialData.length - 1].id.split("")[1]) + 1);
    setInitialData([
      ...initialData,
      {
        id: id,
        date: date,
        description: title,
        price: price,
      },
    ]);
  };
  return (
    <>
      {console.log(JSON.stringify(initialData))}
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <Expenses data={initialData} />
    </>
  );
}

export default App;
