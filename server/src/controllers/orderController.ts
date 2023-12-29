import { Request, Response } from 'express';
import orderService from '../services/orderService';
import CustomError from '../utils/customError';

interface orderParams {
  userId: string;
  orderId: string;
  orderNumber: string;
  orderedBy: string;
  postCode: string;
  address: string;
  addressDetail: string;
  phoneNumber: string;
  fundingId: string;
  orderList: optionParams[];
  donation: number;
  nameOpen: boolean;
  priceOpen: boolean;
  orderStatus: string;
  selectedProduct: productParams[];
  paymentMethod: string;
}

interface optionParams {
  optionsId: string;
  amount: number;
}

interface productParams {
  productId: string;
  quantity: number;
}

interface orderListParams {
  optionsId: object;
  amount: number;
}

interface makePaymentParams {
  userId: string;
  selectedProduct: object;
  productId: string;
  quantity: number;
  donation: number;
  paymentMethod: string;
}

interface selectedProductParams {
  productId: string;
  quantity: number;
}

const orderController = {
  // 주문목록 조회
  async getOrders(req: Request, res: Response) {
    const userId = res.locals.user.userId;
    const orders = await orderService.getOrders(userId);

    res.status(200).json({
      error: null,
      data: orders,
    });
  },

  // 주문조회(id)
  async getOneOrder(req: Request, res: Response) {
    const { userId } = req.params;
    const order = await orderService.getOneOrder(userId);

    res.status(200).json({
      error: null,
      data: order,
    });
  },

  // 주문조회(orderNumber)
  async getOrderByOrderNum(req: Request, res: Response) {
    const { orderNumber } = req.params;
    const order = await orderService.getOrderByOrderNumber(orderNumber);

    res.status(200).json({
      error: null,
      data: order,
    });
  },

  // 주문수정
  async updateOrder(req: Request, res: Response) {
    const { id } = req.params;
    const orderData = req.body;
    const updatedOrder = await orderService.updateOrder(id, orderData);

    res.status(201).json({
      error: null,
      data: updatedOrder,
    });
  },

  // 주문수정(주문취소후 배송상태 변경 때문)
  async updateOrderStatus(req: Request, res: Response) {
    const { id } = req.params;
    const { orderStatus } = req.body;
    const updatedOrderStatus = await orderService.updateOrderStatus(
      id,
      orderStatus
    );

    res.status(201).json({
      error: null,
      data: updatedOrderStatus,
    });
  },

  // 주문취소
  async deleteOrder(req: Request, res: Response) {
    const { id } = req.params;
    const deletedOrder = await orderService.deleteOrder(id);

    res.status(204).json({
      error: null,
      data: deletedOrder,
    });
  },

  //결제
  async makePayment(req: Request, res: Response) {
    const payment = await orderService.makePayment(
      req.body as makePaymentParams
    );

    res.status(201).json({
      error: null,
      data: payment,
    });

    // try {
    //   const { userId, selectedProduct, donation, paymentMethod } = req.body;

    //   if (!userId || !selectedProduct || !donation || !paymentMethod) {
    //     throw new CustomError(
    //       '입력값이 잘못되었습니다. 필수요소들이 필요합니다.',
    //       400
    //     );
    //   }

    //   const result = await orderService.makePayment(
    //     req.body as makePaymentParams
    //   );

    //   res.status(200).json(result);
    // } catch (error) {
    //   if (error instanceof CustomError) {
    //     // 커스텀 에러인 경우 에러 상태와 메시지를 반환
    //     res.status(error.status).json({ error: error.message });
    //   } else {
    //     // 다른 예외인 경우 내부 서버 오류 반환
    //     res.status(500).json({ error: 'Internal server error' });
    //   }
    // }
  },
};

export default orderController;
