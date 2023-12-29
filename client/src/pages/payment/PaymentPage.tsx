import { useLocation } from "react-router-dom";
import * as styled from "./PaymentPage.styles";
import Payment from "../../components/portone/Pay";
import { useState, useEffect } from "react";
import { optionsProps } from "../../interface/schema.interface";

interface OrderMethodProps {
  label: string;
  pg: string;
}

function PaymentPage() {
  const state = useLocation().state;
  const funding = state.funding;
  const optionSelect = state.optionSelect;
  const supPrice = state.supPrice;
  const selectedOptions = funding.options.filter((item: optionsProps) =>
    optionSelect.includes(item._id)
  );

  const formatPrice = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const sumTotalPrice =
      selectedOptions.reduce(
        (acc: number, item: optionsProps) => acc + item.price,
        0
      ) +
      Number(supPrice) +
      funding.deliveryPrice;

    setTotalPrice(sumTotalPrice);
  }, [selectedOptions, supPrice, funding.deliveryPrice]);

  const [orderIndex, setOrderIndex] = useState<number>(0);
  const [orderPg, setOrderPg] = useState<string>("tosspay");

  const checkOrderIndex = (index: number,pg: string) => {
    setOrderIndex(index);
    setOrderPg(pg);

  };
  const orderMethod = [
    { label: "토스페이", pg: "tosspay" },
    { label: "카카오페이", pg: "kakaopay" },
    { label: "토스페이먼츠", pg: "tosspayments" },
    { label: "카드결제", pg: "html5_inicis" },
  ];

  const paymentData = {
    pg: orderPg, // PG사
    pay_method: "card", // 결제수단
    merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
    amount: totalPrice, // 결제금액
    name: funding.title, // 주문명
    buyer_name: "홍길동", // 구매자 이름
    buyer_tel: "01012341234", // 구매자 전화번호
    buyer_email: "example@example", // 구매자 이메일
    buyer_addr: "신사동 661-16", // 구매자 주소
    buyer_postcode: "06018", // 구매자 우편번호
  };
  return (
    <styled.Container>
      <styled.ContentsWrap>
        <styled.PriceWrap>
          {selectedOptions.map((item: optionsProps, index: number) => (
            <styled.OptionWrap key={index}>
              <styled.OptionTitle>{item.title}</styled.OptionTitle>
              <styled.OptionInfo>{item.info}</styled.OptionInfo>
              <styled.OptionPrice>
                {formatPrice(item.price)}원
              </styled.OptionPrice>
            </styled.OptionWrap>
          ))}
          <styled.SupPriceWrap>
            <styled.SupPrice>{formatPrice(supPrice)}원</styled.SupPrice>
          </styled.SupPriceWrap>
          <styled.DeliveryPriceWrap>
            <styled.DeliveryPrice>
              {formatPrice(funding.deliveryPrice)}원
            </styled.DeliveryPrice>
          </styled.DeliveryPriceWrap>
          <styled.TotalPriceWrap>
            <styled.TotalPriceTag>총 결제금액</styled.TotalPriceTag>
            <styled.TotalPrice>{formatPrice(totalPrice)}원</styled.TotalPrice>
          </styled.TotalPriceWrap>
        </styled.PriceWrap>
        <styled.OrderWrap>
          {orderMethod.map((item: OrderMethodProps, index: number)=>
          <styled.OrderMethodWrap key={index}>
            <styled.OrderCheckBox type="checkbox" checked={orderIndex === index}
            onChange={() => checkOrderIndex(index, item.pg)}></styled.OrderCheckBox>
            <styled.OrderMethodLabel>{item.label}</styled.OrderMethodLabel>
          </styled.OrderMethodWrap>
          )}
        </styled.OrderWrap>
        <Payment data={paymentData}></Payment>
      </styled.ContentsWrap>
    </styled.Container>
  );
}

export default PaymentPage;
