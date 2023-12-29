import React, { useEffect, useState } from "react"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import Editor from "ckeditor5-custom-build/build/ckeditor"

import "./ckediter/CKEditer.styles.css"
import { editorConfig } from "./ckediter/CKEditer.config"
import * as styled from "./../FundingRegPage.styles"
import { axiosInstance } from "../../../../utils/axios.utils"

function RegEditor() {
    const [editorData, setEditorData] = useState("")

    const handleEditorChange = (event: any, editor: any) => {
        const data = editor.getData()
        setEditorData(data)
    }

    // const [formData, setFormData] = useState({
    //     seller: "",
    //     title: "",
    //     category: "",
    //     mainImageUrl: "",
    //     imageUrls: [],
    //     goalAmout: "",
    //     currentAmount: 0,
    //     starteDate: new Date(),
    //     endDate: new Date(),
    //     preorder: false,
    //     preorderDate: new Date(),
    //     deliveryPrice: "",
    //     deliveryDate: new Date(),
    //     preorderBenefits: [],
    //     options: [],
    // })

    // const addFunding = async () => {
    //     try {
    //         const config = await frontEndAuthMiddleware({
    //             method: "post",
    //             url: "/seller",
    //             data: formData,
    //         })

    //         const response = await axiosInstance.request(config)
    //         if (response.status === 201) {
    //             window.alert("펀딩이 등록되었습니다.")
    //             navigate("/")
    //         } else {
    //         }
    //     } catch (error) {
    //         if (axios.isAxiosError(error) && error.response) {
    //             if (error.response.status === 409) {
    //                 window.alert("펀딩등록에 실패했습니다.")
    //             } else {
    //                 window.alert("펀딩등록에 실패했습니다.")
    //             }
    //         }
    //     }
    // }

    return (
        <styled.CKEitorWrap>
            <CKEditor
                editor={Editor}
                data=""
                config={editorConfig}
                onReady={(editor: any) => {
                    editor.plugins.get("FileRepository").createUploadAdapter = (loader: any) => {
                        return {
                            upload: async () => {
                                const formData = new FormData()
                                formData.append("image", loader.file)

                                try {
                                    const response = await axiosInstance.post("/upload", formData, {
                                        headers: {
                                            "Content-Type": "multipart/form-data",
                                        },
                                    })

                                    return {
                                        default: response.data.url,
                                    }
                                } catch (error) {
                                    console.error("이미지 업로드 에러", error)
                                    throw error
                                }
                            },
                        }
                    }
                }}
                onChange={handleEditorChange}
            />
            <pre className="text-white">{JSON.stringify(editorData, null, 2)}</pre>
        </styled.CKEitorWrap>
    )
}

export default RegEditor
