import { useNavigate } from "react-router-dom"
import * as styled from "./SellerNav.styles"

function SellerNav() {
    const navigate = useNavigate()

    return (
        <styled.Container>
            <styled.NavWrap>
                <styled.NavBtn onClick={()=> navigate("/seller/register")}>등록하기</styled.NavBtn>
                <styled.NavBtn>펀딩관리</styled.NavBtn>
                <styled.NavBtn>주문관리</styled.NavBtn>
            </styled.NavWrap>
        </styled.Container>
    )
}

export default SellerNav
