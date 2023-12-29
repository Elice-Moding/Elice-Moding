import tw from "tailwind-styled-components";
import {Link} from "react-router-dom";

interface NavLinkProps {
    to: string;
}
interface UnderTagProps {
  $validator: boolean;
}

export const UnderTag = tw.p<UnderTagProps>`
  text-xs font-normal w-[380px]
  ${(p) => (p.$validator ? "text-blue-500" : "text-red-500" )}`

export const Container = tw.div`
  py-28 flex flex-col items-center 
`;

export const NavContainer = tw.div`
  flex justify-between w-[600px] text-lg font-bold text-white text-center
`;

export const NavLeftContainer = tw.div`
  w-[240px] h-[60px] rounded-tr-[24px]  border-b-[60px] border-b-[#D9D9D9]/[.1] border-l-[35px] border-l-[#D9D9D9]/[.1] border-r-[60px] border-r-transparent
`;

export const NavLeftButton = tw.button`
  w-[150px] h-[52px]
`;

export const NavRightContainer = tw.div`
bg-[#D9D9D9]/[.1]  w-[150px] h-[52px] rounded-[24px] 
`;

export const NavRightButton = tw(Link)<NavLinkProps>`
  w-[150px] h-[52px] flex items-center justify-center
`;

export const StyledForm = tw.form`
  bg-[#D9D9D9]/[.1] w-[600px] h-[600px] text-white text-lg font-bold rounded-[24px] rounded-tl-[0px] flex flex-col space-y-8 justify-center items-center
`;

export const StyledInput = tw.input`
  bg-[#D9D9D9]/[.1] w-[400px] h-14 my-9 ps-8 pe-8 outline-none rounded-[24px] placeholder:text-white/[0.5] my-0.5
`;

export const StyledButton = tw.button`
  bg-[#D9D9D9]/[.5] w-[400px] h-14 ps-8 pe-8 outline-none rounded-[24px]
`;

export const NaverButton = tw.button`
bg-green-500 w-[400px] h-14 ps-8 pe-8 outline-none rounded-[24px]
`

export const KakaoButton = tw.button`
bg-yellow-400 w-[400px] h-14 ps-8 pe-8 outline-none rounded-[24px]
`