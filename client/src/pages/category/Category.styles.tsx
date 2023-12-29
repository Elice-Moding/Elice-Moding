import tw from "tailwind-styled-components"

// interface ActiveTabButtonProps {
//   isActive: boolean;
// }
// 메인 페이지 컨테이너
export const MainPageContainer = tw.div`
  main-page 
`
// 컨텐츠 영역
export const ContentArea = tw.div`
  relative mt-10 flex justify-between items-start max-w-[1440px] mx-auto
`
// 섹션
export const Section = tw.div`
  w-3/4 p-4 space-y-4 max-w-[1440px] mx-auto
`
export const ImageListContainer = tw.div`
  flex flex-wrap -mx-2 max-w-[1440px] mx-auto
`
// 탭 컨테이너
export const TabButtonsContainer = tw.div`
  flex space-x-2 mb-4 max-w-[1440px] mx-auto
`
// 탭 버튼
export const TabButton = tw.button`
  text-white bg-[#D9D9D9]/[.1] border-none p-2 rounded-3xl
`
// 활성화된 탭 버튼
// export const ActiveTabButton = tw(TabButton)<ActiveTabButtonProps>`
//   ${({ isActive }) => (isActive ? "bg-[#333333]" : "")}
// `;
export const TabContentContainer = tw.div`
  p-4 rounded bg-[#D9D9D9]/[.1]
`
// 스티키(우측) 섹션
export const StickySection = tw.div`
   sticky top-10 w-1/4 mr-4 p-4 space-y-3 rounded bg-[#D9D9D9]/[.1] mt-[72.5px] mb-4 max-w-[1440px] mx-auto
`
// 실시간 랭킹 타이틀
export const RealTimeRankingTitle = tw.h2`
  text-lg font-bold mb-2 text-white
`
// 실시간 랭킹 목록
export const RealTimeRankingList = tw.ul`
  list-decimal pl-4 text-white
`
// 전체 너비를 사용하는 슬라이더 컨테이너 스타일
export const FullWidthSliderContainer = tw.div`
w-4/4 p-4 space-y-4 max-w-[1440px] mx-auto
`
// "얼리버드" 타이틀 스타일
export const EarlyBirdTitle = tw.h2`
  // text-4xl font-bold my-4 text-white relative left-4
  text-4xl font-bold text-center my-4 text-white max-w-[1440px] mx-auto
`

// import tw from "tailwind-styled-components";
// import {Link} from "react-router-dom";

// interface NavLinkProps {
//     to: string;
// }

// export const Container = tw.div`
//   py-28 flex flex-col items-center
// `;

// export const NavContainer = tw.div`
//   flex justify-between w-[600px] text-lg font-bold text-white text-center w-[1369px] h-[400px] bg-zinc-300 bg-opacity-10 rounded-tr-[30px]
// `;

// export const NavLeftContainer = tw.div`
//   w-[240px] h-[60px] rounded-tr-[24px]  border-b-[60px] border-b-[#D9D9D9]/[.1] border-l-[35px] border-l-[#D9D9D9]/[.1] border-r-[60px] border-r-transparent
// `;

// export const NavLeftButton = tw.button`
//   w-[150px] h-[52px]
// `;

// export const NavRightContainer = tw.div`
// bg-[#D9D9D9]/[.1]  w-[150px] h-[52px] rounded-[24px]
// `;

// export const NavRightButton = tw(Link)<NavLinkProps>`
//   w-[150px] h-[52px] flex items-center justify-center
// `;

// export const CategoryContainer = tw.div`
// flex justify-between w-[600px] text-lg font-bold text-white text-center w-[1369px] h-[400px] bg-zinc-300 bg-opacity-10 rounded-tr-[30px]

// `
// export const SlideContainer = tw.div`
// h-[300px] overflow-hidden
// `

// export const CategoryItem = tw(Link)`
//   py-2 px-4 mb-2 bg-gray-200 rounded-md text-lg hover:bg-gray-300
// `;
