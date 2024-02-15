# ☀ DPANG_Front
이 저장소는 자사 복지몰 서비스 'DPANG'의 프론트 작업 공간입니다.
<p align="center"><img src="https://github.com/yougi8/CodingTestStudy/assets/51251702/bbe577a1-f6ae-4dc6-a304-6527e42b2823" height="30%" width="30%"></p>

## 🐥 담당자
- Ella : 상품 / 이벤트 / 판매처 관리
- Hani : 인증 / 회원 / 장바구니·주문 / FAQ·QnA 관리
- Harry : 마일리지 / 리뷰 / 주문·취소·환불 관리
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

## 🗂️ 프로젝트 상세 구조

```
DPANG-front
├─ .dockerignore
├─ .git
├─ .github
├─ .gitignore
├─ .vscode
├─ config-overrides.js
├─ Dockerfile
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ index.html
├─ README.md
└─ src
   ├─ api
   │  ├─ Brand.js
   │  ├─ cancel.js
   │  ├─ cart.js
   │  ├─ cartOrder.js
   │  ├─ directAsk.js
   │  ├─ event.js
   │  ├─ faq.js
   │  ├─ image.js
   │  ├─ Item.js
   │  ├─ mileage.js
   │  ├─ order.js
   │  ├─ queries
   │  │  ├─ qna.js
   │  │  └─ user.js
   │  ├─ refund.js
   │  ├─ review.js
   │  ├─ sign.js
   │  └─ user.js
   ├─ App.js
   ├─ assets
   │  ├─ CustomName.js
   │  ├─ data
   │  │  ├─ admin
   │  │  │  ├─ AdminAskData.js
   │  │  │  ├─ AdminCancelData.js
   │  │  │  ├─ AdminFaqData.js
   │  │  │  ├─ AdminMileageData.js
   │  │  │  ├─ AdminOrderData.js
   │  │  │  ├─ AdminRefundData.js
   │  │  │  ├─ AdminStoreData.js
   │  │  │  └─ AdminUserData.js
   │  │  └─ user
   │  │     ├─ CategoryData.js
   │  │     ├─ DirectAskData.js
   │  │     ├─ EventData.js
   │  │     ├─ FAQData.js
   │  │     ├─ ItemData.js
   │  │     ├─ ItemDetailData.js
   │  │     ├─ ProductAskData.js
   │  │     ├─ ProductCategory.js
   │  │     ├─ ProductEventDetailData.js
   │  │     ├─ UserCancelData.js
   │  │     ├─ UserCartData.js
   │  │     ├─ UserMileageData.js
   │  │     ├─ UserMyReviewData.js
   │  │     ├─ UserOrderData.js
   │  │     ├─ UserProductReviewData.js
   │  │     ├─ UserRefundData.js
   │  │     ├─ UserShipData.js
   │  │     ├─ UserTermsData.js
   │  │     └─ UserWishData.js
   │  ├─ fonts
   │  │  └─ .gitkeep
   │  └─ images
   │     ├─ .gitkeep
   │     ├─ adminSideBar
   │     │  ├─ adminSideAsk.svg
   │     │  ├─ adminSideComputer.svg
   │     │  ├─ adminSideEvent.svg
   │     │  ├─ adminSideItem.svg
   │     │  ├─ adminSidePeople.svg
   │     │  ├─ adminSidePerson.svg
   │     │  ├─ adminSideRefund.svg
   │     │  ├─ adminSideSetting.svg
   │     │  ├─ hamburgerMenu.svg
   │     │  └─ logoDark.png
   │     ├─ adminuser.svg
   │     ├─ arrowcircle.svg
   │     ├─ arrowStroke.svg
   │     ├─ arrowStrokeVector.svg
   │     ├─ banner_temp.png
   │     ├─ calendar.svg
   │     ├─ cart.svg
   │     ├─ carticon.png
   │     ├─ chargemile.png
   │     ├─ checkBtn.svg
   │     ├─ checkicon.svg
   │     ├─ facebook.png
   │     ├─ github.png
   │     ├─ heart.png
   │     ├─ heart.svg
   │     ├─ instagramicon.png
   │     ├─ logo.png
   │     ├─ membermile.png
   │     ├─ menu.svg
   │     ├─ messageDot.svg
   │     ├─ myPageProfile.svg
   │     ├─ noSearch.svg
   │     ├─ notFound.png
   │     ├─ profileImg.png
   │     ├─ recent.svg
   │     ├─ search.svg
   │     ├─ ship.svg
   │     ├─ shirts.png
   │     ├─ tempitemimg.png
   │     ├─ uncheckicon.svg
   │     ├─ UpArrowVector.svg
   │     ├─ user.png
   │     └─ userFooterIcon
   │        ├─ facebook.svg
   │        ├─ github.svg
   │        └─ instagram.svg
   ├─ components
   │  └─ common
   │     ├─ AdminDataTable.js
   │     ├─ AdminHeader.js
   │     ├─ AdminSideBar.js
   │     ├─ DataTable.js
   │     ├─ Dropdown.js
   │     ├─ HiddenShowBtn.js
   │     ├─ Modal.js
   │     ├─ MyPageBodyHeader.js
   │     ├─ MypageTableHeader.js
   │     ├─ MypageTitleBox.js
   │     ├─ NotFound
   │     │  └─ Index.js
   │     ├─ PeriodSelector.js
   │     ├─ ProductCard
   │     │  └─ Index.js
   │     ├─ ProductProgressBox.js
   │     ├─ SearchDropdown.js
   │     ├─ Sort
   │     │  └─ SortButton.js
   │     ├─ SweetAlert.js
   │     ├─ UserEmptyData.js
   │     ├─ UserFooter
   │     │  ├─ ImageBox.js
   │     │  └─ Index.js
   │     ├─ UserHeaderBar
   │     │  ├─ Category.js
   │     │  ├─ CategoryList.js
   │     │  ├─ DetailBox.js
   │     │  ├─ ImageShortCut.js
   │     │  ├─ Index.js
   │     │  ├─ NavBar.js
   │     │  ├─ SearchBar.js
   │     │  ├─ ShortCut.js
   │     │  └─ User.js
   │     ├─ UserPagination.js
   │     └─ UserSideBar.js
   ├─ index.js
   ├─ pages
   │  ├─ admin
   │  │  ├─ cancel
   │  │  │  ├─ Detail
   │  │  │  │  ├─ CancelDetail.js
   │  │  │  │  ├─ Index.js
   │  │  │  │  ├─ RefundDetail.js
   │  │  │  │  ├─ Table.js
   │  │  │  │  └─ TableRow.js
   │  │  │  └─ List
   │  │  │     └─ Index.js
   │  │  ├─ directAskPage
   │  │  │  ├─ Enroll
   │  │  │  │  └─ Index.js
   │  │  │  └─ List
   │  │  │     ├─ ColumnData.js
   │  │  │     ├─ DropBox.styled.js
   │  │  │     └─ Index.js
   │  │  ├─ eventPage
   │  │  │  ├─ Edit
   │  │  │  │  ├─ BrandEventEditPage.js
   │  │  │  │  ├─ BrandIndex.js
   │  │  │  │  ├─ Index.js
   │  │  │  │  └─ ProductEventEditPage.js
   │  │  │  ├─ Enroll
   │  │  │  │  ├─ AddPhoto.js
   │  │  │  │  ├─ BrandEventPage.js
   │  │  │  │  ├─ BrandIndex.js
   │  │  │  │  ├─ EventBrandName.js
   │  │  │  │  ├─ EventDate.js
   │  │  │  │  ├─ EventDiscount.js
   │  │  │  │  ├─ EventImage.js
   │  │  │  │  ├─ EventTitle.js
   │  │  │  │  ├─ Index.js
   │  │  │  │  ├─ ProductCodeInput.js
   │  │  │  │  ├─ ProductEventPage.js
   │  │  │  │  └─ ProductList.js
   │  │  │  └─ List
   │  │  │     └─ Index.js
   │  │  ├─ faqPage
   │  │  │  ├─ Edit
   │  │  │  │  └─ Index.js
   │  │  │  ├─ Enroll
   │  │  │  │  └─ Index.js
   │  │  │  └─ List
   │  │  │     └─ Index.js
   │  │  ├─ Index.js
   │  │  ├─ item
   │  │  │  ├─ brand
   │  │  │  │  ├─ Edit
   │  │  │  │  │  ├─ EditStore.js
   │  │  │  │  │  ├─ Index.js
   │  │  │  │  │  └─ InputEdit.js
   │  │  │  │  ├─ Enroll
   │  │  │  │  │  ├─ Index.js
   │  │  │  │  │  └─ StoreEnroll.js
   │  │  │  │  └─ List
   │  │  │  │     └─ Index.js
   │  │  │  └─ product
   │  │  │     ├─ Edit
   │  │  │     │  ├─ Index.js
   │  │  │     │  ├─ ProductDefaultEdit.js
   │  │  │     │  └─ ProductDetailEdit.js
   │  │  │     ├─ Enroll
   │  │  │     │  ├─ Index.js
   │  │  │     │  ├─ InputText.js
   │  │  │     │  ├─ ProductDefaultEnroll.js
   │  │  │     │  └─ ProductDetailEnroll.js
   │  │  │     └─ List
   │  │  │        └─ Index.js
   │  │  ├─ mileage
   │  │  │  └─ List
   │  │  │     ├─ Index.js
   │  │  │     └─ TableRow.js
   │  │  ├─ monitoring
   │  │  │  └─ Index.js
   │  │  ├─ Order
   │  │  │  ├─ Detail
   │  │  │  │  ├─ DetailOrder.js
   │  │  │  │  ├─ DetailTable.js
   │  │  │  │  ├─ Index.js
   │  │  │  │  └─ TableRow.js
   │  │  │  └─ List
   │  │  │     ├─ Index.js
   │  │  │     ├─ OrderBox.js
   │  │  │     ├─ RowData.js
   │  │  │     └─ TableRow.js
   │  │  ├─ refund
   │  │  │  ├─ Detail
   │  │  │  │  ├─ CancelDetail.js
   │  │  │  │  ├─ DetailPayment.js
   │  │  │  │  ├─ DetailRefund.js
   │  │  │  │  ├─ DetailShip.js
   │  │  │  │  ├─ Index.js
   │  │  │  │  ├─ RefundDetail.js
   │  │  │  │  ├─ Table.js
   │  │  │  │  └─ TableRow.js
   │  │  │  └─ List
   │  │  │     └─ Index.js
   │  │  └─ userInfo
   │  │     ├─ Edit
   │  │     │  └─ Index.js
   │  │     └─ List
   │  │        └─ Index.js
   │  └─ user
   │     ├─ Cart
   │     │  ├─ CartItem.js
   │     │  ├─ CartList.js
   │     │  └─ Index.js
   │     ├─ CategorySet
   │     │  ├─ CategoryResult.js
   │     │  └─ Index.js
   │     ├─ Event
   │     │  ├─ BrandEventPage.js
   │     │  ├─ EventList.js
   │     │  ├─ Index.js
   │     │  └─ ProductEventPage.js
   │     ├─ Home
   │     │  ├─ BestItemSection.js
   │     │  ├─ Carousel.js
   │     │  ├─ EventBanner.js
   │     │  ├─ EventCarousel.js
   │     │  ├─ EventItemSection.js
   │     │  ├─ EventSlider.js
   │     │  ├─ Index.js
   │     │  ├─ ItemSlider.js
   │     │  └─ ItemSlideWrap.js
   │     ├─ Login
   │     │  ├─ AdminIndex.js
   │     │  ├─ FindPassword.js
   │     │  └─ Index.js
   │     ├─ myPage
   │     │  ├─ Cancel
   │     │  │  ├─ CancelBox.js
   │     │  │  ├─ Detail
   │     │  │  │  ├─ DetailBox.js
   │     │  │  │  ├─ Index.js
   │     │  │  │  ├─ Refund
   │     │  │  │  │  ├─ DetailRefund.js
   │     │  │  │  │  ├─ Index.js
   │     │  │  │  │  └─ Table.js
   │     │  │  │  └─ TableRow.js
   │     │  │  ├─ Index.js
   │     │  │  └─ TableRow.js
   │     │  ├─ DirectAsk
   │     │  │  ├─ AskList.js
   │     │  │  ├─ Enroll
   │     │  │  │  ├─ AskContent.js
   │     │  │  │  ├─ AskTitle.js
   │     │  │  │  ├─ Category.js
   │     │  │  │  └─ Index.js
   │     │  │  └─ Index.js
   │     │  ├─ FAQ
   │     │  │  ├─ FAQList.js
   │     │  │  └─ Index.js
   │     │  ├─ Index.js
   │     │  ├─ Mileage
   │     │  │  ├─ Enroll
   │     │  │  │  ├─ EnrollBox.js
   │     │  │  │  ├─ EnrollTable.js
   │     │  │  │  └─ Index.js
   │     │  │  ├─ Index.js
   │     │  │  ├─ MileageBox.js
   │     │  │  └─ TableRow.js
   │     │  ├─ Order
   │     │  │  ├─ Detail
   │     │  │  │  ├─ DetailPay.js
   │     │  │  │  ├─ DetailShip.js
   │     │  │  │  ├─ DetailTable.js
   │     │  │  │  ├─ Index.js
   │     │  │  │  ├─ OrderBox.js
   │     │  │  │  └─ TableRow.js
   │     │  │  ├─ Index.js
   │     │  │  ├─ OrderBox.js
   │     │  │  ├─ RowData.js
   │     │  │  └─ TableRow.js
   │     │  ├─ Refund
   │     │  │  ├─ Detail
   │     │  │  │  ├─ Index.js
   │     │  │  │  ├─ Refund
   │     │  │  │  │  ├─ DetailCancel.js
   │     │  │  │  │  ├─ DetailPay.js
   │     │  │  │  │  ├─ DetailShip.js
   │     │  │  │  │  └─ Table.js
   │     │  │  │  ├─ RefundBox.js
   │     │  │  │  └─ TableRow.js
   │     │  │  ├─ Enroll
   │     │  │  │  ├─ Index.js
   │     │  │  │  ├─ RequestTable.js
   │     │  │  │  ├─ ReviewBox.js
   │     │  │  │  ├─ Table.js
   │     │  │  │  └─ TableRow.js
   │     │  │  ├─ Index.js
   │     │  │  ├─ RefundBox.js
   │     │  │  └─ TableRow.js
   │     │  ├─ Review
   │     │  │  ├─ Detail
   │     │  │  │  └─ Index.js
   │     │  │  ├─ Enroll
   │     │  │  │  ├─ EnrollReviewBox.js
   │     │  │  │  ├─ EnrollTable.js
   │     │  │  │  └─ Index.js
   │     │  │  ├─ Index.js
   │     │  │  ├─ ReviewBox.js
   │     │  │  └─ TableRow.js
   │     │  └─ UserInfo
   │     │     ├─ EditPassword.js
   │     │     ├─ Index.js
   │     │     └─ Leave.js
   │     ├─ Order
   │     │  ├─ Address.js
   │     │  ├─ Enroll
   │     │  │  └─ Address.js
   │     │  ├─ Index.js
   │     │  └─ OrderList.js
   │     ├─ Product
   │     │  ├─ AskTable.js
   │     │  ├─ DetailPage.js
   │     │  ├─ Index.js
   │     │  ├─ Numbers.js
   │     │  ├─ ProductAsk.js
   │     │  ├─ ProductDetailNav.js
   │     │  ├─ ProductInfo.js
   │     │  ├─ ProductReview.js
   │     │  ├─ ProductSummary.js
   │     │  ├─ RecentWatched.js
   │     │  ├─ RecentWatchedItem.js
   │     │  └─ ReviewBox.js
   │     ├─ ProductSet
   │     │  ├─ BestProdudctPage.js
   │     │  ├─ EventProductPage.js
   │     │  ├─ Index.js
   │     │  └─ NewProductPage.js
   │     ├─ Recent
   │     │  ├─ Index.js
   │     │  └─ RecentPage.js
   │     ├─ Search
   │     │  ├─ Filter
   │     │  │  ├─ Brand.js
   │     │  │  ├─ Category.js
   │     │  │  └─ Price.js
   │     │  ├─ FilterSideBar.js
   │     │  ├─ Index.js
   │     │  └─ SearchResult.js
   │     ├─ Sign
   │     │  ├─ Index.js
   │     │  └─ Terms.js
   │     └─ WishList
   │        ├─ Index.js
   │        ├─ List.js
   │        └─ WishList.js
   ├─ recoil
   │  └─ user
   │     ├─ CartAtom.js
   │     ├─ PeriodSelectAtom.js
   │     └─ UserAtom.js
   ├─ routes
   │  ├─ AdminRoutes.js
   │  ├─ index.js
   │  └─ UserRoutes.js
   ├─ setupProxy.js
   ├─ styles
   │  ├─ common.css
   │  ├─ elementStyle.scss
   │  ├─ fonts.css
   │  ├─ fontStyle.scss
   │  ├─ GlobalStyled.js
   │  └─ responsive.js
   └─ utils
      ├─ apiInterceptor.js
      ├─ cookie.js
      └─ hoc
         └─ withAuth.js

```