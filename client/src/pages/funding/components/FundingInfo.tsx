import * as styled from "../FundingPage.styles"
import { fundingProps, optionsProps } from "../../../interface/schema.interface"

function FundingInfo({ funding }: { funding: fundingProps }) {
    return (
        <styled.MainWrap>
            <styled.NavWrap>
                <styled.NavOnWrap>
                    <styled.NavOnBtn>펀딩정보</styled.NavOnBtn>
                </styled.NavOnWrap>
                <styled.NavBtn>새소식</styled.NavBtn>
                <styled.NavBtn>서포터</styled.NavBtn>
                <styled.NavBtn>판매자정보</styled.NavBtn>
                <styled.NavBtn>환불정책</styled.NavBtn>
            </styled.NavWrap>

            <styled.FundingInfoWrap>
                <styled.MainImgWrap>
                    <styled.MainImg src={funding.mainImageUrl}></styled.MainImg>
                </styled.MainImgWrap>
            </styled.FundingInfoWrap>
        </styled.MainWrap>
    )
}

export default FundingInfo
