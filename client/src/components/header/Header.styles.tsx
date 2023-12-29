import tw from "tailwind-styled-components";

interface NavStateProps{
    $state: boolean;
}

export const Container = tw.div`
text-white w-[1440px] mx-auto px-12 py-5 flex items-center justify-between`
export const Logo = tw.div`
text-3xl font-bold w-1/12`
export const NavWrap = tw.nav`
flex w-9/12 mx-12 justify-between items-center`
export const Nav = tw.nav<NavStateProps>`
${(p) => (p.$state === true ?  "w-[640px] px-12 duration-1000" : "w-14 duration-500")}
bg-[#D9D9D9]/[.1] h-12 mx-4 flex relative rounded-3xl text-centerjustify-between transition-all ease-in`
export const NavDrawerBtn = tw.button<NavStateProps>`
${(p) => (p.$state === true ?  "invisible opacity-0 w-[0px]" : "visible opacity-1")}
px-3 py-2 absolute transition-all ease-in duration-500 delay-500`
export const NavDrawerSvg = tw.img`w-8`
export const NavDirectBtn = tw.button<NavStateProps>`
${(p) => (p.$state === true ?  "visible opacity-1 delay-1000" : "invisible opacity-0 w-[0px]")}
min-w-[0px] w-[160px] text-lg text-white font-bold transition-all ease-in duration-100`
export const SearchWrap = tw.div<NavStateProps>`
${(p) => (p.$state === true ?  "w-14 duration-500" : "w-[640px] duration-1000")}
bg-[#D9D9D9]/[.1] h-12 p-2 rounded-3xl flex justify-between transition-all ease-in `
export const SearchInput = tw.input<NavStateProps>`
${(p) => (p.$state === true ?  "invisible w-[0px] duration-100" : "visible w-[520px] mx-8 duration-1000")}
bg-transparent text-xl transition-all outline-none ease-in`
export const SearchBtn = tw.button``
export const SearchSvg = tw.img`w-10`
export const GnbWrap = tw.div`flex w-2/12 min-w-fit text-lg font-bold text-center space-x-2 justify-between`
export const SignInBtn = tw.button`bg-[#D9D9D9]/[.1] w-32 h-12 rounded-3xl`
export const SignUpBtn = tw.button`bg-[#D9D9D9]/[.1] w-32 h-12 rounded-3xl`
export const MyLikeBtn = tw.button`bg-[#D9D9D9]/[.1] w-14 h-12 rounded-3xl ml-2`
export const MyPageBtn = tw.button`bg-[#D9D9D9]/[.1] w-14 h-12 rounded-3xl`
export const ProjectBtn = tw.button`bg-[#D9D9D9]/[.1] w-32 h-12 rounded-3xl font-bold`
export const GnbSvg = tw.img`w-8 m-auto`