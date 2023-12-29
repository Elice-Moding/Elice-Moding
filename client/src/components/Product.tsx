import React from "react"
import { useNavigate } from "react-router-dom"
import tw from "tailwind-styled-components"
import { formatPercentage } from "../utils/format.utils"
interface ProductProps {
    id: string
    url: string
    alt: string
    description: string // 상품 설명
    isSlider?: boolean // 슬라이더에서 사용되는지 여부를 나타내는 prop
    currentAmount?: number // 현재 모금액
    goalAmount?: number // 목표 모금액
}

// Product 컴포넌트
function Product({ id, url, alt, description, isSlider, currentAmount, goalAmount }: ProductProps) {
    const containerClassName = isSlider ? "w-full" : "w-1/3"
    const percentage = currentAmount && goalAmount ? formatPercentage(currentAmount, goalAmount) : "0"
    const navigate = useNavigate()
    return (
        <div className={`${containerClassName} px-2 mb-4`} key={id}>
            <ImageContainer>
                <Image src={url} alt={alt} onClick={() => navigate("/funding", { state: id })} />
            </ImageContainer>
            <DescriptionContainer>
                <Description>{description}</Description>
                <Manufacturer>{`${percentage}% 달성`}</Manufacturer>
            </DescriptionContainer>
        </div>
    )
}
// 스타일 컴포넌트
const ImageContainer = tw.div`
  w-full h-64 overflow-hidden rounded-lg bg-gray-200
`

const Image = tw.img`
  object-cover object-center w-full h-full
`

const DescriptionContainer = tw.div`
  text-sm mt-3
`

const Description = tw.p`
  text-white text-lg font-semibold mb-3
`

const Manufacturer = tw.p`
  text-gray-500 text-sm
`
export default Product
