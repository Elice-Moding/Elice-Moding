const { body } = require("express-validator");

const updateUserValidator = [
  body("updateData.password")
    .isLength({ min: 8 })
    .withMessage("비밀번호는 8자리 이상이어야 합니다."),
  body("updateData.phoneNumber")
    .notEmpty()
    .withMessage("전화번호를 입력해주세요."),
  body("updateData.postCode")
    .notEmpty()
    .withMessage("우편번호를 입력해주세요."),
  body("updateData.address").notEmpty().withMessage("주소를 입력해주세요."),
  body("updateData.addressDetail").optional(),
];

export { updateUserValidator };
