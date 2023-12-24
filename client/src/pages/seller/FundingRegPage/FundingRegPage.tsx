import React, { useEffect, useState } from "react"
import { CKEditor } from "@ckeditor/ckeditor5-react"
// import Editor from "ckeditor5-custom-build/build/ckeditor"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import "./components/ckediter/CKEditer.styles.css"
import { editorConfig } from "./components/ckediter/CKEditer.config"
import uploadPlugin from "./components/ckediter/CKEditer.function"
import { axiosInstance } from "../../../utils/axios.utils"
import * as styled from "./FundingRegPage.styles"
import { frontEndAuthMiddleware } from "../../../utils/jwtUtils"

interface CategoryProps {
    _id: string
    categoryName: string
}

interface OptionData {
    title: string
    price: number
    totalAmount: number
    currentAmount: number
    info: string
}

const InitialOptionData: OptionData = {
    title: "",
    price: 0,
    totalAmount: 0,
    currentAmount: 0,
    info: "",
}

function FundingRegPage() {
    const navigate = useNavigate()

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
    }

    const handleAddClick = () => {
        setOptions([...options, InitialOptionData])
    }

    const handleRemoveClick = (index: number) => {
        const list = [...options]
        list.splice(index, 1)
        setOptions(list)
    }

    const [categories, setCategories] = useState<CategoryProps[]>([])

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value)
    }

    const [formData, setFormData] = useState({
        seller: "",
        title: "",
        category: "",
        mainImageUrl: "",
        imageUrls: [],
        goalAmout: "",
        currentAmount: 0,
        starteDate: new Date(),
        endDate: new Date(),
        preorder: false,
        preorderDate: new Date(),
        deliveryPrice: "",
        deliveryDate: new Date(),
        preorderBenefits: [],
        options: [],
    })

    const addFunding = async () => {
        try {
            const config = await frontEndAuthMiddleware({
                method: "post",
                url: "/seller",
                data: formData,
            })

            const response = await axiosInstance.request(config)
            if (response.status === 201) {
                window.alert("펀딩이 등록되었습니다.")
                navigate("/")
            } else {
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                if (error.response.status === 409) {
                    window.alert("펀딩등록에 실패했습니다.")
                } else {
                    window.alert("펀딩등록에 실패했습니다.")
                }
            }
        }
    }

    const getCategory = async () => {
        try {
            const response = await axiosInstance.get("/category")
            setCategories(response.data.data)
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                if (error.response.status === 409) {
                    window.alert("펀딩등록에 실패했습니다.")
                } else {
                    window.alert("펀딩등록에 실패했습니다.")
                }
            }
        }
    }

    useEffect(() => {
        getCategory()
    }, [])

    return (
        <styled.Container>
            <styled.RegWrap>
                <styled.RegTage>타이틀</styled.RegTage>
                <styled.RegInput></styled.RegInput>

                <styled.RegTage>카테고리</styled.RegTage>
                <styled.CategorySelect onChange={handleSelectChange}>
                    <styled.CategoryOption value="">카테고리 선택</styled.CategoryOption>
                    {categories.map((category) => (
                        <styled.CategoryOption key={category._id} value={category._id}>
                            {category.categoryName}
                        </styled.CategoryOption>
                    ))}
                </styled.CategorySelect>

                <styled.RegTage>목표금액</styled.RegTage>
                <styled.RegInput></styled.RegInput>

                <styled.RegTage>펀딩시작</styled.RegTage>
                <styled.DateInput type="date" />
                <styled.DateLabel style={{ pointerEvents: "none" }} />

                <styled.RegTage>펀딩종료</styled.RegTage>
                <styled.DateInput type="date" />
                <styled.DateLabel style={{ pointerEvents: "none" }} />

                <styled.RegTage>배송금액</styled.RegTage>
                <styled.RegInput></styled.RegInput>

                <styled.RegTage>발송시작</styled.RegTage>
                <styled.DateInput type="date" />
                <styled.DateLabel style={{ pointerEvents: "none" }} />

                <div>
                    {options.map((option, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                name="title"
                                value={option.title}
                                onChange={(e) => handleInputChange(e, index)}
                                placeholder="Title"
                            />
                            <input
                                type="number"
                                name="price"
                                value={option.price}
                                onChange={(e) => handleInputChange(e, index)}
                                placeholder="Price"
                            />
                            {/* Add other input fields similarly */}
                            <input
                                name="info"
                                value={option.info}
                                onChange={(e) => handleInputChange(e, index)}
                                placeholder="Info"
                            />
                            {index > 0 && (
                                <button type="button" onClick={() => handleRemoveClick(index)}>
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    <button type="button" onClick={handleAddClick}>
                        Add
                    </button>
                    <pre>{JSON.stringify(options, null, 2)}</pre>
                </div>

                <styled.AddBtn onClick={addFunding}>등록하기</styled.AddBtn>
            </styled.RegWrap>
            <styled.CKEitorWrap>
                {/* <CKEditor
                    editor={Editor}
                    data=""
                    config={editorConfig}
                    onReady={(editor: any) => {
                        uploadPlugin(editor)
                    }}
                /> */}
            </styled.CKEitorWrap>
        </styled.Container>
    )
}
export default FundingRegPage