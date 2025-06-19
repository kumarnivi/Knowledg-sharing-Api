import { Router } from "express";
const router = Router();
import { addDoubt, getMyDoubts, getAllDoubts } from "../controllers/doubt.controller";
import auth from "../middlewares/auth.middleware";
import isAdmin from "../middlewares/role.middleware";

router.post("/", auth, addDoubt);
router.get("/my", auth, getMyDoubts);
router.get("/all", auth, isAdmin("admin"), getAllDoubts);

export default router;
