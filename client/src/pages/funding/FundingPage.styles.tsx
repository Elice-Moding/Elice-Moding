import tw from "tailwind-styled-components";

export const Container = tw.div`text-white h-[2000px]`;
export const AttainmentWrap = tw.div`w-auto h-[300px] bg-[#D9D9D9]/[.1] overflow-hidden font-bold text-1xl`;
export const InfoWrap = tw.div`flex max-w-[1440px] h-[160px] items-center justify-center m-auto`
export const PercentWrap = tw.div`mx-20`;
export const PercentLabel = tw.p`text-7xl font-bold`;
export const AmountWrap = tw.div`flex`;
export const CurrentAmountWrap = tw.div`px-2`;
export const CurrentAmountLabel = tw.p`text-[#D9D9D9]/[.6]`;
export const CurrentAmount = tw.p`text-2xl`;
export const GoalAmountWrap = tw.div`px-2`;
export const GoalAmountLabel = tw.p`text-[#D9D9D9]/[.6] px-2`;
export const GoalAmount = tw.p`text-2xl`;
export const ProcessWrap = tw.div`flex max-w-[1080px] h-[140px] items-center m-auto`;
export const PercentBarWrap = tw.div`w-[100%] h-[50px] bg-[#D9D9D9]/[.1] rounded-[24px] flex`
export const CurrentPercent =tw.div`bg-[#D9D9D9] h-[50px] px-10 flex rounded-[24px] items-center min-w-[10%] justyfy-left`
export const CurrentPercentLabel =tw.p`text-black text-2xl` 
export const LeftPercent = tw.div`bg-[#D9D9D9]/[0.1] h-[50px] px-10 flex rounded-[24px] items-center min-w-[10%]`;
export const LeftPercentLabel =tw.p`text-2xl `

export const ContentsWrap = tw.div`my-20 mx-auto w-[1440px] flex`;

export const MainWrap = tw.div`w-[60%] pr-2`
export const NavWrap = tw.div`flex justify-between text-lg font-bold text-white`;
export const NavBtn = tw.button`bg-[#D9D9D9]/[.1] w-[150px] h-[52px] rounded-[24px]`;
export const NavOnWrap = tw.div`w-[240px] h-[60px] rounded-tl-[24px] border-b-[60px] border-b-[#D9D9D9]/[.1] border-r-[60px] border-l-[#D9D9D9]/[.1] border-r-[60px] border-r-transparent`;
export const NavOnBtn = tw.button`w-[150px] h-[52px]`;
export const FundingInfoWrap = tw.div`px-10 bg-[#D9D9D9]/[.1] h-auto py-12 text-white text-lg rounded-[24px] rounded-tl-[0px] flex flex-col justify-center items-center`;
export const MainImgWrap = tw.div`w-full h-96`
export const MainImg = tw.img` h-auto w-full object-cover`

export const FloatingWrap = tw.div`w-[40%] h-[1000px] relative flex flex-col`
export const FloatingSticky = tw.div`sticky top-20`
export const FloatingNavWrap = tw.div`flex justify-end text-lg font-bold text-white`
export const NavRightWrap = tw.div`w-[240px] h-[60px] rounded-tr-[24px] border-b-[60px] border-b-[#D9D9D9]/[.1] border-r-[60px] border-r-[#D9D9D9]/[.1] border-l-[60px] border-l-transparent`;
export const NavRightBtn = tw.button`w-[150px] h-[52px]`;

export const FloatingInfoWrap = tw.div`bg-[#D9D9D9]/[.1] h-auto px-8 py-12 text-white space-y-4 text-lg rounded-[24px] rounded-tr-[0px] flex flex-col justify-center items-left`;
export const FundingCategory = tw.p`text-base font-bold`
export const FundingTitle = tw.p`text-xl font-bold`
export const FundingAmountWrap = tw.td`flex items-end space-x-2 py-4 `
export const FundingCurrent = tw.p`text-3xl font-bold`
export const FundingCurrentLabel = tw.p``
export const FundingPercent = tw.p`text-blue-500 font-bold`
export const BtnWrap = tw.div`pt-10 flex h-auto space-x-6 border-t-2 border-[#D9D9D9]/[0.2] justify-center`
export const LikeBtn = tw.button`bg-[#D9D9D9]/[.1] w-16 h-14 rounded-3xl`
export const LikeSvg = tw.img`w-10 m-auto`
export const FundingBtn = tw.button`text-xl bg-blue-500 font-bold h-[56px] w-[400px] rounded-3xl`

export const OptionsWrap = tw.div`mt-10 bg-[#D9D9D9]/[.1] p-8 rounded-3xl`
export const OptWrap = tw.div`p-6 border-b-2 border-[#D9D9D9]/[0.2]`
export const OptTop = tw.div`flex space-x-4 h-12 items-center h-auto pb-4`
export const OptCheckBox = tw.input`w-6 h-6 cursor-pointer accent-[#D9D9D9]/[.1]`
export const OptPrice = tw.span`h-9 text-2xl font-bold after:text-base px-2`
export const OptPriceTag = tw.span`text-base`
export const OptMid = tw.div`flex space-x-4 h-12 items-center h-auto pb-2`
export const OptTitle = tw.span`text-xl font-bold`
export const OptTotalAmount = tw.span`text-[#D9D9D9]/[0.5]`
export const OptCurrentAmount = tw.span`text-[#788FE2]`
export const OptInfo = tw.span`text-[#D9D9D9]/[0.8]`
export const OptBot = tw.div`flex space-x-4 h-12 items-center h-auto pt-6 pb-2`
export const DeliveryPrice = tw.p``
export const DeliveryDate = tw.p``