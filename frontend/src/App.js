import logo from "./logo.svg";
import React from "react";
import "./App.css";
import ToDoDetail from "../src/components/index.js";
import { Box } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function App() {
  return (
    <div>
      <Provider store={store}>
        <ToDoDetail />
      </Provider>
    </div>
  );
}

export default App;
