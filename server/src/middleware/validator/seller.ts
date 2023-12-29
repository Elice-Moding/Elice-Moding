const { body } = require("express-validator");

const createFundingValidator = [
  body("title").notEmpty().withMessage("제목을 입력하세요."),
  body("categoryId").notEmpty().withMessage("카테고리를 선택하세요."),
  body("startDate").notEmpty().withMessage("시작 날짜를 입력하세요."),
  body("endDate").notEmpty().withMessage("종료 날짜를 입력하세요."),
  body("mainImageUrl").notEmpty().withMessage("메인 이미지를 선택하세요."),
  body("imageUrls")
    .isArray({ min: 2 })
    .withMessage("최소 2개 이상의 이미지를 업로드하세요."),
  body("deliveryPrice")
    .optional()
    .isNumeric()
    .withMessage("유효한 배송 가격을 입력하세요."),
  body("deliveryDate").isDate().withMessage("유효한 배송 날짜를 입력하세요."),
  body("options").isArray().withMessage("옵션을 선택하세요."),
];

export { createFundingValidator };
