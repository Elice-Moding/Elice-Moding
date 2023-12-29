import { Request, Response } from "express";
import authService from "../services/authService";
import { SignUpParams } from "../interface/interfaces";

const authController = {
  async authSignUp(req: Request, res: Response) {
    const user = await authService.signUp(req.body as SignUpParams);

    res.status(201).json({
      error: null,
      data: user,
    });
  },

  async authSignIn(req: Request, res: Response) {
    const token = await authService.signIn(req.body);

    res.status(201).json({
      error: null,
      data: token,
    });
  },
};

export default authController;
