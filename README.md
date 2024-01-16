# 📖 Project Title
모딩(모두의 펀딩)

![image](https://github.com/Elice-Moding/dev/assets/91791632/e4eb45a8-e42b-4e9a-a417-7e8e4155ea72)

![image](https://github.com/Elice-Moding/dev/assets/91791632/fd23e210-5424-45f1-b1e6-8560d4d67bc3)
![image](https://github.com/Elice-Moding/dev/assets/91791632/1dc9bbdc-1cbc-44d6-9afb-b8934f62d911)


## 🌏 프로젝트 개요
"모딩(모두의 펀딩)" 프로젝트의 목표는 다양한 분야의 사람들이 자신의 아이디어나 프로젝트를 실현하기 위한 자금을 모을 수 있는 플랫폼을 제공하는 것입니다.
이 플랫폼을 통해 개인 또는 그룹이 자금을 모을 수 있고, 후원자들은 다양한 프로젝트를 지원하면서 보상을 받을 수 있는 환경을 제공합니다.

## 🚀 프로젝트 목표

- 팀원 간의 원활한 소통과 협업을 통해 프로젝트를 완성

## 📕 서비스 기능

- 사용자 회원가입 및 로그인 
- 마이페이지
- 펀딩 등록(옵션, 펀딩기간, 배송, 목표금액 설정)
- 후원
- 카테고리 별 상품 조회
- 펀딩 실시간 랭킹


## 🖥️ 기술 스택
<img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white"/>
<img src="https://img.shields.io/badge/gitlab-FC6D26?style=flat-square&logo=gitlab&logoColor=white"/>

### 💻 Frontend
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/TailwindCSS-%2306B6D4?style=flat-square&logo=tailwindcss&logoColor=white">
<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/recoil-3578E5?style=flat-square&logo=recoil&logoColor=white">


### ⌨️ Backend

<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/postman-FF6C37?style=flat-square&logo=postman&logoColor=white"/>
<img src="https://img.shields.io/badge/mongoose-880000?style=flat-square&logo=mongoose&logoColor=white"/>

### 📝 dependencies
    "bcrypt": "^5.1.1",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "express-validator": "^7.0.1",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.0.3",
    "multer": "^1.4.5-lts.1",
    "validator": "^13.11.0"
    

### 📂 Directory 
```
server
├── controllers
│   ├── adminController.js
│   ├── authController.js
│   ├── categoryController.js
│   ├── fundingController.js
│   ├── orderController.js
│   ├── sellerController.js
│   └── userController.js
├── interface
├── middlewares
│   └── validators
│       ├── auth.js
│       ├── objectId.js
│       ├── order.js
│       ├── admin.js
│       ├── seller.js
│       ├── validateError.js
│       └── user.js
│   ├── isAdmin.js
│   └── isAuthenticated.js
├── models
│   └── schemas
│       ├── category.js
│       ├── funding.js
│       ├── order.js
│       ├── seller.js
│       └── user.js
│   └── index.js
├── routes
│   └── v1
│       ├── adminRouter.js
│       ├── authRouter.js
│       ├── categoryRouter.js
│       ├── fundingRouter.js
│       ├── orderRouter.js
│       ├── sellerRouter.js
│       ├── uplodaRouter.js
│       ├── userRouter.js
│   └── index.js
├── services
│       ├── adminService.js
│       ├── authService.js
│       ├── categoryService.js
│       ├── fundingService.js
│       ├── orderService.js
│       ├── sellerService.js
│       └── userService.js
├── utils
│       ├── asyncHandler.js
│       └── customError.js
└── app.js

client
├── assets
│   └── svg
├── components
│       ├── footer
│       ├── header
│       ├── loding
│       └── portone
├── interface
├── pages
│       ├── category
│       ├── error
│       ├── funding
│       ├── hooks
│       ├── main
│       ├── me
│       ├── options
│       ├── payment
│       ├── seller
│       ├── sign-in
│       └── sign-up
├── recoil
├── utils
│       ├── axios.utils.ts
│       ├── format.utils.ts
│       ├── jwtUtils.ts
│       └── regExp.utils.ts
└── App.tsx
```

### 🕑개발 기간
2023.12.7 ~ 2023.12.29


라이센스
Copyright © 2023
