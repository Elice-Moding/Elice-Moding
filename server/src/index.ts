import mongoose from "mongoose";
import Express, { Request, Response, NextFunction } from "express";
import * as path from 'path';
const cors = require('cors');
import router from "./routes";
import CustomError from "./utils/customError";
require("dotenv").config({ path: path.join(process.cwd(), '.env') });

const app = Express();
const port = 8080;
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(cors());

const mongoURI: string = process.env.MONGODB || "";

// 몽고DB 서버 연결
mongoose
  .connect(mongoURI)
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err)); // 이후 서버연결 실패시 404페이지로 연결되도록 설계

//api 호출
app.use("/api", router);

app.listen(port, () => {
  console.log(`localhost:${port} connected`);
});

app.use(
  (error: CustomError, req: Request, res: Response, next: NextFunction) => {
    console.log(error);
    if (error.status !== undefined && Math.floor(error.status / 100) === 5) {
      console.error(error);
    }
    res.status(error.status ?? 500).json({
      error: error.message,
      data: null,
    });
  }
);

