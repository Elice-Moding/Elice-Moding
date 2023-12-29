import { useRecoilState } from "recoil"
import { useNavigate } from "react-router-dom"
import { fundingRegAtom } from "../../../../recoil/FundingReg.Atom"
import * as styled from "../FundingRegPage.styles"

function RegDelivery() {
    const navigate = useNavigate()
    const [funding, setFunding] = useRecoilState(fundingRegAtom)

    const handleDeliveryPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFunding((prev) => ({ ...prev, deliveryPrice: e.target.value }))
    }

    const handleDeliveryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFunding((prev) => ({ ...prev, deliveryDate: e.target.value }))
    }

    return (
        <styled.RegWrap>
            <styled.RegLabel>배송료</styled.RegLabel>
            <styled.RegInput value={funding.deliveryPrice} onChange={handleDeliveryPriceChange}></styled.RegInput>

            <styled.RegLabel>발송시작</styled.RegLabel>
            <styled.DateInput type="date" value={funding.deliveryDate} onChange={handleDeliveryDateChange} />
            <styled.DateLabel style={{ pointerEvents: "none" }} />

            <styled.RegBtn onClick={() => navigate("../goal")}>진행하기</styled.RegBtn>
        </styled.RegWrap>
    )
}

export default RegDelivery
