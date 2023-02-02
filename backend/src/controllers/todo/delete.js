import { Todo } from "../../model/todo.js";

const deleteToDo = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const findTodo = await Todo.findById(id);
    if (!findTodo) return res.status(404).send({ message: "Todo not found" });
    await Todo.findByIdAndDelete(id);

    res.status(200).send({ message: "Delete Successfully" });
  } catch (err) {
    return res.json({ error: err });
  }
};

export { deleteToDo as deleteHandler };
