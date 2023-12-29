import { useNavigate } from "react-router-dom"
import * as styled from "../FundingRegPage.styles"

function RegStart() {
    const navigate = useNavigate()
    return (
        <styled.RegWrap>
            <styled.RegLabel>펀딩등록</styled.RegLabel>
            <styled.RegBtn onClick={() => navigate("./title")}>시작하기</styled.RegBtn>
        </styled.RegWrap>
    )
}

export default RegStart
