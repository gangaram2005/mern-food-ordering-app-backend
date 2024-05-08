
import express from 'express';
import MyUserController from "../controllers/MyUserController";
import {jwtCheck,jwtParse} from '../middleware/auth'
import { validateMyUserRequest } from '../middleware/validation';
const router =express.Router();

// /api/my/user
router.get("/",jwtCheck, jwtParse,MyUserController.getCurrentUser)
router.post("/",jwtCheck, MyUserController.createCurrentUser)
router.put("/",jwtCheck, jwtParse, validateMyUserRequest, MyUserController.updateCurrentUser)
 
// note: user profile update hunu bhanda paila jwtCheck,jwtparse ra validateMyUserRequest check hunxa
// yesbata index.ts ma janxa

export default router