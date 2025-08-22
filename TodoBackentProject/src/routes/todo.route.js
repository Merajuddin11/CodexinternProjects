import { Router } from "express";
import {
  createTodo,
  listAllTodos,
  listTodoByTitle,
  updateById,
  toggleStatus,
  deleteTodo,
} from "../controllers/todo.controller.js";

const router = Router();

// for create todo path
router.route("/create").post(createTodo);

// for read all todo path
router.route("/list").get(listAllTodos);

// for search by title path
router.route("/list-by-title").post(listTodoByTitle);

// for update todo path
router.route("/update/:id").patch(updateById);

// for toggle status true or false path
router.route("/toggle/:id").patch(toggleStatus);

// for delete path
router.route("/delete/:id").delete(deleteTodo);
export default router;
