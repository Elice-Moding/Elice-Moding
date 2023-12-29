import { atom } from 'recoil';

export const fundingRegAtom = atom({
  key: 'fundingRegAtom',
  default: {
    seller: "",
    title: "",
    category: "",
    mainImageUrl: "",
    imageUrls: [],
    goalAmout: "",
    startDate: "",
    endDate: "",
    deliveryPrice: "",
    deliveryDate: "",
    options: [{}],
  },
});