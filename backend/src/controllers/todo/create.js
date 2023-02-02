import { Todo } from "../../model/todo.js";

const createToDo = async (req, res) => {
  try {
    const { title, description, todo_date } = req.body;
    const todo = new Todo({
      title,
      description,
      todo_date,
    });
    await todo.save();

    res.send({ data: todo });
  } catch (err) {
    return res.json({ error: err });
  }
};

export { createToDo as createHandler };
