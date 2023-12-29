import tw from "tailwind-styled-components"

export const Container = tw.div`flex justify-center`

export const RegWrap = tw.div`bg-[#D9D9D9]/[.1] p-10 h-auto flex flex-col space-y-3 `
export const RegTage = tw.p`text-white`

export const DateInput = tw.input`block w-full px-3 py-[0.5rem] text-base placeholder-gray-400 border rounded-md transition-all duration-200 ease-in-out focus:ring focus:border-primary-400 focus:placeholder-opacity-0`
export const DateLabel = tw.label`absolute left-3 top-0 pt-[0.5rem] text-base text-gray-400 transition-all duration-200 ease-in-out`

export const AddBtn = tw.button`text-xl bg-blue-500 font-bold h-[56px] w-[400px] rounded-3xl`

export const CKEitorWrap = tw.div`w-[700px]`


//reg

export const RegLabel = tw.label`text-white`
export const RegInput = tw.input``
export const RegBtn = tw.button`bg-blue-500 font-bold h-[56px] w-[400px] rounded-3xl text-white`

export const CategorySelect = tw.select``
export const CategoryOption = tw.option``

export const OptionsWrap = tw.div`bg-[#D9D9D9]/[.1] p-10 space-y-4 rounded-3xl flex flex-col items-center`
export const OptionWrap = tw.div`bg-[#D9D9D9]/[.5] p-10 flex flex-col space-y-4 rounded-3xl`
export const OptionInput = tw.input`px-8 h-[56px] w-[400px] rounded-3xl`