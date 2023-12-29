import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import * as styled from "./Header.styles"
import Cookies from "js-cookie"
import { useRecoilState } from "recoil"
import { HeaderRenderAtom } from "../../recoil/HeaderRenderAtom"

function Header() {
    const navigate = useNavigate()
    const [headerRender, setHeaderRender] = useRecoilState(HeaderRenderAtom)

    const [isSignIn, setIsSignIn] = useState(false)
    const [navState, setNavState] = useState(true)
    const [searchInput, setSearchInput] = useState("")

    const checkSignInState = () => {
        const jwtToken = Cookies.get("jwt")
        if (jwtToken) {
            setIsSignIn(true)
        } else {
            setIsSignIn(false)
        }
    }

    const logoutClick = () => {
        if (window.confirm("로그아웃 하시겠습니까?")) {
            Cookies.remove("jwt")
            setHeaderRender((prevCount) => prevCount + 1)
            navigate("/")
        } else {
        }
    }

    useEffect(() => {
        checkSignInState()
    }, [headerRender])

    const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value)
    }

    const navItems = [
        { label: "펀딩", path: "/" },
        { label: "오픈예정", path: "/" },
        { label: "카테고리", path: "/category" },
        { label: "더보기", path: "/" },
    ]

    const navFunction = () => {
        if (navState === false) {
            setNavState(true)
        } else {
        }
    }

    const searchFunction = () => {
        if (navState === true) {
            setNavState(false)
        } else {
        }
    }

    return (
        <styled.Container>
            <styled.Logo>Logo</styled.Logo>

            <styled.NavWrap>
                <styled.Nav $state={navState}>
                    <styled.NavDrawerBtn $state={navState} onClick={navFunction}>
                        <styled.NavDrawerSvg alt="" src={require("../../assets/svg/menu_icon.svg").default} />
                    </styled.NavDrawerBtn>
                    {navItems.map((item, index) => (
                        <styled.NavDirectBtn $state={navState} key={index} onClick={() => navigate(item.path)}>
                            {item.label}
                        </styled.NavDirectBtn>
                    ))}
                </styled.Nav>

                <styled.SearchWrap $state={navState}>
                    <styled.SearchInput
                        $state={navState}
                        value={searchInput}
                        onChange={onChangeSearchInput}
                    ></styled.SearchInput>
                    <styled.SearchBtn onClick={searchFunction}>
                        <styled.SearchSvg
                            alt=""
                            src={require("../../assets/svg/search_icon.svg").default}
                        ></styled.SearchSvg>
                    </styled.SearchBtn>
                </styled.SearchWrap>
            </styled.NavWrap>

            {/*Gnb*/}
            <styled.GnbWrap>
                {isSignIn === false ? (
                    <>
                        <styled.SignInBtn onClick={() => navigate("/sign-in")}>로그인</styled.SignInBtn>
                        <styled.SignUpBtn onClick={() => navigate("/sign-up")}>회원가입</styled.SignUpBtn>
                    </>
                ) : (
                    <>
                        <styled.MyLikeBtn>
                            <styled.GnbSvg
                                alt=""
                                src={require("../../assets/svg/heart_icon.svg").default}
                            ></styled.GnbSvg>
                        </styled.MyLikeBtn>
                        <styled.MyPageBtn>
                            <styled.GnbSvg
                                alt=""
                                src={require("../../assets/svg/user_icon.svg").default}
                            ></styled.GnbSvg>
                        </styled.MyPageBtn>
                        <styled.ProjectBtn onClick={logoutClick}>로그아웃</styled.ProjectBtn>
                    </>
                )}
            </styled.GnbWrap>
        </styled.Container>
    )
}

export default Header
