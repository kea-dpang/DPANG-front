# ☀ DPANG_Front
이 저장소는 자사 복지몰 서비스 'DPANG'의 프론트 작업 공간입니다.
<p align="center"><img src="https://github.com/yougi8/CodingTestStudy/assets/51251702/bbe577a1-f6ae-4dc6-a304-6527e42b2823" height="30%" width="30%"></p>

## 🐥 담당자
- Ella : 상품 / 이벤트 / 판매처 관리
- Hani : 회원 / 문의 관리
- Harry : 마일리지 / 리뷰 / 취소·환불 관리
- Helen : 주문 관리

## 🛠️ 기술 스펙
- React : v.17.0.2
- Language : Javascript
- State management library : recoil, react-query
- Form management library : react-hook-form
- component library : MUI
- Code Formatter : prettier

## 🗂️ 프로젝트 구조

```text
📦src
 ┣ 📂api
 ┣ 📂assets
 ┃ ┣ 📂data
 ┃ ┃ ┣ 📂admin
 ┃ ┃ ┗ 📂user
 ┃ ┣ 📂fonts
 ┃ ┣ 📂images
 ┃ ┗ 📜CustomName.js
 ┣ 📂components
 ┃ ┗ 📂common
 ┣ 📂pages
 ┃ ┣ 📂admin
 ┃ ┗ 📂user
 ┣ 📂recoil
 ┃ ┗ 📂user
 ┣ 📂routes
 ┃ ┣ 📜AdminRoutes.js
 ┃ ┣ 📜UserRoutes.js
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyled.js
 ┃ ┣ 📜fontStyle.scss
 ┃ ┣ 📜fonts.css
 ┣ 📜App.js
 ┣ 📜index.js
 ┗ 📜setupProxy.js
```

## 🏃🏻‍♀️ 프로젝트 개발/실행
1. 레포지토리 클론
```
git clone https://github.com/kea-dpang/DPANG-front.git
```

2. 필요한 패키지 설치
```
npm install
```

3. 프로젝트 실행
```
npm start
```

**참고) develop 브랜치로 진행해 주세요.**


## 🤙🏻 커밋규칙
- feat: 처음 만들 때
- fix: 기능 개발, 기능 수정
- chore : 자잘한 로직적 버그 수정
- style : UI 측면 개발/수정 (퍼블리싱)
- docs : 문서, 구조 관련 커밋
- refactor: 코드 기능을 변경하지 않고, 가독성 개선, 중복 코드 제거, 명명법 변경 등
