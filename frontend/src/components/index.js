import { Box } from "@mui/material";
import React from "react";
import Detail from "./Detail";
import Form from "./Form";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const index = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        sx={{
          margin: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",

            margin: "20px",
            alignItems: "center",
            justifyContent: "center",
            //   width: "100%",
          }}
        >
          <Form />
        </Box>

        <Detail />
      </Box>
    </LocalizationProvider>
  );
};

export default index;
