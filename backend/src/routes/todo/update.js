import { Router } from "express";
import { updateTodoHandler } from "../../controllers/todo/update.js";

const router = Router();

router.patch("/:id", updateTodoHandler);

export { router as updateToDoRouter };
