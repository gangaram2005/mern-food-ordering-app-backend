// validation garna ko lagi express-validation packages ko use gareko xa

import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const handleValidationErrors =async (req:Request,res:Response,next:NextFunction)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    next();
}


export const validateMyUserRequest =[
    body("name").isString().notEmpty().withMessage("Name must be a String"),
    body("addressLine1").isString().notEmpty().withMessage("addressLine1 must be a String"),
    body("city").isString().notEmpty().withMessage("city must be a String"),
    body("country").isString().notEmpty().withMessage("Country must be a String"),
    handleValidationErrors,  
]