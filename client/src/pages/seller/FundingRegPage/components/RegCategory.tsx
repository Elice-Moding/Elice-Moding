import { useEffect, useState } from "react"
import * as styled from "../FundingRegPage.styles"
import { axiosInstance } from "../../../../utils/axios.utils"
import { useRecoilState } from "recoil"
import { fundingRegAtom } from "../../../../recoil/FundingReg.Atom"
import axios from "axios"
import { useNavigate } from "react-router-dom"

interface CategoryProps {
    _id: string
    categoryName: string
}

function RegCategory() {
    const navigate = useNavigate()
    const [funding, setFunding] = useRecoilState(fundingRegAtom)

    const [categories, setCategories] = useState<CategoryProps[]>([])

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFunding((prev) => ({ ...prev, category: e.target.value }))
    }

    const getCategory = async () => {
        try {
            const response = await axiosInstance.get("/category")
            setCategories(response.data.data)
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                if (error.response.status === 409) {
                    window.alert("잘못된 접근입니다.")
                } else {
                    window.alert("잘못된 접근입니다.")
                }
            }
        }
    }

    useEffect(() => {
        getCategory()
    }, [])

    return (
        <styled.RegWrap>
            <styled.RegLabel>카테고리</styled.RegLabel>
            <styled.CategorySelect onChange={handleSelectChange}>
                <styled.CategoryOption value="">카테고리 선택</styled.CategoryOption>
                {categories.map((category) => (
                    <styled.CategoryOption key={category._id} value={category._id}>
                        {category.categoryName}
                    </styled.CategoryOption>
                ))}
            </styled.CategorySelect>
            <styled.RegBtn onClick={() => navigate("../options")}>진행하기</styled.RegBtn>
        </styled.RegWrap>
    )
}

export default RegCategory
