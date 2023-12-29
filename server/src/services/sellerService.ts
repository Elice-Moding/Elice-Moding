import { Request as ExpressRequest } from "express";
import { sellerModel } from "../models";
import CustomError from "../utils/customError";
import { fundingModel } from "../models";
import { FundingParams } from "../interface/interfaces";

interface User {
  userId: string;
}

interface Request extends ExpressRequest {
  user?: User;
}
const getUserIdFromRequest = (req: Request): string | null => {
  return req.user ? req.user.userId : null;
};

const sellerService = {
  async createFunding(req: Request, params: FundingParams) {
    try {
      const userId = getUserIdFromRequest(req);

      if (!userId) {
        throw new CustomError("사용자 인증이 필요합니다.", 401);
      }

      const existingSeller = await sellerModel.findOne({ userId });

      if (!existingSeller) {
        throw new CustomError("셀러 권한이 필요합니다.", 403);
      }

      const funding = new fundingModel({
        title: params.title,
        categoryId: params.categoryId,
        goalAmount: params.goalAmount,
        startDate: params.startDate,
        endDate: params.endDate,
        preorder: params.preorder,
        preorderBenefits: params.preorderBenefits,
        mainImageUrl: params.mainImageUrl,
        imageUrls: params.imageUrls,
        deliveryPrice: params.deliveryPrice,
        deliveryDate: params.deliveryDate,
        options: params.options,
        seller: existingSeller._id,
        deliveryNumber: params.deliveryNumber,
        deliveryType: params.deliveryType,
        info: params.info,
        infoDetail: params.infoDetail,
      });

      await funding.save();

      return { success: true, message: "펀딩이 성공적으로 등록되었습니다." };
    } catch (error) {
      console.error("error occurred while creating funding:", error);

      if (error instanceof CustomError) {
        console.error("CustomError: ", error.message, "Status: ", error.status);
        throw error;
      } else {
        console.error("Unknown error: ", error);
        throw new CustomError("서버 오류입니다.", 500);
      }
    }
  },

  async updateFunding(fundingId: string, params: FundingParams) {
    try {
      const existingFunding = await fundingModel.findById(fundingId);

      if (!existingFunding) {
        return { success: false, message: "펀딩을 찾을 수 없습니다." };
      }

      existingFunding.title = params.title;

      await existingFunding.save();

      return {
        success: true,
        message: "펀딩 정보가 성공적으로 수정되었습니다.",
        data: {
          funding: existingFunding,
        },
      };
    } catch (error) {
      throw new CustomError("펀딩 정보를 수정할 수 없습니다.", 403);
    }
  },
};

export default sellerService;
