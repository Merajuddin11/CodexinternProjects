import Todo from "../models/todo.model.js";

// for create todo
const createTodo = async (req, res) => {
  const { title } = req.body || {};

  if (!title) {
    return res.status(400).json({
      message: "Title is required",
    });
  }

  const todoDocument = await Todo.create({ title });

  const todo = await Todo.findById(todoDocument._id);

  if (!todo) {
    return res.status(500).json({
      message: "Someting went Wrong",
    });
  }

  return res.status(200).json({ todo });
};

// for read all todo
const listAllTodos = async (req, res) => {
  const todos = await Todo.find();

  if (!todos) {
    return res.status(400).json({
      message: "No Todo is present in the DB!",
    });
  }

  return res.status(200).json({ todos });
};

// for search by title
const listTodoByTitle = async (req, res) => {
  const { title } = req.body || {};

  if (!title) {
    return res.status(400).json({
      message: "title is required",
    });
  }

  const todos = await Todo.find({ title: { $regex: title, $options: "i" } });

  if (!todos) {
    return res.status(400).json({
      message: "no record  find",
    });
  }

  return res.status(200).json({ todos });
};

// for update todo
const updateById = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body || {};

  if (!id || !title) {
    return res.status(400).json({
      message: "ID & Title is Required!",
    });
  }

  const updateTodo = await Todo.findByIdAndUpdate(
    id,
    {
      $set: {
        title: title,
      },
    },
    {
      new: true,
    }
  );

  return res.status(200).json({
    updateTodo,
  });
};

// for toggle status true false todo
const toggleStatus = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({
        message: "todo not found!",
      });
    }

    todo.status = !todo.status;

    await todo.save();

    res.json({
      message: "status toggled",
      todo,
    });
  } catch (error) {
    res.status(500).json({
      message: "error toggling",
      error,
    });
  }
};

// for delete todo
const deleteTodo = async (req, res) => {
  const { id } = req.params;

  const todo = await Todo.findByIdAndDelete(id);

  if (!todo) {
    return res.status(400).json({
      message: "this id is not present in this todo!",
    });
  }

  return res.status(200).json({
    message: "todo successfuly deleted",
  });
};

export {
  createTodo,
  listAllTodos,
  listTodoByTitle,
  updateById,
  toggleStatus,
  deleteTodo,
};
