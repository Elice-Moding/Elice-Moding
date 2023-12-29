import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { axiosInstance } from "../../utils/axios.utils"
import { fundingProps, optionsProps } from "../../interface/schema.interface"
import { formatPrice, formatDate, formatPercentage } from "../../utils/format.utils"
import FundingInfo from "./components/FundingInfo"
import FloatingBar from "./components/FloatingBar"
import * as styled from "./FundingPage.styles"

function FundingPage() {
    const state = useLocation().state
    const fundingId = state
    const navigate = useNavigate();
    const [category, setCategory] = useState("")
    const [loading, setLoading] = useState(true)
    const [funding, setFunding] = useState<fundingProps>({
        title: "",
        category: "",
        mainImageUrl: "",
        goalAmount: 0,
        currentAmount: 0,
        startDate: new Date(),
        endDate: new Date(),
        preorder: false,
        deliveryPrice: 0,
        deliveryDate: new Date(),
        options: [
            {
                _id: "",
                title: "",
                price: 0,
                totalAmount: 0,
                currentAmount: 0,
                info: "",
            },
        ],
    })

    const fetchData = async () => {
        if(fundingId === null){
            alert("올바른 접근이 아닙니다.")
            navigate("/")
        }
        try {
            const response = await axiosInstance.get("/fundings/" + fundingId)
            setFunding(response.data)
        } catch (error) {
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const percentAmount = Math.floor((funding.currentAmount / funding.goalAmount) * 100)

    if (loading) {
        return <div className="text-white">Loading...</div>
    }

    return (
        <styled.Container>
            <styled.AttainmentWrap>
                <styled.InfoWrap>
                    <styled.PercentWrap>
                        <styled.PercentLabel>
                            {formatPercentage(funding.currentAmount, funding.goalAmount)}% 달성
                        </styled.PercentLabel>
                    </styled.PercentWrap>
                    <styled.AmountWrap>
                        <styled.CurrentAmountWrap>
                            <styled.GoalAmountLabel>현재금액</styled.GoalAmountLabel>
                            <styled.CurrentAmount>{formatPrice(funding.currentAmount)}원 /</styled.CurrentAmount>
                        </styled.CurrentAmountWrap>
                        <styled.GoalAmountWrap>
                            <styled.GoalAmountLabel>목표금액</styled.GoalAmountLabel>
                            <styled.GoalAmount>{formatPrice(funding.goalAmount)}원</styled.GoalAmount>
                        </styled.GoalAmountWrap>
                    </styled.AmountWrap>
                </styled.InfoWrap>
                <styled.ProcessWrap>
                    <styled.PercentBarWrap>
                        <styled.CurrentPercent style={{ width: `${percentAmount}%` }}>
                            <styled.CurrentPercentLabel>{percentAmount}%</styled.CurrentPercentLabel>
                        </styled.CurrentPercent>
                        <styled.LeftPercent style={{ width: `${100 - percentAmount}%` }}>
                            <styled.LeftPercentLabel>{100 - percentAmount}%</styled.LeftPercentLabel>
                        </styled.LeftPercent>
                    </styled.PercentBarWrap>
                </styled.ProcessWrap>
            </styled.AttainmentWrap>

            <styled.ContentsWrap>
                <FundingInfo funding={funding} />
                <FloatingBar funding={funding} />
            </styled.ContentsWrap>
        </styled.Container>
    )
}
export default FundingPage
