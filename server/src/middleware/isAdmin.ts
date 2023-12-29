import { Request, Response, NextFunction } from "express";
import CustomError from "../utils/customError";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
require("dotenv").config({ path: "../../.env" });

interface UserWithRole extends JwtPayload {
  role: string;
}

function isAdmin(req: any, res: any, next: NextFunction) {
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
    const userInfo = jwt.verify(token, secret) as UserWithRole;
    req.user = userInfo;

    if (userInfo.ro === "admin") {
      next();
    } else {
      const error = new CustomError("관리자 권한이 필요합니다.", 403);
      next(error);
    }
  } catch (err) {
    const error = new CustomError("인증을 확인할 수 없습니다.", 401);
    next(error);
  }
}

export default isAdmin;
