import { Request, Response } from "express";
import isAuthenticated from "../../middleware/isAuthenticated";
import asyncHandler from "../../utils/asyncHandler";
import { Router } from "express";
import userController from "../../controllers/userController";
import { updateUserValidator, validateError } from "../../middleware/validator";

export interface RequestIncludeJWT extends Request {
  user: {
    em: string;
    userId: string;
    role: string;
  };
}

const userRouter = Router();

userRouter.get(
  "/me",
  isAuthenticated,
  asyncHandler((req: Request, res: Response) =>
    userController.getUserProfile(req as RequestIncludeJWT, res)
  )
);

userRouter.post(
  "/withdraw",
  isAuthenticated,
  asyncHandler((req: Request, res: Response) =>
    userController.deleteUser(req as RequestIncludeJWT, res)
  )
);

userRouter.put(
  "/me",
  updateUserValidator,
  isAuthenticated,
  validateError,
  asyncHandler((req: Request, res: Response) =>
    userController.updateUserProfile(req as RequestIncludeJWT, res)
  )
);

export default userRouter;
