import { Request, Response } from "express";
import sellerService from "../services/sellerService";
import { FundingParams, DeliveryUpdateParams } from "../interface/interfaces";

const sellerController = {
  async createFunding(req: Request, res: Response) {
    const result = await sellerService.createFunding(
      req,
      req.body as FundingParams
    );

    res.status(201).json({
      error: null,
      data: result,
    });
  },

  async updateFunding(req: Request, res: Response) {
    const fundingId = req.params.fundingId;

    const result = await sellerService.updateFunding(
      fundingId,
      req.body as FundingParams
    );

    res.status(201).json({
      error: null,
      data: result,
    });
  },
};

export default sellerController;
