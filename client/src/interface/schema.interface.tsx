export interface fundingProps {
    title: string;
    category: string;
    mainImageUrl: string;
    goalAmount: number;
    currentAmount: number;
    startDate: Date;
    endDate: Date;
    preorder: boolean;
    options: optionsProps[];
    deliveryPrice: number;
    deliveryDate: Date;
  }

export interface optionsProps {
    _id: string;
    title: string;
    price: number;
    totalAmount: number;
    currentAmount: number;
    info: string;
  }