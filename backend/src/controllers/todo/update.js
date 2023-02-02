import { Todo } from "../../model/todo.js";

const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    const { title, description, todo_date } = req.body;

    if (!todo) throw new BadRequestError("todo not found");

    todo.title = title || todo.title;
    todo.description = description || todo.description;
    todo.todo_date = todo_date || todo.todo_date;

    const upatedTodo = await todo.save();

    res.status(200).send({
      data: upatedTodo,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export { updateTodo as updateTodoHandler };
