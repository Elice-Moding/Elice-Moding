import { useRecoilState } from "recoil"
import { useNavigate } from "react-router-dom"
import { fundingRegAtom } from "../../../../recoil/FundingReg.Atom"
import * as styled from "../FundingRegPage.styles"

function RegDate() {
    const navigate = useNavigate()
    const [funding, setFunding] = useRecoilState(fundingRegAtom)

    const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFunding((prev) => ({ ...prev, startDate: e.target.value }))
    }

    const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFunding((prev) => ({ ...prev, endDate: e.target.value }))
    }

    return (
        <styled.RegWrap>
            <styled.RegLabel>펀딩시작</styled.RegLabel>
            <styled.DateInput type="date" value={funding.startDate} onChange={handleStartDateChange}/>
            <styled.DateLabel style={{ pointerEvents: "none" }} />

            <styled.RegLabel>펀딩종료</styled.RegLabel>
            <styled.DateInput type="date" value={funding.endDate} onChange={handleEndDateChange}/>
            <styled.DateLabel style={{ pointerEvents: "none" }} />

            <styled.RegBtn onClick={() => navigate("../delivery")}>진행하기</styled.RegBtn>
        </styled.RegWrap>
    )
}

export default RegDate
