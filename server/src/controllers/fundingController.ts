import { Request, Response } from "express";
import fundingService from "../services/fundingService";

const fundingController = {
  async getFundings(req: Request, res: Response) {
    const fundings = await fundingService.getFundings();

    res.status(200).json({
      error: null,
      data: fundings,
    });
  },
  async getFundingById(req: Request, res: Response) {
    const fundings = await fundingService.getFundingById(req.params.id);
    res.status(200).json(fundings);
  },
  async getFundingByCategoryId(req: Request, res: Response) {
    const fundings = await fundingService.getFundingByCategoryId(
      req.params.categoryId
    );
    res.status(200).json(fundings);
  },
};

export default fundingController;
