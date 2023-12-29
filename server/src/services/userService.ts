import { userModel } from "../models";
import { UpdateUserData } from "../interface/interfaces";
import CustomError from "../utils/customError";

const userService = {
  async getUserProfile(userId: string) {
    try {
      const user = await userModel.findById(userId);

      if (!user) {
        throw new CustomError("사용자를 찾을 수 없습니다.", 404);
      }

      return user;
    } catch (error) {
      throw error;
    }
  },
  async deleteUser(userId: string) {
    try {
      const user = await userModel.findById(userId);

      if (!user) {
        throw new CustomError("사용자를 찾을 수 없습니다.", 404);
      }

      user.deletedAt = new Date();

      await user.save();
      return { message: "다음에 또 만나요!" };
    } catch (error) {
      throw error;
    }
  },
  async updateUserProfile(userId: string, updateData: UpdateUserData) {
    try {
      const user = await userModel.findById(userId);

      if (!user) {
        throw new CustomError("사용자를 찾을 수 없습니다.", 404);
      }

      if (updateData.password && updateData.password === user.password) {
        throw new CustomError("동일한 비밀번호입니다.", 409);
      }

      Object.assign(user, updateData);

      await user.save();

      return {
        success: true,
        message: "사용자 정보가 업데이트되었습니다.",
        status: 200,
      };
    } catch (error) {
      console.error("오류 발생:", error);
      return {
        success: false,
        message: "서버 오류입니다.",
        status: 500,
      };
    }
  },
  async getAllUsers() {
    try {
      const users = await userModel.find({ deletedAt: null });

      return users;
    } catch (error) {
      throw error;
    }
  },
  async getUserById(userId: string) {
    try {
      const user = await userModel.findById(userId);

      if (!user) {
        throw new CustomError("사용자를 찾을 수 없습니다.", 404);
      }

      return user;
    } catch (error) {
      throw error;
    }
  },
  async updateUsername(userId: string, newUsername: string) {
    try {
      const user = await userModel.findById(userId);

      if (!user) {
        throw new CustomError("사용자를 찾을 수 없습니다.", 404);
      }

      user.username = newUsername;
      await user.save();

      return {
        success: true,
        message: "사용자명이 업데이트되었습니다.",
        status: 200,
      };
    } catch (error) {
      return {
        success: false,
        message: "서버 오류입니다.",
        status: 500,
      };
    }
  },
  async deleteMember(userId: string) {
    try {
      const deletedUser = await userModel.findByIdAndDelete(userId);

      if (!deletedUser) {
        throw new CustomError("사용자를 찾을 수 없습니다.", 404);
      }

      return {
        success: true,
        data: deletedUser,
      };
    } catch (error) {
      return {
        success: false,
        message: "서버 오류입니다.",
      };
    }
  },
  async getSellers() {
    try {
      const sellers = await userModel.find({ role: "seller" });

      return sellers;
    } catch (error) {
      throw error;
    }
  },
};

export default userService;
