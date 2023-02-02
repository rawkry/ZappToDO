import React from "react";

import { useSnackbar } from "notistack";
import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

import { Box } from "@mui/system";
import DateField from "../common/date-picker";
import { Formik } from "formik";
import { api } from "../http/api";
import { useDispatch } from "react-redux";
import { createtodo, updatetodo } from "../store/reducer/todo";

const Form = ({ edit, todo, modalState }) => {
  console.log("form edit", edit);
  console.log("form todo", todo);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        margin: "20px",
      }}
    >
      <Card
        sx={{
          padding: "20px",
        }}
      >
        <Typography variant="h4">Add New Task</Typography>

        <Formik
          initialValues={{
            title: edit && todo ? todo.title : "",
            description: edit && todo ? todo.description : "",
            todo_date: edit && todo ? todo.todo_date : new Date().getTime(),
          }}
          onSubmit={async (values) => {
            try {
              if (edit && todo) {
                let res = await api.patch(`/to-do/${todo.id}`, {
                  title: values.title,
                  description: values.description,
                  todo_date: values.todo_date,
                });
                dispatch(updatetodo(res.data));
                modalState(false);
                return;
              } else {
                let res = await api.post("/to-do", {
                  title: values.title,
                  description: values.description,
                  todo_date: values.todo_date,
                });
                dispatch(createtodo(res.data));
              }
            } catch (error) {
              var parsedErr;
              // console.error(error);
              if (error && error.errors) {
                parsedErr = error.errors.map((e) => e.message).join("|");
              }
              setErrorMessage(parsedErr || "Login Error. Please try again.");
            }
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Grid container>
                <Grid item lg={12} md={12} mt={2}>
                  <TextField
                    id="outlined-basic"
                    label="Title"
                    name="title"
                    variant="outlined"
                    onChange={handleChange}
                    value={values.title}
                    fullWidth
                  />
                </Grid>
                <Grid item lg={12} md={12} mt={2}>
                  <TextField
                    id="outlined-basic"
                    label="Description"
                    name="description"
                    onChange={handleChange}
                    variant="outlined"
                    value={values.description}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6} mt={2}>
                  <DateField label="To-Do Date" name="todo_date" />
                </Grid>
                <Grid item md={12} mt={2}>
                  <Box sx={{ margin: "20px", justifyContent: "flex-end" }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      {edit ? "Update" : "Add"}
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Card>
    </Box>
  );
};

export default Form;
