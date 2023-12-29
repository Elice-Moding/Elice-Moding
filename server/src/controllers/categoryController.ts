import { Request, Response } from 'express';
import categoryService from '../services/categoryService';
import { CategoryParams } from '../interface/interfaces';

const categoryController = {
  //카테고리 전체 조회
  async getCategories(req: Request, res: Response) {
    const categories = await categoryService.getCategories();

    res.status(200).json({
      error: null,
      data: categories,
    });
  },

  //카테고리 id로 조회
  async getCategoryById(req: Request, res: Response) {
    const category = await categoryService.getCategoryById(req.params.id);

    res.status(200).json({
      error: null,
      data: category,
    });
  },

  // 카테고리 추가
  async postCategories(req: Request, res: Response) {
    const category = await categoryService.postCategories(
      req.body as CategoryParams
    );

    res.status(201).json({
      error: null,
      data: category,
    });
  },
};

export default categoryController;
