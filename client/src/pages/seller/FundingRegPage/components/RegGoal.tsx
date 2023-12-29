import { useRecoilState } from "recoil"
import { useNavigate } from "react-router-dom"
import { fundingRegAtom } from "../../../../recoil/FundingReg.Atom"
import * as styled from "../FundingRegPage.styles"

function RegGoal() {
    const navigate = useNavigate()
    const [funding, setFunding] = useRecoilState(fundingRegAtom)

    const handleGoalAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFunding((prev) => ({ ...prev, goalAmout: e.target.value }))
    }
    return (
        <styled.RegWrap>
            <styled.RegLabel>목표금액</styled.RegLabel>
            <styled.RegInput value={funding.goalAmout} onChange={handleGoalAmountChange}></styled.RegInput>
            <styled.RegBtn onClick={() => navigate("../editor")}>진행하기</styled.RegBtn>
        </styled.RegWrap>
    )
}

export default RegGoal
