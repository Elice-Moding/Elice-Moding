import authRouter from './authRouter';
import { Router } from 'express';
import fundingRouter from './fundingRouter';
import userRouter from './userRouter';
import adminRouter from './adminRouter';
import sellerRouter from './sellerRouter';
import categoryRouter from './categoryRouter';
import orderRouter from './orderRouter';

const v1Router = Router();

v1Router.use('/auth', authRouter);

v1Router.use('/fundings', fundingRouter);

v1Router.use('/user', userRouter);

v1Router.use('/admin', adminRouter);

v1Router.use('/seller', sellerRouter);

v1Router.use('/category', categoryRouter);

v1Router.use('/orders', orderRouter);

export default v1Router;
