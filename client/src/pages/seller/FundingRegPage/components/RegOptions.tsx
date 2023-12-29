import React, { useState } from "react"
import { useRecoilState } from "recoil"
import { useNavigate } from "react-router-dom"
import { fundingRegAtom } from "../../../../recoil/FundingReg.Atom"
import * as styled from "../FundingRegPage.styles"

interface OptionData {
    title: string
    price: number
    totalAmount: number
    info: string
}

const InitialOptionData: OptionData = {
    title: "",
    price: 0,
    totalAmount: 0,
    info: "",
}

function RegOptions() {
    const navigate = useNavigate()
    const [funding, setFunding] = useRecoilState(fundingRegAtom)
    const [options, setOptions] = useState<OptionData[]>([InitialOptionData])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        const { name, value } = e.target

        const updatedOptions = options.map((option, idx) => {
            if (idx === index) {
                return {
                    ...option,
                    [name]: value,
                }
            }
            return option
        })

        setOptions(updatedOptions)
        setFunding((prev) => ({ ...prev, options: options }))
    }

    const handleAddClick = () => {
        setOptions([...options, InitialOptionData])
    }

    const handleRemoveClick = (index: number) => {
        const list = [...options]
        list.splice(index, 1)
        setOptions(list)
    }

    return (
        <styled.RegWrap>
            <styled.RegLabel>옵션</styled.RegLabel>
            <styled.OptionsWrap>
                {options.map((option, index) => (
                    <styled.OptionWrap key={index}>
                        <styled.OptionInput
                            name="title"
                            value={option.title}
                            onChange={(e) => handleInputChange(e, index)}
                            placeholder="옵션 이름"
                        />
                        <styled.OptionInput
                            name="price"
                            value={option.price}
                            onChange={(e) => handleInputChange(e, index)}
                            placeholder="가격"
                        />
                        <styled.OptionInput
                            name="totalAmount"
                            value={option.totalAmount}
                            onChange={(e) => handleInputChange(e, index)}
                            placeholder="수량"
                        />
                        <styled.OptionInput
                            name="info"
                            value={option.info}
                            onChange={(e) => handleInputChange(e, index)}
                            placeholder="정보"
                        />
                        {index > 0 && <styled.RegBtn onClick={() => handleRemoveClick(index)}>Remove</styled.RegBtn>}
                    </styled.OptionWrap>
                ))}
                <styled.RegBtn onClick={handleAddClick}>옵션추가</styled.RegBtn>
            </styled.OptionsWrap>
            <styled.RegBtn onClick={() => navigate("../date")}>진행하기</styled.RegBtn>
            <pre className="text-white">{JSON.stringify(options, null, 2)}</pre>
        </styled.RegWrap>
    )
}

export default RegOptions
