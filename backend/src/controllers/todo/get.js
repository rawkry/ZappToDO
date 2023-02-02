import { Todo } from "../../model/todo.js";

const getToDo = async (req, res) => {
  try {
    const getTodo = await Todo.find({});
    if (!getTodo) return res.status(404).send({ message: "Todo not found" });
    res.status(200).send({ data: getTodo });
  } catch (err) {
    return res.json({ error: err });
  }
};

export { getToDo as getToDoHandler };
