import React from "react";
import { StyledFooter,
    FooterName,
    FooterCt,
    FooterNum,
    FooterCt2,
    FooterNum2,
    FooterCopyright,


 } from './Footer.styles';

const Footer: React.FC = () => {
return(
    <StyledFooter>
        <FooterCt>
        <FooterName>Modding㈜</FooterName> 

        <FooterNum>
        대표 최윤혁
        <br/>
        통신판매업신고번호: 2023-앨리스1팀-3553
        <br/>
        이메일 상담: Weedh@modding.kr
        <br/>
        서울특별시 성동구 아차산로17길 48

        
        </FooterNum>
        </FooterCt>

      <FooterCt2>

        <FooterNum2>
        일부 상품의 경우 모딩은 통신판매중개자이며 통신판매 당사자가 아닙니다.
        <br/>
        해당되는 상품의 경우 상품, 상품정보, 거래에 관한 의무와 책임은 판매자에게 있으므로, 각 상품 페이지에서 구체적인 내용을 확인하시기 바랍니다.
      
        </FooterNum2>
        </FooterCt2>

  <FooterCopyright>© Modding Co., Ltd.
    </FooterCopyright>
      
</StyledFooter>
);
};

export default Footer;