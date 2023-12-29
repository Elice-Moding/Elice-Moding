import { Routes, Route, BrowserRouter, Link } from "react-router-dom"
import SignUpPage from "./pages/sign-up/SignUpPage"
import MainPage from "./pages/main/MainPage"
import Header from "./components/header/Header"
import ErrorPage from "./pages/error/ErrorPage"
import Main from "./pages/hooks/custompopup/main"
import SignInPage from "./pages/sign-in/SignInPage"
import OptionsPage from "./pages/options/OptionsPage"
import PaymentPage from "./pages/payment/PaymentPage"
import FundingPage from "./pages/funding/FundingPage"
import Category from "./pages/category/Category"
import Footer from "./components/footer/Footer"
import SellerPage from "./pages/seller/SellerPage"

function App() {
    return (
        <BrowserRouter>
            <div className="scrollbar bg-[#03000C] min-w-[1440px] w-auto min-h-screen h-auto">
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                    <Route path="/404" element={<ErrorPage />} />
                    <Route path="/processing" element={<Main />} />
                    <Route path="/sign-in" element={<SignInPage />} />
                    <Route path="/options" element={<OptionsPage />} />
                    <Route path="/payment" element={<PaymentPage />} />
                    <Route path="/funding" element={<FundingPage />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/seller/*" element={<SellerPage />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
