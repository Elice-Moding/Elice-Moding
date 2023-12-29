import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { HeaderRenderAtom } from "../../recoil/HeaderRenderAtom";
import axios from "axios";
import Cookies from "js-cookie";

import {
  Container,
  KakaoButton,
  NavContainer,
  NaverButton,
  NavLeftButton,
  NavLeftContainer,
  NavRightButton,
  NavRightContainer,
  StyledButton,
  StyledForm,
  StyledInput,
  UnderTag,
} from "./SignInPage.styles";
import {
  checkValidEmail,
  checkValidPassword
} from "../../utils/regExp.utils"
import { axiosInstance } from "../../utils/axios.utils";

const showError = (message: string) => alert(message);

const handleNaverLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  // 네이버 로그인 로직
};

const handleKakaoLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  // 카카오 로그인 로직
};

function SignInPage() {
  // 위동현: Recoil 헤더 리렌더링 전역변수 선언
  const setHeaderRender = useSetRecoilState(HeaderRenderAtom);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formValid, setFormValid] = useState({
    isEmail: false,
    isPassword: false,
    isUserName: false,
    isPhoneNumber: false,
  });


  const handleInput = (
    e: React.FormEvent<HTMLInputElement>,
    validationFunction: (value: string) => boolean,
    validationKey: string
  ) => {
    const { value } = (e as React.ChangeEvent<HTMLInputElement>).target;
    setFormValid({
      ...formValid,
      [validationKey]: validationFunction(value),
    });
  };
  

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setFormData({
      ...formData,
      email: newEmail,
    });
    setEmail(newEmail);
  };
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setFormData({
      ...formData,
      password: newPassword,
    });
    setPassword(newPassword);
  };

  const isFormValid = () => {
    return formValid.isEmail && formValid.isPassword;
  };
  
  const handleLoginCheck = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formValid.isEmail) {
      showError("올바른 이메일형식이 아닙니다.");
    } else if (!formValid.isPassword) {
      showError("올바른 비밀번호를 입력해주세요.");
    } else {
      handleLoginClick();
    } 
  };

  // 위동현: 에러처리방식, 헤더리렌더 전역변수 추가
  const handleLoginClick = async () => {
    try {
      const response = await axiosInstance.post("/auth/sign-in", {
        email,
        password,
      });
      if (response.status === 201) {
        // 성공 로직
      }
    } catch (error) {
      console.error(error);
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) {
          window.alert("아이디와 비밀번호를 확인해주세요");
        } else if (error.response && error.response.status === 500) {
          window.alert("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
        } else {
          navigate("/404");
        }
      }
    }
  };
  
  return (
    <Container>
      <NavContainer>
        <NavLeftContainer>
          <NavLeftButton>로그인</NavLeftButton>
        </NavLeftContainer>

        <NavRightContainer>
          <NavRightButton to="/sign-up">회원가입</NavRightButton>
        </NavRightContainer>
      </NavContainer>
      <StyledForm onSubmit={handleLoginCheck}>
        <StyledInput
          placeholder="이메일 입력"
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = "이메일 입력")}
          onChange={handleEmailChange}
          onInput={(e) => handleInput(e, checkValidEmail, "isEmail")}
          value={formData.email}
          name="email"
          maxLength={30}
        />
        <UnderTag draggable="true" $validator={formValid.isEmail}>
          {formData.email === ""
            ? ""
            : formValid.isEmail === false
            ? "올바른 이메일 형식이 아닙니다. 이메일은 @ 와 .이 포함되어야합니다"
            : "올바른 이메일 형식 입니다."}
        </UnderTag>

        <StyledInput
          placeholder="비밀번호 입력"
          type="password"
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = "비밀번호 입력")}
          onChange={handlePasswordChange}
          onInput={(e) => handleInput(e, checkValidPassword, "isPassword")}
          value={formData.password}
          name="password"
          maxLength={14}
        />
        <UnderTag draggable="true" $validator={formValid.isPassword}>
          {formData.password === ""
            ? ""
            : formValid.isPassword === false
            ? "올바른 비밀번호 형식이 아닙니다. 비밀번호는 영문 숫자 특수기호 포함 8자리 이상이여야 합니다"
            : "올바른 비밀번호 형식입니다."}
        </UnderTag>

        <StyledButton 
        type="submit"
        disabled={!isFormValid()}
        className={isFormValid() ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-500"}
>
  로그인하기
</StyledButton>
        <NaverButton 
        type="submit"
        onClick={handleNaverLogin}
        disabled={!isFormValid()}
        className={isFormValid() ? "bg-green-500 hover:bg-green-700" : "bg-gray-500"}
>
          네이버로 로그인하기
        </NaverButton>
        <KakaoButton 
        type="submit"
        onClick={handleNaverLogin}
        disabled={!isFormValid()}
        className={isFormValid() ? "bg-yellow-500 hover:bg-yellow-700" : "bg-gray-500"}
>
          카카오로 로그인하기
        </KakaoButton>
      </StyledForm>
    </Container>
  
  );
  }

export default SignInPage;
