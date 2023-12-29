const { body } = require("express-validator");

const applySellerValidator = [
  body("userId").notEmpty().withMessage("사용자 ID를 입력해주세요").trim(),
  body("companyName").notEmpty().withMessage("회사 이름을 입력해주세요").trim(),
  body("businessLicense")
    .notEmpty()
    .withMessage("사업자 등록번호를 입력해주세요")
    .trim(),
  body("phoneNumber").notEmpty().withMessage("전화번호를 입력해주세요").trim(),
  body("email")
    .notEmpty()
    .withMessage("이메일을 입력해주세요")
    .trim()
    .isEmail()
    .withMessage("이메일 형식이 올바르지 않습니다."),
];

export { applySellerValidator };
