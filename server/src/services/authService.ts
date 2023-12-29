import bcrypt from "bcrypt";
import CustomError from "../utils/customError";
import jwt from "jsonwebtoken";
import { userModel } from "../models";
import { SignUpParams, LoginParams } from "../interface/interfaces";

const authService = {
  async signUp({
    email,
    password,
    username,
    phoneNumber,
    postCode,
    address,
    addressDetail,
  }: SignUpParams) {
    const user = await userModel.findOne({ email }).lean();

    if (user !== null) {
      const error = new CustomError("이미 가입된 email 입니다.", 409);
      throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await userModel.create({
      email: email,
      password: hashedPassword,
      username: username,
      phoneNumber: phoneNumber,
      postCode: postCode,
      address: address,
      addressDetail: addressDetail,
      role: "customer",
    });

    return newUser.toObject();
  },

  async signIn({ email, password }: LoginParams) {
    const user = await userModel.findOne({ email }).lean();
    if (!user) {
      throw new CustomError("이메일과 비밀번호가 일치하지 않습니다", 401);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new CustomError("이메일과 비밀번호가 일치하지 않습니다", 401);
    }

    const JWT_SECRET = process.env.JWT_SECRET || "";
    const token = jwt.sign(
      { em: user.email, ro: user.role, userId: user._id },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return token;
  },
};

export default authService;
