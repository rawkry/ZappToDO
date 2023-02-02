import { Router } from "express";

import { getToDoHandler } from "../../controllers/todo/get.js";
const router = Router();

router.get("/", getToDoHandler);

export { router as getToDoRouter };
