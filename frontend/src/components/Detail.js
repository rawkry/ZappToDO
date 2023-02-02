import {
  Avatar,
  Box,
  Card,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Stack,
  Tooltip,
  IconButton,
  Dialog,
} from "@mui/material";
import moment from "moment";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { api } from "../http/api";
import { deletetodo, gettodos } from "../store/reducer/todo";
import { DeleteForever, Edit } from "@mui/icons-material";
import Form from "./Form";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Detail = () => {
  const dispatch = useDispatch();
  const [edit, setEdit] = React.useState(false);
  const [todo, setTodo] = React.useState(null);
  const [modalState, setModalState] = useState(false);
  const todos = useSelector((state) => state.userTodo.todos);

  const handleEdit = (item) => {
    setEdit(true);
    setTodo(item);
  };

  const handleDelete = async (item) => {
    try {
      await api.delete(`/to-do/${item.id}`);
      dispatch(deletetodo(item.id));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    const res = await api.get("/to-do");
    dispatch(gettodos(res.data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box
      sx={{
        margin: "20px",
        // maxWidth: "70rem",
      }}
    >
      <Card>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
          }}
        >
          Your's TODO
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Title</StyledTableCell>
                <StyledTableCell align="right">Description</StyledTableCell>
                <StyledTableCell align="right">Date</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todos &&
                todos.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {row.title}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.description}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {moment(new Date(row.todo_date)).format("MMM Do YY")}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Stack direction={"row"} justifyContent={"flex-end"}>
                        <Tooltip title="Edit">
                          <IconButton onClick={() => handleEdit(row)}>
                            <Edit />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton onClick={() => handleDelete(row)}>
                            <DeleteForever />
                          </IconButton>
                        </Tooltip>
                      </Stack>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      {edit && (
        <Dialog open={edit} onClose={() => setEdit(false)}>
          <Form edit={edit} todo={todo} modalState={setEdit} />
        </Dialog>
      )}
    </Box>
  );
};

export default Detail;
