import asyncHandler from "../../utils/asyncHandler";
import authController from "../../controllers/authController";
import {
  authSignInValidator,
  authSignUpValidator,
  validateError,
} from "../../middleware/validator";
import { Router } from "express";

const authRouter = Router();

authRouter.post(
  "/sign-up",
  authSignUpValidator,
  validateError,
  asyncHandler(authController.authSignUp)
);

authRouter.post(
  "/sign-in",
  authSignInValidator,
  validateError,
  asyncHandler(authController.authSignIn)
);

export default authRouter;
