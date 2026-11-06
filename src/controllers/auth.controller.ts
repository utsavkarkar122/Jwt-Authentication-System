import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";

// export const registerUser = async (req: Request, res: Response) => {
export const registerUser = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    // const {  }
});