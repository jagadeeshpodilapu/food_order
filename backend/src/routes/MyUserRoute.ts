import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middlewares/auth";
import { validateMyUserRequest } from "../middlewares/validations";

const router = express.Router();

//  api/my/user
router.get("/",jwtCheck, jwtParse, MyUserController.getCurrentUser);

router.post("/", jwtCheck, MyUserController.createCurrentUser);

router.put("/", jwtParse, validateMyUserRequest, MyUserController.updateCurrentUser);



export default router;