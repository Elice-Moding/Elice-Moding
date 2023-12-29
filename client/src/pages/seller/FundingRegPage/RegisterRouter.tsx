import { Routes, Route } from "react-router-dom"

import RegStart from "./components/RegStart"
import RegTitle from "./components/RegTitle"
import RegCategory from "./components/RegCategory"
import RegDate from "./components/RegDate"
import RegGoal from "./components/RegGoal"
import RegOptions from "./components/RegOptions"
import RegDelivery from "./components/RegDeilvery"

import { useRecoilState } from "recoil"
import { fundingRegAtom } from "../../../recoil/FundingReg.Atom"

import * as styled from "../FundingRegPage/FundingRegPage.styles"
import RegEditor from "./components/RegEditor"


function RegRouter() {
    const [funding, setFunding] = useRecoilState(fundingRegAtom)
    return (
        <styled.Container>
            <Routes>
                <Route path="/" element={<RegStart />} />
                <Route path="/title" element={<RegTitle />} />
                <Route path="/category" element={<RegCategory />} />
                <Route path="/date" element={<RegDate />} />
                <Route path="/goal" element={<RegGoal />} />
                <Route path="/options" element={<RegOptions />} />
                <Route path="/delivery" element={<RegDelivery />} />
                <Route path="/goal" element={<RegGoal />} />
                <Route path="/editor" element={<RegEditor />} />
            </Routes>
            <pre className="text-white">{JSON.stringify(funding, null, 2)}</pre>
        </styled.Container>
    )
}
export default RegRouter
