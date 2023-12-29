import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { fundingRegAtom } from "../../../../recoil/FundingReg.Atom"
import * as styled from "../FundingRegPage.styles"

function RegTitle() {
    const navigate = useNavigate()
    const [funding, setFunding] = useRecoilState(fundingRegAtom)

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFunding((prev) => ({ ...prev, title: e.target.value }))
    }

    return (
        <styled.RegWrap>
            <styled.RegLabel>타이틀</styled.RegLabel>
            <styled.RegInput value={funding.title} onChange={handleTitleChange}></styled.RegInput>
            <styled.RegBtn onClick={() => navigate("../category")}>진행하기</styled.RegBtn>
        </styled.RegWrap>
    )
}

export default RegTitle
