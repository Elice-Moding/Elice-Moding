import tw from "tailwind-styled-components";

interface UnderTagProps {
    $length: boolean;
}

export const UnderTag = tw.p<UnderTagProps>`
  text-sm font-normal
  ${(p) => (p.$length ? "text-red-500" : "text-transparent")}`

export const Container = tw.div`
  py-28 flex flex-col items-center`;
export const NavWrap = tw.div`
  flex justify-between w-[600px] text-lg font-bold text-white text-center`;
export const NavLeftBtn = tw.button`
  bg-[#D9D9D9]/[.1] w-[150px] h-[52px] rounded-[24px]`;
export const NavRightWrap = tw.div`
  w-[240px] h-[60px] rounded-tr-[24px] border-b-[60px] border-b-[#D9D9D9]/[.1] border-r-[60px] border-r-[#D9D9D9]/[.1] border-l-[60px] border-l-transparent`;
export const NavRightBtn = tw.button`
  w-[150px] h-[52px]`;
export const SignUpWrap = tw.div`
bg-[#D9D9D9]/[.1] w-[600px] h-[800px] text-white text-lg font-bold rounded-[24px] rounded-tr-[0px] flex flex-col pt-4 justify-center items-center`;

export const HalfInput = tw.input`
bg-[#D9D9D9]/[.1] w-[180px] h-14 ps-8 pe-8 outline-none rounded-[24px] placeholder:text-white/[0.5] my-2`;
export const Input = tw.input`
bg-[#D9D9D9]/[.1] w-[400px] h-14 ps-8 pe-8 outline-none rounded-[24px] placeholder:text-white/[0.5] my-2`;

export const AddressWrap = tw.div`
space-x-10`;
export const RegBtn = tw.button`
bg-[#D9D9D9]/[.5] w-[400px] h-14 ps-8 pe-8 outline-none rounded-[24px]`;