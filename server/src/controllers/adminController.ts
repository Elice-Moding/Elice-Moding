import { Request, Response } from "express";
import adminService from "../services/adminService";
import userService from "../services/userService";
import { SellerApplicationParams } from "../interface/interfaces";

const sellerController = {
  async applySeller(req: Request, res: Response) {
    const result = await adminService.applySeller(
      req.body as SellerApplicationParams
    );

    res.status(201).json({
      error: null,
      data: result,
    });
  },

  async getAllUsers(req: Request, res: Response) {
    const users = await userService.getAllUsers();

    res.status(200).json({
      error: null,
      data: users,
    });
  },

  async getUserById(req: Request, res: Response) {
    const { memberId } = req.params;

    const user = await userService.getUserById(memberId);

    res.status(200).json({
      error: null,
      data: user,
    });
  },

  async updateUsername(req: Request, res: Response) {
    const { memberId } = req.params;
    const { newUsername } = req.body;

    const updatedUser = await userService.updateUsername(memberId, newUsername);

    res.status(201).json({
      error: null,
      data: updatedUser,
    });
  },

  async deleteMember(req: Request, res: Response) {
    const { memberId } = req.params;

    const deletionResult = await userService.deleteMember(memberId);

    res.status(201).json({
      error: null,
      data: deletionResult,
    });
  },

  async getSellers(req: Request, res: Response) {
    const sellers = await userService.getSellers();

    res.status(200).json({
      error: null,
      data: sellers,
    });
  },
};

export default sellerController;
