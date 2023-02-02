import { Router } from "express";

import { createHandler } from "../../controllers/todo/create.js";
const router = Router();

router.post("/", createHandler);

export { router as createToDoRouter };
