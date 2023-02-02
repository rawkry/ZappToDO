import { Router } from "express";

import { createToDoRouter } from "./create.js";
import { deleteToDoRouter } from "./delete.js";
import { getToDoRouter } from "./get.js";
import { updateToDoRouter } from "./update.js";

// import { postCommentRouter } from "./post-comment.js";

const router = Router();

router.use(createToDoRouter);
router.use(getToDoRouter);
router.use(deleteToDoRouter);
router.use(updateToDoRouter);

export { router as indexToDoRouter };
