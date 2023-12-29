import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import * as styled from "./OptionsPage.styles"
import { formatPrice, formatDate } from "../../utils/format.utils"
import { fundingProps, optionsProps } from "../../interface/schema.interface"

function OptionsPage() {
    const navigate = useNavigate()
    const state = useLocation().state
    const funding: fundingProps = state.funding
    const [supPrice, setSupPrice] = useState("0")
    const [optionSelect, setOptionSelect] = useState<string[]>([])

    const onChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSupPrice(e.target.value.replace(/[^0-9]/g, ""))
    }

    const checkBoxClick = (check: boolean, item: optionsProps) => {
        setOptionSelect((prevOptionSelect) => {
            if (check) {
                console.log(optionSelect)
                return [...prevOptionSelect, item._id]
            } else {
                return prevOptionSelect.filter((id) => id !== item._id)
            }
        })
    }

    const nextBtnClick = () => {
        if (optionSelect.length === 0) {
            return alert("제품을 선택해주세요!")
        } else {
            navigate("/payment", {
                state: {
                    funding: funding,
                    optionSelect: optionSelect,
                    supPrice: supPrice,
                },
            })
        }
    }

    return (
        <styled.Container>
            <styled.FundingTitleWrap>
                <styled.FundingTitle>{funding.title}</styled.FundingTitle>
            </styled.FundingTitleWrap>
            <styled.ContentsWrap>
                <styled.OptionsWrap>
                    {funding.options.map((item, index) => (
                        <styled.OptWrap key={index}>
                            <styled.OptTop>
                                <styled.OptCheckBox
                                    type="checkbox"
                                    onChange={(e) => checkBoxClick(e.target.checked, item)}
                                ></styled.OptCheckBox>
                                <styled.OptPrice>{formatPrice(item.price)}</styled.OptPrice>원
                            </styled.OptTop>
                            <styled.OptMid>
                                <styled.OptTitle>{item.title}</styled.OptTitle>
                                <styled.OptCurrentAmount>
                                    {item.totalAmount - item.currentAmount}개 남음
                                </styled.OptCurrentAmount>
                                <styled.OptTotalAmount>제한수량 {item.totalAmount}개</styled.OptTotalAmount>
                            </styled.OptMid>
                            <styled.OptInfo>{item.info}</styled.OptInfo>
                            <styled.OptBot>
                                <styled.DeliveryPrice>
                                    배송비 {formatPrice(funding.deliveryPrice)} 원
                                </styled.DeliveryPrice>
                                <styled.DeliveryDate>
                                    {formatDate(funding.deliveryDate)}부터 순차적으로 배송예정
                                </styled.DeliveryDate>
                            </styled.OptBot>
                        </styled.OptWrap>
                    ))}
                </styled.OptionsWrap>
                <styled.SupWrap>
                    <styled.SubTitleWrap>
                        <styled.SupTitle>후원하기 (선택)</styled.SupTitle>
                    </styled.SubTitleWrap>
                    <styled.SupPrice
                        value={formatPrice(Number(supPrice))}
                        onChange={onChangePrice}
                        maxLength={9}
                    ></styled.SupPrice>
                    원
                </styled.SupWrap>
                <styled.PrivateWrap>
                    <styled.SubTitleWrap>
                        <styled.SupTitle>공개하기 (선택)</styled.SupTitle>
                    </styled.SubTitleWrap>
                    <styled.PrivateCheckWrap>
                        <styled.CheckLabel>후원자 비공개</styled.CheckLabel>
                        <styled.NameCheckBox type="checkbox"></styled.NameCheckBox>
                        <styled.CheckLabel>후원금 비공개</styled.CheckLabel>
                        <styled.PriceCheckBox type="checkbox"></styled.PriceCheckBox>
                    </styled.PrivateCheckWrap>
                </styled.PrivateWrap>
            </styled.ContentsWrap>
            <styled.NextBtn onClick={nextBtnClick}>다음 단계로</styled.NextBtn>
        </styled.Container>
    )
}

export default OptionsPage
