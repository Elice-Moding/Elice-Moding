import { RequestIncludeJWT } from "./../routes/v1/userRouter";
import { Request, Response } from "express";
import userService from "../services/userService";

const userController = {
  async getUserProfile(req: RequestIncludeJWT, res: Response) {
    const user = await userService.getUserProfile(req.user.userId);

    res.status(200).json({
      error: null,
      data: user,
    });
  },
  async deleteUser(req: RequestIncludeJWT, res: any) {
    const result = await userService.deleteUser(req.user.userId);

    res.status(201).json({
      error: null,
      data: result,
    });
  },
  async updateUserProfile(req: RequestIncludeJWT, res: Response) {
    const { userIdToUpdate, updateData } = req.body;
    const result = await userService.updateUserProfile(
      userIdToUpdate,
      updateData
    );

    res.status(201).json({
      error: null,
      data: result,
    });
  },
};

export default userController;
