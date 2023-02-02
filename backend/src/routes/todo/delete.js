import { Router } from "express";

import { deleteHandler } from "../../controllers/todo/delete.js";
const router = Router();

router.delete("/:id", deleteHandler);

export { router as deleteToDoRouter };
