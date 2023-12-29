import React, { useEffect, useState } from "react"
import Slider from "react-slick" // 슬라이더 컴포넌트 임포트
import "slick-carousel/slick/slick.css" // 메인 슬라이드
import "slick-carousel/slick/slick-theme.css"
import "../main/Main.css"
import Product from "../../components/Product"
import { axiosInstance } from "../../utils/axios.utils"
import * as styeld from "./MainPage.styles"
// 메인 슬라이더 설정
const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 680,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
}
// 얼리버드 슬라이더 설정
const EarlyBirdSliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
    variableWidth: false, // 이 부분을 false로 설정
}
interface ImageData {
    _id: string
    url: string
    mainImageUrl: string
    title: string
    description: string // 상품 설명
    category: string // 제조사
    currentAmount: number
    goalAmount: number
}

function MainPage() {
    const [fundingsImages, setFundingsImages] = useState<ImageData[]>([])
    const [loading, setLoading] = useState<boolean>(true) // 로딩 상태 관리를 위한 상태

    // 펀딩 이미지 데이터를 가져오는 함수
    const fetchFundingsImages = async () => {
        try {
            const response = await axiosInstance.get(`/fundings`)
            console.log("response.data : ", response.data)
            setFundingsImages(response.data.data)
        } catch (error) {
            console.error("Fetching fundings images failed:", error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchFundingsImages()
    }, [])

    function renderFundingsSliderSection(images: ImageData[]) {
        if (!Array.isArray(images)) {
            return null // images가 배열이 아니면 아무것도 렌더링하지 않음
        }
        return (
            <Slider {...EarlyBirdSliderSettings}>
                {images.map((image) => (
                    <Product
                        key={image._id}
                        id={image._id}
                        url={image.mainImageUrl}
                        alt={image.title}
                        description={image.title}
                        isSlider={true}
                        currentAmount={image.currentAmount}
                        goalAmount={image.goalAmount}
                    />
                ))}
            </Slider>
        )
    }
    function renderFundingsMainSection(images: ImageData[]) {
        if (loading) {
            return <div className="text-white">Loading...</div>
        }
        if (!Array.isArray(images)) {
            console.error("Expected an array but received:", images)
            return <div className="text-white">데이터가 없습니다.</div>
        }
        return (
            <div className="flex flex-wrap -mx-2 justify-start">
                {images.map((image) => (
                    <div key={image._id} className="w-1/4 px-2 mb-4">
                        <Product
                            id={image._id}
                            url={image.mainImageUrl}
                            alt={image.title}
                            description={image.title}
                            isSlider={true}
                            currentAmount={image.currentAmount}
                            goalAmount={image.goalAmount}
                        />
                    </div>
                ))}
            </div>
        )
    }

    if (loading) {
        return <div className="text-white">Loading...</div>
    }
    return (
        <styeld.MainPageContainer>
            {/* 슬라이드 광고 섹션 */}

            <Slider {...sliderSettings}>
                <div className="slider-container h-[300px] overflow-hidden">
                    <img src="/img/computer.jpg" alt="광고 이미지 1" className="w-full h-full object-cover" />
                </div>
                <div className="slider-container h-[300px] overflow-hidden">
                    <img src="/img/all.jpg" alt="광고 이미지 1" className="w-full h-full object-cover" />
                </div>
                <div className="slider-container h-[300px] overflow-hidden">
                    <img src="/img/console.jpg" alt="광고 이미지 1" className="w-full h-full object-cover" />
                </div>
                <div className="slider-container h-[300px] overflow-hidden">
                    <img src="/img/computer.jpg" alt="광고 이미지 1" className="w-full h-full object-cover" />
                </div>
                {/* 추가 슬라이드 이미지들... */}
            </Slider>
            <styeld.ContentArea>
                {/* 탭 메뉴 */}
                <styeld.Section>
                    <styeld.TabButtonsContainer></styeld.TabButtonsContainer>
                    {/* 탭 컨텐츠 */}
                    <styeld.EarlyBirdTitle>전체 상품</styeld.EarlyBirdTitle>
                    <styeld.TabContentContainer>
                        {/* 추천상품, 인기상승, 펀딩랭킹 탭 컨텐츠 */}
                        {/* {activeTab === "recommend" && renderTabContent(recommendImages)}
                        {activeTab === "popular" && renderTabContent(popularImages)}
                        {activeTab === "funding" && renderTabContent(fundingImages)} */}

                        {renderFundingsMainSection(fundingsImages)}
                    </styeld.TabContentContainer>
                </styeld.Section>

                {/* 우측 섹션 - sticky 위치 지정 */}
                <styeld.StickySection>
                    <styeld.RealTimeRankingTitle>실시간 랭킹</styeld.RealTimeRankingTitle>
                    <styeld.RealTimeRankingList>
                        <li className="mb-1">강동훈</li>
                        <li className="mb-1">김도희</li>
                        <li className="mb-1">류충현</li>
                        <li className="mb-1">위동현</li>
                        <li className="mb-1">윤상원</li>
                        <li className="mb-1">최윤혁</li>
                        {/* 추가 랭킹 아이템들 */}
                    </styeld.RealTimeRankingList>
                </styeld.StickySection>
            </styeld.ContentArea>

            <styeld.EarlyBirdTitle>얼리버드</styeld.EarlyBirdTitle>
            <styeld.FullWidthSliderContainer>
                {/* 새로운 슬라이더 섹션 추가 */}
                <styeld.TabContentContainer>
                    {renderFundingsSliderSection(fundingsImages)} {/* 예시로 recommendImages를 사용 */}
                </styeld.TabContentContainer>
            </styeld.FullWidthSliderContainer>

            <styeld.EarlyBirdTitle>트렌드</styeld.EarlyBirdTitle>
            <styeld.FullWidthSliderContainer>
                {/* 새로운 슬라이더 섹션 추가 */}
                <styeld.TabContentContainer>
                    {renderFundingsSliderSection(fundingsImages)} {/* 예시로 recommendImages를 사용 */}
                </styeld.TabContentContainer>
            </styeld.FullWidthSliderContainer>
        </styeld.MainPageContainer>
    )
}

export default MainPage
