import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Postcode from "../hooks/DaumPostPopUp";
import {
  checkValidEmail,
  checkValidPassword,
  checkValidPhoneNumber,
  checkValidUserName,
} from "../../utils/regExp.utils";
import * as styeld from "./SingUpPage.styles";
import { axiosInstance } from "../../utils/axios.utils";

function SignUpPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    phoneNumber: "",
    postCode: "",
    address: "",
    addressDetail: "",
  });

  const [formValid, setFormValid] = useState({
    isEmail: false,
    isPassword: false,
    isUserName: false,
    isPhoneNumber: false,
  });

  const [addressValid, setAddressValid] = useState(false);

  const handleInput = (
    e: React.FormEvent<HTMLInputElement>,
    validationFunction: (value: string) => boolean,
    validationKey: string
  ) => {
    const { value } = (e as React.ChangeEvent<HTMLInputElement>).target;
    setFormValid({
      ...formValid,
      [validationKey]: value === "" ? false : !validationFunction(value),
    });
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const sanitizedValue =
      name === "phoneNumber" ? value.replace(/[^0-9]/g, "").replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3') : value;
    setFormData({ ...formData, [name]: sanitizedValue });
  };

  const handleAddressSearch = () => {
    if (
      formData.email &&
      formData.password &&
      formData.username &&
      formData.phoneNumber !== "" &&
      formData.address === ""
    ) {
      setAddressValid(true);
    } else {
      setAddressValid(false);
    }
  };

  useEffect(() => {
    handleAddressSearch();
  }, [formData]);

  const SetOnBlur = (
    e: React.FocusEvent<HTMLInputElement>,
    placeholder: string
  ) => (e.target.placeholder = placeholder);

  const SetOnFocus = (e: React.FocusEvent<HTMLInputElement>) =>
    (e.target.placeholder = "");

  const showError = (message: string) => alert(message);
  const handleSignUpClick = () => {
    if (formData.email === "" || formValid.isEmail) {
      showError("올바른 이메일을 입력해주세요.");
    } else if (formData.password === "" || formValid.isPassword) {
      showError("올바른 비밀번호를 입력해주세요.");
    } else if (formData.username === "" || formValid.isUserName) {
      showError("올바른 이름을 입력해주세요.");
    } else if (formData.phoneNumber === "" || formValid.isPhoneNumber) {
      showError("올바른 전화번호를 입력해주세요.");
    } else if (formData.address === "" || addressValid) {
      showError("올바른 주소를 입력해주세요.");
    } else if (window.confirm("회원가입 하시겠습니까?")) {
      insertData();
    }
  };

  const insertData = async () => {
    try {
      const response = await axiosInstance.post("/auth/sign-up", formData);
      if (response.status === 201) {
        window.alert("성공적으로 가입되었습니다.");
        navigate("/");
      } else {
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 409) {
          window.alert("이미 존재하는 이메일입니다.");
        } else {
          navigate("404");
        }
      }
    }
  };

  return (
    <styeld.Container>
      <styeld.NavWrap>
        <styeld.NavLeftBtn>로그인</styeld.NavLeftBtn>
        <styeld.NavRightWrap>
          <styeld.NavRightBtn>회원가입</styeld.NavRightBtn>
        </styeld.NavRightWrap>
      </styeld.NavWrap>

      {/*회원가입*/}
      <styeld.SignUpWrap>
        <styeld.Input
          placeholder="이메일 입력"
          onFocus={SetOnFocus}
          onBlur={(e) => SetOnBlur(e, "이메일 입력")}
          onChange={onChangeInput}
          onInput={(e) => handleInput(e, checkValidEmail, "isEmail")}
          value={formData.email}
          name="email"
          maxLength={30}
        />
        <styeld.UnderTag draggable="true" $validator={formValid.isEmail}>
          {formData.email === ""
            ? ""
            : formValid.isEmail === true
            ? "올바른 이메일을 입력해주세요."
            : "올바른 이메일입니다."}
        </styeld.UnderTag>

        <styeld.Input
          placeholder="비밀번호 입력"
          type="password"
          onFocus={SetOnFocus}
          onBlur={(e) => SetOnBlur(e, "비밀번호 입력")}
          onChange={onChangeInput}
          onInput={(e) => handleInput(e, checkValidPassword, "isPassword")}
          value={formData.password}
          name="password"
          maxLength={14}
        />
        <styeld.UnderTag draggable="true" $validator={formValid.isPassword}>
          {formData.password === ""
            ? ""
            : formValid.isPassword === true
            ? "올바른 비밀번호를 입력해주세요."
            : "올바른 비밀번호입니다."}
        </styeld.UnderTag>

        <styeld.Input
          placeholder="이름 입력"
          onFocus={SetOnFocus}
          onBlur={(e) => SetOnBlur(e, "이름 입력")}
          onChange={onChangeInput}
          onInput={(e) => handleInput(e, checkValidUserName, "isUserName")}
          value={formData.username}
          name="username"
          maxLength={8}
        />
        <styeld.UnderTag draggable="true" $validator={formValid.isUserName}>
          {formData.username === ""
            ? ""
            : formValid.isUserName === true
            ? "올바른 이름을 입력해주세요."
            : "올바른 이름입니다."}
        </styeld.UnderTag>

        <styeld.Input
          placeholder="전화번호 입력"
          onFocus={SetOnFocus}
          onBlur={(e) => SetOnBlur(e, "전화번호 입력")}
          onChange={onChangeInput}
          onKeyUp={(e) =>
            handleInput(e, checkValidPhoneNumber, "isPhoneNumber")
          }
          value={formData.phoneNumber}
          name="phoneNumber"
          maxLength={11}
        />
        <styeld.UnderTag draggable="true" $validator={formValid.isPhoneNumber}>
          {formData.phoneNumber === ""
            ? ""
            : formValid.isPhoneNumber === true
            ? "올바른 전화번호를 입력해주세요."
            : "올바른 전화번호입니다."}
        </styeld.UnderTag>

        <styeld.AddressWrap>
          <Postcode
            onChangeAddress={(newAddress) => {
              setFormData((prevData) => ({ ...prevData, address: newAddress }));
            }}
            onChangePostcode={(newPostcode) => {
              setFormData((prevData) => ({...prevData, postCode: newPostcode,
              }));
            }}
          />
          <styeld.HalfInput
            placeholder="우편번호"
            value={formData.postCode}
            name="postCode"
            disabled
          />
        </styeld.AddressWrap>
        <styeld.UnderTag draggable="true" $validator={addressValid}>
          {addressValid === false && formData.address === ""
            ? ""
            : addressValid === true
            ? "주소를 입력해주세요."
            : "올바른 주소입니다."}
        </styeld.UnderTag>

        <styeld.Input
          placeholder="주소"
          value={formData.address}
          name="address"
          disabled
        />
        <styeld.UnderTag draggable="true" $validator={addressValid}>
          {addressValid === false && formData.address === ""
            ? ""
            : addressValid === true
            ? "주소를 입력해주세요."
            : "올바른 주소입니다."}
        </styeld.UnderTag>

        <styeld.Input
          placeholder="상세주소 입력"
          onFocus={SetOnFocus}
          onBlur={(e) => SetOnBlur(e, "상세주소 입력")}
          onChange={onChangeInput}
          value={formData.addressDetail}
          name="addressDetail"
        />
        <styeld.UnderTag draggable="true" $validator={false}></styeld.UnderTag>

        <styeld.RegBtn onClick={handleSignUpClick}>회원가입하기</styeld.RegBtn>
      </styeld.SignUpWrap>
    </styeld.Container>
  );
}

export default SignUpPage;
