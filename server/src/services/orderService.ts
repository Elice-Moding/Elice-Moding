import { orderModel } from '../models';
import CustomError from '../utils/customError';

//회원주문조회
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

interface updateOrderParams {
  orderedBy: string;
  postCode: string;
  address: string;
  addressDetail: string;
  phoneNumber: string;
}

interface makePaymentParams {
  userId: string;
  selectedProduct: object;
  productId: string;
  quantity: number;
  donation: number;
  paymentMethod: string;
}

const orderService = {
  // 주문하기
  async createOrder(orderParams: orderParams) {
    const {
      userId,
      orderedBy,
      postCode,
      address,
      addressDetail,
      phoneNumber,
      fundingId,
      orderList,
      donation,
      nameOpen,
      priceOpen,
      orderStatus,
    } = orderParams;

    // 서버연결없이도 겹치지않는 난수만들기
    const orderNumber =
      Date.now().toString().slice(5) +
      String(Math.floor(Math.random() * 10000)).padStart(4, '0');

    const order = await orderModel.create({
      userId,
      orderedBy,
      postCode,
      address,
      addressDetail,
      phoneNumber,
      fundingId,
      orderList,
      donation,
      nameOpen,
      priceOpen,
      orderStatus,
    });

    return order.toObject();
  },

  // 전체 주문조회
  async getOrders(userId: string) {
    // 변수명은 항상 명확하게
    const orders = await orderModel.find({ userId: userId }).lean();
    return orders;
  },

  // 주문조회(id)
  async getOneOrder(userId: string) {
    const order = await orderModel.findById({ userId: userId }).lean();

    if (order === null) {
      const error = new CustomError('주문이 존재하지 않습니다.', 404);
      throw error;
    }

    return order;
  },

  // 주문조회(orderNumber)
  async getOrderByOrderNumber(orderNumber: string) {
    const order = await orderModel.findOne({ orderNumber }).lean();

    if (order === null) {
      const error = new CustomError('주문이 존재하지 않습니다.', 404);
      throw error;
    }

    return order;
  },

  // 주문수정
  async updateOrder(
    id: string,
    {
      orderedBy,
      postCode,
      address,
      addressDetail,
      phoneNumber,
    }: updateOrderParams
  ) {
    const order = await orderModel.findById(id).lean();

    if (order === null) {
      const error = new CustomError('주문이 존재하지 않습니다.', 404);
      throw error;
    }

    if (order.orderStatus !== '배송중') {
      const error = new CustomError('주문수정이 불가능합니다.', 400);
      throw error;
    }

    const updatedOrder = await orderModel.findByIdAndUpdate(
      id,
      {
        orderedBy,
        postCode,
        address,
        addressDetail,
        phoneNumber,
      },
      { new: true }
    );

    return updatedOrder;
  },

  // 주문수정(주문취소후 배송상태 변경 때문)
  async updateOrderStatus(id: string, orderStatus: string) {
    const order = await orderModel.findById(id).lean();

    if (!order) {
      const error = new CustomError('주문이 존재하지 않습니다.', 401);
      throw error;
    }

    const updatedOrderStatus = await orderModel.updateOne(
      { _id: id },
      {
        orderStatus,
      }
    );

    return updatedOrderStatus;
  },

  // 주문취소
  async deleteOrder(id: string) {
    const order = await orderModel.findById(id).lean();

    if (!order) {
      const error = new CustomError('주문이 존재하지 않습니다.', 401);
      throw error;
    }

    const deletedOrder = await orderModel.findOneAndDelete({ _id: id });

    return deletedOrder;
  },

  // 결제
  async makePayment({
    userId,
    selectedProduct,
    donation,
    paymentMethod,
  }: makePaymentParams) {
    // console.log('userId:', userId);
    // console.log('selectedProduct:', selectedProduct);
    // console.log('donation:', donation);
    // console.log('paymentMethod:', paymentMethod);
    try {
      // 데이터베이스에 결제 정보 추가
      const newOrder = new orderModel({
        userId,
        selectedProduct,
        donation,
        paymentMethod,
      });

      const savedOrder = await newOrder.save();

      console.log('savedOrder:', savedOrder);
      // 결제 요청이 성공했다고 가정하고 응답을 반환

      const paymentId = savedOrder._id; // 이 부분은 데이터베이스에서 생성된 주문 ID를 사용하도록 수정해야 합니다.

      return {
        status: 'success',
        message: '결제 요청 완료',
        paymentId,
      };
    } catch (error) {
      console.error(error);
      throw new CustomError('결제 처리 중 오류 발생', 500);
    }
  },
};

export default orderService;
