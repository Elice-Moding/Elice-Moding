import { categoryModel } from '../models';
import CustomError from '../utils/customError';
import { CategoryParams } from '../interface/interfaces';

const categoryService = {
  async getCategories() {
    const categories = await categoryModel.find({}).lean();
    return categories;
  },

  async getCategoryById(id: string) {
    const category = await categoryModel.findById(id).lean();
    if (category === null) {
      throw new CustomError('해당 category는 존재하지 않습니다', 404);
    }
    return category;
  },

  async postCategories({ categoryName }: CategoryParams) {
    const makeCategoryName = await categoryModel
      .findOne({ categoryName })
      .lean();
    if (makeCategoryName !== null) {
      const error = new CustomError('이미 존재하는 category입니다.', 409);
      throw error;
    }

    const newCategory = await categoryModel.create({
      categoryName: categoryName,
    });
    return newCategory.toObject();
  },
};

export default categoryService;
