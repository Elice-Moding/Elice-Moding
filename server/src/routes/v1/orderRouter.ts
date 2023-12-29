import asyncHandler from '../../utils/asyncHandler';
import orderController from '../../controllers/orderController';
import isAuthenticated from '../../middleware/isAuthenticated';

import { Router } from 'express';

const orderRouter = Router();

// 구매목록 조회(userId)
orderRouter.get(
  '/purchases/:userId',
  isAuthenticated,
  asyncHandler(orderController.getOrders)
);

// 배송상태 조회(userId)
orderRouter.get(
  '/delivery/:userId',
  isAuthenticated,
  asyncHandler(orderController.getOneOrder)
);

// 결제
orderRouter.post('/', asyncHandler(orderController.makePayment));

export default orderRouter;
