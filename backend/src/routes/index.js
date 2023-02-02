/**
 * All dashboard routes exported from this index.
 */

import { Router } from "express";

import { indexToDoRouter } from "./todo/index.js";

const router = Router();

router.use("/api/v1/to-do", indexToDoRouter);

export { router as indexAllRouter };
