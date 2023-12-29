import { Request, Response, NextFunction } from "express";
import CustomError from "../utils/customError";
import jwt, { Secret } from "jsonwebtoken";
require("dotenv").config({ path: "../../.env" });

function isAuthenticated(req: any, res: any, next: NextFunction) {
  const secret = process.env.JWT_SECRET as Secret;
  if (req.headers["authorization"] === undefined) {
    const error = new CustomError(
      "권한이 없거나 인증되지 않은 유저입니다. 본인의 권한을 체크하거나 로그인 해주세요",
      401
    );
    return next(error);
  }

  const token = req.headers["authorization"].slice(7);

  try {
    const userInfo = jwt.verify(token, secret);
    req.user = userInfo;
    next();
  } catch (err) {
    const error = new CustomError("인증을 확인할 수 없습니다.", 401);
    next(error);
  }
}

export default isAuthenticated;
