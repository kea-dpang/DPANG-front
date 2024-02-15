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

```
DPANG-front
├─ .dockerignore
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ develop
│  │     │  └─ harry
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ develop
│  │           ├─ harry
│  │           └─ HEAD
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ 55e540f2cb991be2683543ac38001af0729bed
│  │  ├─ 01
│  │  │  ├─ 1dd2df99049da813b40baa920e37e607e5fb41
│  │  │  ├─ 49d39dc79eddd6c9be4adadbc1901f521ddca1
│  │  │  ├─ a3f9d41474083ffe4e7c980d2595276f991e8d
│  │  │  └─ a632953b31c42523f27af40418f983cad8d486
│  │  ├─ 02
│  │  │  └─ 41aae84cb4dae324272c6ec8f4da1442991ecd
│  │  ├─ 03
│  │  │  ├─ 3a3eec3502a2176c4d3f0938a867f8b81a0f41
│  │  │  ├─ 8113987f719fcb4f72b606b3b191c966afed45
│  │  │  ├─ a2909d87866459127ae0f5d42c0a1d254f9636
│  │  │  ├─ ab96a1e5e9a47e775be4c673c14013b3707f99
│  │  │  └─ cf7d12d8c49067dab3da4d82fe06151930ad5d
│  │  ├─ 05
│  │  │  ├─ 79899bee6b654382fd1e7d0ba63e2971a0d20e
│  │  │  ├─ 803422bcdc89ad739fa31eaca832ebd9a467f0
│  │  │  ├─ a0d723fb3f285b0807efd9d3ee8a1b02491bcb
│  │  │  └─ e23c6fc4599f931b4199873690c1eefff7934e
│  │  ├─ 07
│  │  │  ├─ 481856fd5dae0d8b7d97e0e196800831c42fd5
│  │  │  ├─ 6bff45af7d77fef4fe2def8faaaae75c8531e5
│  │  │  ├─ 99bbe74cc2844571e48bac8e5c6058ce54a050
│  │  │  └─ ee685dbcc0a4dd13189aa3aca4e6f5fefedec1
│  │  ├─ 09
│  │  │  ├─ 0a56bce74f0ff79e34a7317c87d29b18fb7878
│  │  │  ├─ 5155d6c25a589f1289496f296c1809a80618e8
│  │  │  └─ fae5e3d5cac467c3be23d2941d131f7abfad97
│  │  ├─ 0a
│  │  │  └─ 3dfa62224bd7707114688c4da1b64ad015103c
│  │  ├─ 0b
│  │  │  ├─ 0623fc1537354c23673b07748d22eaa63d0109
│  │  │  └─ 769a03d28d8a8609c3a2d3b39cd344325ddc6d
│  │  ├─ 0c
│  │  │  ├─ 6b65dcf545f2fdb67f2fa8392ae8e2236e40be
│  │  │  └─ c4d3f89f170066be853fb810ea88b1a5294365
│  │  ├─ 0f
│  │  │  └─ 03e91d8693e7443f429f8b30723d7e3b2352e5
│  │  ├─ 10
│  │  │  └─ 919109c59742d099630ea988ebd81cada5bd5a
│  │  ├─ 11
│  │  │  ├─ 176478948ad16c8e38195c355085b069847739
│  │  │  ├─ 59c129102625fe219a1188f457a2d4e4d25925
│  │  │  └─ cd4a5d80fe493a2d2bd2647c845e6ec1c30c0b
│  │  ├─ 12
│  │  │  └─ 5b97834e515d1d47a982d08c570f7dc20bd8f7
│  │  ├─ 13
│  │  │  └─ d96c085af5961e1a712254d1cc9a62d6fd7cb6
│  │  ├─ 14
│  │  │  └─ fbe1c504026814e78d3bc489f2354e21108157
│  │  ├─ 15
│  │  │  └─ f154388c2aec23e95258f01f923d628c03e4d3
│  │  ├─ 16
│  │  │  └─ cb89b640874f491fd14b606df2dd604ca99a80
│  │  ├─ 17
│  │  │  ├─ 3cb06b6d06803b52623dd163a572fb80332d38
│  │  │  ├─ 6b7e7d6b538e927ff3ae2cb9e3190fc3596739
│  │  │  ├─ 9788c7d5415809372dedf431ccffc80534b2a4
│  │  │  ├─ aa664ff8eda537d0458a8da00d9126a85e0b96
│  │  │  ├─ b44dc23d492baa1b0b3627b6dc4c8a8383018a
│  │  │  └─ f371be2623ded64cd2d59aee666ad1b9a45241
│  │  ├─ 18
│  │  │  ├─ 441ea5b3813e54551f8fb148535b94dfe88de2
│  │  │  └─ e1776f2aff82853260e032058ee41c3d6ad17c
│  │  ├─ 19
│  │  │  ├─ 61b9455fd9a0825b230bd61395bba89c8b586b
│  │  │  ├─ 7c847dec33172e599fb0724b3f2790bf30b8c5
│  │  │  └─ e044f26225eb9397682a5865f1ce425b5460e4
│  │  ├─ 1a
│  │  │  ├─ 545d013b1f4c51b7219853a0d458062ee86a4d
│  │  │  └─ cc1464d3fdd0dcce3691e3dda91c7068c6ac9e
│  │  ├─ 1b
│  │  │  ├─ ba4e95ffacf9109e4f889ae47b68499c45b5bf
│  │  │  └─ fe42595bac37b1867f494672b9a5051809025a
│  │  ├─ 1c
│  │  │  ├─ 0939fcfd8f9920c39b85fe3c2216bf81a0e018
│  │  │  ├─ aee5fefac5d011228e8a98f1eaed104c26af46
│  │  │  └─ f49e1b01add741c7bb05d58ed42d083aa6c6c7
│  │  ├─ 1f
│  │  │  ├─ 196bab9fee3a5981a452a9b89d166d35458b0e
│  │  │  ├─ 4fb9c61db421f5e645877fba7b529f24b87308
│  │  │  ├─ baf2bb1028d2f11774818f2caf703409caab2a
│  │  │  ├─ cc36f14cc6eb0b9b8e9d0988b1640f7ab2fdb3
│  │  │  └─ d1364f55eaa7ee123c350d60227ecb8fe1e65c
│  │  ├─ 20
│  │  │  └─ c8ca16d69c1b1d3db804cb218ab94264b98bc9
│  │  ├─ 22
│  │  │  └─ 901d8551969e6965424613aae61c3a85faa577
│  │  ├─ 23
│  │  │  └─ b7c306bfe5929115529b74f1afafb4a3e0d12e
│  │  ├─ 24
│  │  │  ├─ 56182b2ee76a325fe0ff7513f36a616db38de0
│  │  │  └─ 8184e7547ac5823e325d83a64398ccbf50bdad
│  │  ├─ 25
│  │  │  ├─ 16a3c06558a63ae591185eb9d16dff94952bde
│  │  │  └─ f917b4333763499a899b0a828edb89f21726df
│  │  ├─ 26
│  │  │  ├─ 4f5da28d0196ec33db8cff62ac2fba1f619d6c
│  │  │  └─ b5d3f63f1f050123005313d03196ef969b461f
│  │  ├─ 28
│  │  │  ├─ 4142e6d5beb732d382ab3e51f200ac3e484262
│  │  │  ├─ 4335582f1f93d67a7bfaa4d6a8d516991cdd43
│  │  │  ├─ d0b10d8e053bdaee037c6baacdde802db49920
│  │  │  └─ f844deedf00c9be2aaf6dbdf1e2a0e611c6d36
│  │  ├─ 2a
│  │  │  └─ 866b2440d9efd5cf9dffc797b21a2b230ccf84
│  │  ├─ 2b
│  │  │  └─ c1242004f720223c84ed09abab18b3d07b39ac
│  │  ├─ 2c
│  │  │  └─ 21ffccdbfc0172a3374421b305cb50c4e29108
│  │  ├─ 2e
│  │  │  └─ bb41bd0db558d97cd68235a4da95fc53404fc6
│  │  ├─ 2f
│  │  │  ├─ bf71c475bda14dabbe7af29875be9457aadce3
│  │  │  └─ d133fa439372a1a63beb079bd30b1671f6aacc
│  │  ├─ 30
│  │  │  └─ 4d9609647d62d46c9599575b8dce8ee10b94cd
│  │  ├─ 31
│  │  │  └─ 7bc191e3512a6ff8bf3bdab8623075f52f0dc7
│  │  ├─ 32
│  │  │  ├─ a955329f1a53061e482f2325b948c1f60829bb
│  │  │  └─ f9f502dc00d5a72d0c5a050e70b78d95114c29
│  │  ├─ 33
│  │  │  └─ 3f7371d13f4a3ac3299482ff98652fb94fba5c
│  │  ├─ 34
│  │  │  ├─ 06724c7d74c4d74a6bc9ea2da0d9f47fb5eeec
│  │  │  ├─ 0aaf8084f8d69d313e401987249ba3e0f1ae42
│  │  │  ├─ 5040fbd8cb598fa82f793b93da02035a0f0b5a
│  │  │  └─ 5841af11d8b654a802aacfa84383f1821c6143
│  │  ├─ 35
│  │  │  └─ 72fd2b3f207186b8835ee97ba056c2663dd012
│  │  ├─ 37
│  │  │  ├─ 205b2106355c2ee0972461b28593d2e8cf77b7
│  │  │  └─ 328eb12e5801e4003acc3d9656033b4d602a7f
│  │  ├─ 38
│  │  │  ├─ 6914ab5ed31e237f24ee53e516a2960912862f
│  │  │  └─ 74eb0bddb6c4d2a35c3b56a23d714f325532c3
│  │  ├─ 39
│  │  │  └─ bc10058418f0a1edd358482da6643ba2a9299a
│  │  ├─ 3a
│  │  │  ├─ ba09ee004ba14d3f727080b285de2ed27c7e64
│  │  │  └─ cc229a0561cb105e7b05fe012b235be43bb489
│  │  ├─ 3b
│  │  │  ├─ 434ef6788ee2a15c45dd13638aaeca1484b318
│  │  │  └─ fa8e4d4f4d9d1c9ed8fa5b330d7791a95021f1
│  │  ├─ 3d
│  │  │  ├─ 16d4b2ecf5cb0c3538d7a72081e0e2d008deeb
│  │  │  └─ 7ca58984415c7ffcb62011d3ea24e57b347ede
│  │  ├─ 3e
│  │  │  ├─ 67e07d02e0a8e71874cefb3559de4d954a5c64
│  │  │  └─ 910fc477d73c0ef0f83fd9304d41a4830d0118
│  │  ├─ 3f
│  │  │  ├─ 4017445647c0513a87a3d0190b1d92a85c3c23
│  │  │  ├─ 7f20f604073611e6e5ed8226d162d9206e06f1
│  │  │  └─ ee5aed72caa0ac208007d7677ec739d7990479
│  │  ├─ 40
│  │  │  ├─ 41c7a259ba72d6eaa5119df8abac2c8119057a
│  │  │  ├─ 648696deb17066889f3f85dbb960c8c6a260c8
│  │  │  ├─ aedccc95bcd60ec5ada04ae417b46408d9c2db
│  │  │  └─ f2c4679c4a0d21f1994fa9aed4d0309bd8421d
│  │  ├─ 41
│  │  │  ├─ 133c75af577065ba7d1aadcc892bc0b7fe9821
│  │  │  ├─ 4e39660370b3a8f3d48ea77ecf7410971f6fe5
│  │  │  └─ 7498803ca607fb224224126defbe952c52f04e
│  │  ├─ 42
│  │  │  ├─ 82d19c1c100cbf1e7eabfd621d92947e9f2c52
│  │  │  └─ eabe7ec0cebed36a153de9e1b123e2b1d37c14
│  │  ├─ 43
│  │  │  ├─ 12c6c26666307421c41a305131302b3af376ba
│  │  │  ├─ 4abd9ee69868e058661b316809c3f812556a79
│  │  │  ├─ c3ef2853c5632e7cec116a5ee1ea7bf7c32566
│  │  │  └─ ea3faa9fe95d10865cdaad49d6e89ce40ce2b6
│  │  ├─ 46
│  │  │  ├─ 5bac7dfe8c7fa2aaab99506478f7ef1ee9554d
│  │  │  └─ 9df5db5a7df620099d83591ed6b8d8edd48268
│  │  ├─ 47
│  │  │  └─ b1530897e45061d9993e0a12c1640a49b8be74
│  │  ├─ 49
│  │  │  ├─ 15ba3cf6f4348c8c842d9acf66754b5674533a
│  │  │  ├─ 27f50a1c971935ca1fc6fcf78a15d4b7d6c29f
│  │  │  ├─ c18a587cc0fc8f2c14be28e4caaa8a82613e7f
│  │  │  └─ eea14c90c749e6b15fa145304ac67622a26a16
│  │  ├─ 4a
│  │  │  └─ 77e3e3aba3e790a18891a6ab6259defa607bf4
│  │  ├─ 4b
│  │  │  └─ fae5de4d0e921b29cb2659137791e623779a7c
│  │  ├─ 4c
│  │  │  ├─ 181cad96163da1b44de51a59156b848cd2b813
│  │  │  ├─ 1ff47aed38565b7aad8e66546f72491cde646b
│  │  │  ├─ 37192da4d9de04651976611777d981f107a582
│  │  │  ├─ 43c7681831e9dd05e4e4f80e7c9cd81a35e702
│  │  │  └─ 59cda78688259d41a3b5ff4bfe102840a484a7
│  │  ├─ 4d
│  │  │  ├─ a42961df715f6bae3cc3c28257aca99fb6873f
│  │  │  ├─ ba0cc1e71e55cf623a2797d32971c0c67c897e
│  │  │  └─ fafd7dbce2bb7c0e70e894f6c1517d63ca6954
│  │  ├─ 4e
│  │  │  └─ 7183c393dada9dd6a2efcf044fccb7c971f2de
│  │  ├─ 4f
│  │  │  └─ 26bac17521580c425a84a2f6a4f5a37b5238e8
│  │  ├─ 50
│  │  │  └─ 4301990823530384bf7f0b61691b8d62688661
│  │  ├─ 51
│  │  │  ├─ 37f821cee9dffd6b43c5385e4e46fb922ea3ff
│  │  │  └─ f199b69571cfc079b80e8765aed3a6e03589fa
│  │  ├─ 52
│  │  │  ├─ 8446365b12781c4aaef42a76cb1ec589eabfd8
│  │  │  └─ f8ce5684fdbf2049c3cdb3053efb9d37b35693
│  │  ├─ 53
│  │  │  └─ 89beb7ed218120a168379770b9d4dcdb05ee76
│  │  ├─ 54
│  │  │  ├─ 72ab521e20c3ec5cf48dccc2a65cbf54fe652c
│  │  │  └─ 8f9f67fa1bf263d3a5a6eb3dc7c70dbc697c76
│  │  ├─ 55
│  │  │  └─ 789563f62e63a32a5d2694d83b4836a86e88bb
│  │  ├─ 57
│  │  │  ├─ 28b22080bb49478dbd27593f2942615fb65c2c
│  │  │  └─ ec999f0980474b324e132caf651726d6e5904d
│  │  ├─ 58
│  │  │  └─ cb16d8b0d5d1fb74c1396736f14379b5e4552c
│  │  ├─ 59
│  │  │  ├─ 73a73559e74a12ff8494d7a5c4f880d8ae010d
│  │  │  └─ 84addc07b377eb43f68d9fc9f31719c92fcd0c
│  │  ├─ 5a
│  │  │  ├─ f1ee46e969884afb195c369a53481108190d9a
│  │  │  └─ fff093ee0f4d0f19a7ad60fb4eb208d166af70
│  │  ├─ 5b
│  │  │  └─ 9f78409b3744ba5bf0d9aa6cbc324019d03ff6
│  │  ├─ 5d
│  │  │  └─ 7bb50bdd0a068cf6bc53822389ecd815899019
│  │  ├─ 5e
│  │  │  ├─ 52786f5448aeb5e991cff0e47fa0d5cc0071a5
│  │  │  └─ 6e5e9fe3959d3bce369084dfb69ba9968e4f41
│  │  ├─ 60
│  │  │  ├─ 06bd122b2871412ae1800ac350d92645467aee
│  │  │  └─ 7abdbba374cb3396512f3f940e512e5ff899cb
│  │  ├─ 61
│  │  │  ├─ 823800babe2fad60d8a619b689409a5f2d65e4
│  │  │  └─ 9746089adbf062f078e417e6c4bbb1151ed9a8
│  │  ├─ 62
│  │  │  └─ 7f262a4df57909e76d3ca5f7c6ff52993b21a2
│  │  ├─ 63
│  │  │  └─ 9e1bb020c9130a40ff53b5313718bd66bf27de
│  │  ├─ 66
│  │  │  ├─ 45b4fd120f49dd7aed4e54483b903ca4088caf
│  │  │  └─ cd2b0c0480f85befd6ce2b2e3b4d6ba809d262
│  │  ├─ 67
│  │  │  └─ 2bc02e4eb5f9ee342ecf3c16def5c372f1f502
│  │  ├─ 68
│  │  │  └─ 2ab44f4740448937721e42bb228c73dba450cf
│  │  ├─ 69
│  │  │  └─ bd47f90fc3a9496834f5e7cafbb47b834b0478
│  │  ├─ 6a
│  │  │  ├─ 1582144b587b0fbc3abf35d518acfb6592857d
│  │  │  ├─ 89b1552a74a15b47475c93e1eac5591d6ee7a8
│  │  │  ├─ b09468bc288dfd2df442d255d437cfc2a7c5a0
│  │  │  └─ ccbec44cffce7395dfa90cbf7562b5e6ec83c2
│  │  ├─ 6b
│  │  │  ├─ 26c348ae0e9b8dc8e5d08089d3871d759a632a
│  │  │  └─ a7e53d6168dd744231b3facf8c5753f1ee6ae8
│  │  ├─ 6c
│  │  │  ├─ 73b83a7833da5f0756a27f7689b91de3b4e4b8
│  │  │  ├─ a9e29f8ded928d65a4af961666f4665c900e78
│  │  │  └─ f28f0408d178ecf0123d33719a7dd8c30d1ac4
│  │  ├─ 6d
│  │  │  ├─ 5fe3d3ce2f9fe40e71dc33bfb4435a56b7c258
│  │  │  └─ 6ebf7679c82c11ef8b133fb3b481810567912f
│  │  ├─ 6f
│  │  │  ├─ 3c96aa2613496669d3784eff8a4451d19e2920
│  │  │  └─ f870bf01dd38c130e2f0a8abf7b4d1842877fa
│  │  ├─ 70
│  │  │  ├─ 1a1f220c487cf2958bff4790c37ecedb005582
│  │  │  ├─ 233f23b7008c569050e4c7c483f31b6bec2af9
│  │  │  └─ 81ae715f7157b464443cd026ba2c0449b5eebd
│  │  ├─ 71
│  │  │  ├─ 54a696b0919ba9e531912423d9c609cedd36b9
│  │  │  └─ be52063f867653c10a9a143eef597aa70a3a8e
│  │  ├─ 72
│  │  │  ├─ 158b54f34b0d8407dbaed867455f21b8d1c7a3
│  │  │  └─ 30edfc3bda648b4ca7d2a8bed4fd813485ba24
│  │  ├─ 73
│  │  │  └─ b749222c24b24afb1c5e14f637eef2fe524e60
│  │  ├─ 74
│  │  │  ├─ 050a93a68a5dcb070b98aa726106ef5243d4c1
│  │  │  └─ 8bba7e3252cf512a9e6fbc2e0c31544a8f171c
│  │  ├─ 75
│  │  │  ├─ 05eacff9fb1829ca6b0b86686f7e9943380770
│  │  │  ├─ 0d152e088b2be029b1e4bf7983780ca000ac06
│  │  │  └─ 1a9442e19c0a15988331017abc45b88936acd4
│  │  ├─ 77
│  │  │  ├─ 8d21eec2fdab091da166089ca9619aca62f8c2
│  │  │  ├─ a2cb6982bd7e92f5ff0ea48ab6197cbae36bec
│  │  │  ├─ c9e45cb7cac35858f2c21d5598029ed7161d6e
│  │  │  └─ dbcd4922e0f1953aa326b3731e1f8b2a1f31d2
│  │  ├─ 78
│  │  │  ├─ 642e1ba523c836c56d4b6fb7cd75f51aac7567
│  │  │  └─ 91d611483d93afa1bd4fa5f37a16396328b130
│  │  ├─ 7a
│  │  │  ├─ 5359cb26edcb295dd3b47f20d892714a027a6c
│  │  │  └─ c7c2c7fa0feb0873781f822ed389970928b02a
│  │  ├─ 7b
│  │  │  ├─ 0429fa21d04e267d19409a313b049691bc31c8
│  │  │  └─ 38e83e24ef10113c53bd7f82b757c4ae67bcab
│  │  ├─ 7d
│  │  │  └─ 885b1ca12b6ba849e492eb0398d6309774f01e
│  │  ├─ 7e
│  │  │  ├─ 6fffec3479c8dca78135e00306fb96a642263f
│  │  │  └─ a51474254271bb7b036be5e439ec49262c2d79
│  │  ├─ 7f
│  │  │  └─ fea4ab53e8c042dabd8716065129a1571e4f02
│  │  ├─ 80
│  │  │  └─ 84b568f66ab4f7d5d32a496457d2655c59da2c
│  │  ├─ 82
│  │  │  └─ cd312737dd810a141a86f7833014858385d846
│  │  ├─ 83
│  │  │  └─ 65891529bfb6a69e6feec9a43119b5772e02de
│  │  ├─ 85
│  │  │  └─ d3030469c38462801fbe5a5e89cc2267a3acea
│  │  ├─ 86
│  │  │  └─ 1767389eda1c16973366bf41c6292ea80ca878
│  │  ├─ 87
│  │  │  ├─ 0f56911b25f0c7128da7694080e424c573cf40
│  │  │  ├─ 2cbe680058ef359ed9b72099fe5b4479533532
│  │  │  └─ 2ddb1aeaa3d54373dd13574e01752d970afe21
│  │  ├─ 89
│  │  │  ├─ 2d32ce6a04e5aac1e3179bbaa163bd9fe7bd62
│  │  │  ├─ e296303b70b9bcebe02ab19139eb56d34d203a
│  │  │  └─ f60465f35492343b57e26522c2aaa022840b5e
│  │  ├─ 8a
│  │  │  └─ 0950a32d4638f85f8111d5d912d0dec7dc7ba4
│  │  ├─ 8b
│  │  │  └─ b76dd5cd068c3630906206274ee6a1460bc91f
│  │  ├─ 8c
│  │  │  ├─ 18133e558ddaeacd9e5decbf22316606fb4715
│  │  │  ├─ 8e736bcff662a649de1a150f3078cbd2de06bc
│  │  │  └─ b3d4cc678f22d3a5743123d3815ed830cb031b
│  │  ├─ 8d
│  │  │  ├─ 889402268f37538aa80d197192744d209fb58a
│  │  │  ├─ b2f44ecb91cc1e0d4ad5b84000faf1480f1109
│  │  │  ├─ e9297e8ae7ec54bd590972ea8c8ba25f3670ea
│  │  │  └─ fca0aa80589795a65783d5ae1c54628e3c2cb7
│  │  ├─ 8e
│  │  │  └─ 40202732a76a51e17b76a08401a227b6df703a
│  │  ├─ 8f
│  │  │  ├─ 84f701b2c43d812330e1b80f3d4f31c95a56dc
│  │  │  ├─ c6e244f19e946dd0e1c5dac7adaadeef3f6b78
│  │  │  └─ dbbd7c923c1c015ab8439bccd0f8d16fc91f79
│  │  ├─ 91
│  │  │  └─ 253ad1e92bef1c66debd8aa3e1bf3bddf131bd
│  │  ├─ 92
│  │  │  ├─ 8202e0019cb29f9abf8d28707254ab16bdee21
│  │  │  └─ 9bb204abd9c16e1bf7a6c29ed01138f4e2d09f
│  │  ├─ 93
│  │  │  ├─ 63a946a9f54b66a23850f017c7bbe72bea9e8a
│  │  │  ├─ 993ffb26bb2bc7f1c8b558fba10163e3129db1
│  │  │  └─ d65d85ed4b0c3a4116f1cd5398f85a58d0e54b
│  │  ├─ 94
│  │  │  ├─ 10813134f8f27dc75f1323da3857cc5b02f207
│  │  │  ├─ 49be2fbfb5977f0ddd788f9628d7607d1f6d7c
│  │  │  ├─ 81c606ba197dda89c904f3afa97258c6963f44
│  │  │  └─ dd092b8d0aef8da830ec8f9f0f6618fbde3e6d
│  │  ├─ 95
│  │  │  └─ 0924fdb87bc7ca39c41923be807669420d1810
│  │  ├─ 96
│  │  │  ├─ 0fed84dd0ac9f44d557a32fdc80c759dd18466
│  │  │  ├─ 81e7107e802d583bb0b9904b558db951781f91
│  │  │  ├─ b600ee2decdb394d0e38f8f1c2a4f95a2492f1
│  │  │  └─ c21d6c2c3e7018158c042828140c745ccb0f76
│  │  ├─ 97
│  │  │  └─ 8e6dc70957c7d1490e0ee61fc5f12306b55cf7
│  │  ├─ 98
│  │  │  └─ 6447b9430e7d594b20733f5bac46c4e0170776
│  │  ├─ 9a
│  │  │  └─ 535d27800bc668287de85a43344f4101f4d12a
│  │  ├─ 9b
│  │  │  ├─ 866e2ad18d59490d9eea66aa130feba98a516d
│  │  │  └─ e8c684bed354dc66506de6eb68fbfd36acd1b4
│  │  ├─ 9c
│  │  │  ├─ 56e064283702daea9fea7e4b73cc520d48b299
│  │  │  └─ bfcf6180cd9fd850f1c3e4eede9961601cf87b
│  │  ├─ 9d
│  │  │  ├─ 33e34966c13454eebae93a00b5df405ce204ff
│  │  │  └─ 80a2c0e13f5b1dbd122ac43f08313f21843734
│  │  ├─ 9e
│  │  │  ├─ 75509485182dea0422055045084dfd463bebc8
│  │  │  ├─ b6e53c1bb392964c7e318278e408b98f7b72c7
│  │  │  └─ f92091aafff4781954b6e2002293db5db22f20
│  │  ├─ a0
│  │  │  ├─ 3ec16f1ffc6ac2c832cb9ecbcb4caddce2a729
│  │  │  ├─ 52490450f5c95c1edda87d429a19ce18293a35
│  │  │  ├─ 5c8bd8d4185329cc1d8cf3c78f0860c9aebe42
│  │  │  └─ baa2a78b61db01062e0fac576975f802fb0192
│  │  ├─ a2
│  │  │  └─ 45d51dd2bf116b07bde1319129c13719e76135
│  │  ├─ a3
│  │  │  └─ 4f29fd0b8ed16142ce62676f4935e4eff18074
│  │  ├─ a4
│  │  │  ├─ 1baabc6c68ed44aa9714b2be1f1fc8a7a1a382
│  │  │  ├─ c02fd3b1e8d1d105606949ceb8259380c630aa
│  │  │  └─ d266129f200964831debffb28da7a25224f66e
│  │  ├─ a5
│  │  │  ├─ 80559e59da3590dc6aa977d52318e7865bdb2b
│  │  │  └─ c06a904c79567716d26cf3a35be90d91e4c7c3
│  │  ├─ a6
│  │  │  ├─ 8c8638a5bf1044c40c5d5e8232c1af5fa27555
│  │  │  └─ af85053ae74949077fa4da93aade97254b0728
│  │  ├─ a7
│  │  │  ├─ 500f6a987df90aacf0b0589923cc003b29a186
│  │  │  └─ ad9d95ac70f9e33b25e0be331c0616ce67e9c6
│  │  ├─ a8
│  │  │  └─ 0aa50242f5a0d6a7198814b927da5d425b98d9
│  │  ├─ aa
│  │  │  └─ 259a3b807aa5de742a820a2d60e42870460e80
│  │  ├─ ab
│  │  │  ├─ 58a685d5f3ef3ef1e10f39943319c4adc51ba1
│  │  │  ├─ 62391da730f4071805c815ba3b630ac315d8c2
│  │  │  ├─ 67ec87a58dbc0e3380224d39bd68679c3681d1
│  │  │  ├─ 6dbff71c622876b02b71c577b707fad06a6705
│  │  │  ├─ 877a56a6f1cc3a071c0af4ca752969308bda6d
│  │  │  ├─ 8b9d23cf46d64a551d7cff951f6699c7990e17
│  │  │  ├─ a03a4d47670bd81a0db6103d3f7faac5d01b03
│  │  │  └─ aaea31bb84b3f9b769d5131a6fe0d143b1784c
│  │  ├─ ac
│  │  │  └─ eb9d09646914c6b99c2b9e356b7e1102edac45
│  │  ├─ af
│  │  │  └─ 7ff8fb19fcf96da621da56a2f2a69118578542
│  │  ├─ b0
│  │  │  └─ df8832adab5d321cf36981ad60b164751db5be
│  │  ├─ b2
│  │  │  └─ 86765fb471242b7209928ca05ae0626dc6f54f
│  │  ├─ b3
│  │  │  └─ 2ca91016a93a03528d4b8842ab9ccf7d3d3642
│  │  ├─ b4
│  │  │  ├─ 0922c8db077871e16b3c7848a18e75502bcb22
│  │  │  └─ 65e10a4df8544749bb3204e68f6c057b3ab4aa
│  │  ├─ b6
│  │  │  ├─ 78e65f3a48516286987660060551af78e15fc4
│  │  │  ├─ a1837e596f1263e5358be2b749410a2ed37476
│  │  │  └─ d4c99f4b3bae48055d9acaf53ed221ac1e51d0
│  │  ├─ b7
│  │  │  ├─ 1391558c027b1e35d18c25116fd2aef6f77323
│  │  │  ├─ 522440a835fe6d675a0ad8c32f7378d72a10b7
│  │  │  ├─ 9fbe5b027dee3d7109f4bff3d1e3dfc2e0c445
│  │  │  └─ baa1410fca9526c82d5554a62b7877075c8b11
│  │  ├─ b8
│  │  │  ├─ 14d15cbb759c38d2711b2819f9aa58c34dd8e8
│  │  │  ├─ 40e5bb7ca841272b2c7906420937b904064bba
│  │  │  └─ 899fa51e682498795a77d3e07bb738db401e4f
│  │  ├─ b9
│  │  │  ├─ 0e8eb97fef90e6a67d29fa7d69f9c293568b73
│  │  │  ├─ 5d21fcd835d01cca8fceaf752c254510b9d427
│  │  │  ├─ 7e95be5b1741e398bc341281d50c64f9aa873a
│  │  │  ├─ a056d9194850747180992671f32085ef2e7b56
│  │  │  └─ ebbcc3fe212658b29b2df1fabfd1d3b432483c
│  │  ├─ ba
│  │  │  ├─ 2617f45747be7e2381826e62e00949b401be02
│  │  │  ├─ 93475bf18834900f39bcd6279862a9e8d0ff04
│  │  │  └─ d3d3d1912aeb2110ca3022c2aa9fb1011be357
│  │  ├─ bb
│  │  │  └─ 7ce74b048d506a21b688b4c365399ce8f9bc80
│  │  ├─ bc
│  │  │  ├─ 6e3029d60ed147031857c3e28d2baca6a9e0d9
│  │  │  └─ 80d0b543993953970167ea57a65eccaaf7b534
│  │  ├─ bf
│  │  │  └─ d45bf011d7444dfe54967c9a73c2201017ae94
│  │  ├─ c0
│  │  │  ├─ 1d5c58ae8f63e63ffa26581704a345240fcad7
│  │  │  └─ d44c80da373298147dd550f57d36d259bb3f2d
│  │  ├─ c1
│  │  │  ├─ 7da6a4bef2dc612bcc16fb5c4071110b15b2cc
│  │  │  └─ 8efe120beecdbcbbd8cab3c041350df223e045
│  │  ├─ c2
│  │  │  ├─ 878a33ebbf2a2402c62ab8c75e8e8c0dd7c6ae
│  │  │  └─ bb08ca981f31da1e459abfae3e5ced9e1a5e94
│  │  ├─ c3
│  │  │  ├─ 0be5a3d8f17dcedcd809472aaf3b4634b51e58
│  │  │  └─ d690b5866e3eb04be8c919871ff117325c6bb4
│  │  ├─ c4
│  │  │  ├─ 4e3d1e1c29b22aea38edfcdb08adb40cd45543
│  │  │  ├─ be412a3a836bce1a00d605bea2b6a501536109
│  │  │  └─ df16f810651c6a942eba9d69d7668f3a12aff2
│  │  ├─ c5
│  │  │  └─ e70f8a4a4926cebbd47ed6b26837b23924794c
│  │  ├─ c6
│  │  │  ├─ 5cb961d1ed53934a15e5195efe2b3afb74c5fa
│  │  │  ├─ 882e97934ddf1aee1e658e5957aa7b92b381fe
│  │  │  └─ d89248ab9abc5d19f00863f05d1016406f2ef2
│  │  ├─ c8
│  │  │  └─ 3e6133eaf9f3159f818e13ae8ae3da9117c76f
│  │  ├─ ca
│  │  │  ├─ b2f51b0cffa224102e3823b961572ed91652f7
│  │  │  ├─ b92df97e2c418bfcdf71396c5153f6daaf8fdb
│  │  │  └─ cfc9f733806520bb115f53f04711a3e0a5fc8d
│  │  ├─ cb
│  │  │  ├─ 004e1a87dc19b5dcb1c0d7605e9bf2cfe3d72c
│  │  │  ├─ 39f39f3fb3b6ff944af37c19acb4f000610cf7
│  │  │  ├─ be781b420ae80dc57871ec59d08b169b82525b
│  │  │  └─ f598c3334e46638091ff36681dcd817bd4e62c
│  │  ├─ cd
│  │  │  ├─ 4001668a160b4b8505f55edda96ac63d56d5ce
│  │  │  ├─ 6979f8d7e8d8aaf90d43a08c1984b93a1d9d28
│  │  │  └─ f1ea835803e10a2e38eeca8e3c76fc8b2dfed4
│  │  ├─ ce
│  │  │  └─ 5f3f598b4be5034e4cf3f51af7a53c5b947ada
│  │  ├─ cf
│  │  │  └─ db3978381da2666b1b32090e944b751c389179
│  │  ├─ d0
│  │  │  └─ c832864f6b99a7ad825275c93a5e8b49ae28ca
│  │  ├─ d1
│  │  │  └─ 641904674dd1d535d93df9ba84bbbdf9bbcb25
│  │  ├─ d2
│  │  │  ├─ 04491557ff8f0fa8021ffed32f076977a7b415
│  │  │  ├─ 3a3e3d739b0cd0d93e8e46db480c3c8e9bac1d
│  │  │  ├─ 98d52f0b0c9ddcbbc231934eb66ba1e9ebdd7d
│  │  │  └─ d69d6858d156edbc3d0ab33c004571b7bba405
│  │  ├─ d3
│  │  │  ├─ 273ced2a8b972e53b588d658ff860bfa823d04
│  │  │  └─ 4976802bf60a35f6d20ed5ede94d99fbabe44b
│  │  ├─ d5
│  │  │  ├─ 6d0cfb30ea9a70e9813c2888d45543cc1ff57e
│  │  │  ├─ 86655dd213ea270499311e979b86b9c05851a7
│  │  │  ├─ a2260785021a8732a39ba824925e4b53b372df
│  │  │  └─ c6d5046d544c45d406099fc7871716c30736a1
│  │  ├─ d7
│  │  │  ├─ 5c5dcd46b805d3174d61c1a8c5e5851662b8c7
│  │  │  ├─ 98707787f105815bc18c3ac2c9d81f383f16e5
│  │  │  └─ facad6b86075a35eca0e5302fff60a3f9d54a1
│  │  ├─ d8
│  │  │  ├─ 25597c9517658aa702699959625acf1749e14d
│  │  │  └─ cb5fbc376012a2b8b495b5156bce239d690f2a
│  │  ├─ d9
│  │  │  └─ 157a3b000e03359f65f0966c0ba08a7d082a62
│  │  ├─ da
│  │  │  ├─ 159cf7077b256dd001251accbc6809fc0049e6
│  │  │  ├─ 612c216ac7412297941b4b20bd7b6b7906731f
│  │  │  └─ e084e9306dcfa1d87879470cac9c3eedd6ef76
│  │  ├─ db
│  │  │  └─ b5aabbbdedb6c64dd9b85461e5e4be64452c01
│  │  ├─ dc
│  │  │  ├─ 0af865f2f2c17122ecadbb5f29696f213b847f
│  │  │  ├─ 58f6e6f44bb0094f61a781aff703b3da081663
│  │  │  └─ 719bea54c0613ab8e7480e73079475d48f7285
│  │  ├─ dd
│  │  │  └─ e3f3077d8d1cad8cacdf16346085b282bc0bca
│  │  ├─ de
│  │  │  └─ 7c14aff6788702773457e5830b893b12cb66db
│  │  ├─ df
│  │  │  ├─ 0c06ec7d279f311af4ef5da5ae4c493028cf18
│  │  │  ├─ 384459f8558343275839a4a9dee9d5c32f6096
│  │  │  └─ 5e7470048a7f7a6762074e41099b7ae5faeb57
│  │  ├─ e0
│  │  │  ├─ 6963623d7eae229bdacbe3deddc9354184c6ab
│  │  │  ├─ 6b134806a307bb15552024cbfb7adfc3725cb7
│  │  │  └─ fc0f008a5f7cfc02e1479ceb1d7d31f1507719
│  │  ├─ e2
│  │  │  └─ 687da9e35803989ff4ba7405c7b2ed11a044e0
│  │  ├─ e4
│  │  │  ├─ 075785a3f5b5ed80d59fa8460c81b6456cfdab
│  │  │  └─ dc6a55264073ff97723094fe9207590bb2112a
│  │  ├─ e5
│  │  │  ├─ 20646bb98ab9c99c9efb87766340fc19fd60f9
│  │  │  └─ 496b6e47a4f3893eac97a5e30a23c50a0349d6
│  │  ├─ e6
│  │  │  ├─ 0d1fdd75d8efcb356a5456ae155db1fb07725e
│  │  │  └─ c239decbe018775ef8cf68aa97ca0b7cfefc23
│  │  ├─ e7
│  │  │  ├─ 5532486f8ffcc17dab8610948d0b99e6899311
│  │  │  ├─ a1009d456efed9ac3f1d6ac726b6e0695cfe3e
│  │  │  └─ e8d4010bc3080d5157052e924518999d1f7cbe
│  │  ├─ e9
│  │  │  └─ 5e1277f378e4f4e882c0910226bfebe9a43cdd
│  │  ├─ ea
│  │  │  ├─ b5935d47f68b9d615b6ed7f60c1ba64d5a6227
│  │  │  ├─ e4757204312df64e4155dca807691fb0345d33
│  │  │  └─ fdb42b744a94ec2637f5d041b8eb776e281cf4
│  │  ├─ eb
│  │  │  ├─ 22def4b64137403ffda088a038b381c1ef286a
│  │  │  └─ 89ece94f8563902c83fa7b333d5232235b6b71
│  │  ├─ ec
│  │  │  ├─ 722a2735ccb6325ec68a1a6772b3eca25e3188
│  │  │  ├─ c121666c4a0b44597c307239f6288d1f0a6396
│  │  │  ├─ d1c53a3c42a7fdb2cb41e50e1ae33f4b53ad79
│  │  │  ├─ db82240c0ceb0fddad6a7c08b3a6b64a70ec48
│  │  │  └─ edf158b114dfb414f2c999b0bfcab9b9c07576
│  │  ├─ ee
│  │  │  ├─ 0030552fcb51509209cdd208c747ad3d263ccd
│  │  │  ├─ 44654ee594c5c8f4d84de671827ce767aedf05
│  │  │  └─ ca7f40ee13d9edce18348e1d6a93cdd2533dee
│  │  ├─ ef
│  │  │  └─ d3d568ea5525adb93c5c7652e5e53d416cc149
│  │  ├─ f0
│  │  │  ├─ 39e9aa03929cb1180353489b4e815dd79d8428
│  │  │  └─ 94ee957610928ca69b19bd4b8a1ce45427f06a
│  │  ├─ f2
│  │  │  ├─ 49d9238776bfb2b246d25794b0a6daecfe7690
│  │  │  └─ c585dc494787768155266dc59232ec010eeb8b
│  │  ├─ f3
│  │  │  └─ 701b8440e3a335d04b075257a0b4973dca6e3a
│  │  ├─ f5
│  │  │  └─ c4556978bfe71c884220ee43c37798ce62669a
│  │  ├─ f7
│  │  │  ├─ 1435979752645061a01fec6130468f136f49af
│  │  │  └─ 76122eaeac4dddb45ddbf2cf657ceba780ee07
│  │  ├─ f8
│  │  │  └─ e0ae6aa2f99d13df23a3361ebba287ea6f3744
│  │  ├─ f9
│  │  │  ├─ 691da1862b29aa1e81e537b23c9b5405ed4e84
│  │  │  ├─ dd43956e04666fa9d3f14558cfede71fd65c0d
│  │  │  └─ ed960232c611b822d885abbee07661636b946d
│  │  ├─ fa
│  │  │  └─ 031acba0b34f5613e358fce8de9b8c0430d009
│  │  ├─ fb
│  │  │  ├─ 13e34c3c1b72981f6816c5c554b7c7d5f16ef9
│  │  │  ├─ b7ea10277c98c7096efeb7c02c80f004ff1045
│  │  │  ├─ ba25eb02081c0b38d2a382edd6307ce3323007
│  │  │  └─ d5359a182287bd14d1b5ac5cc5495d8329c659
│  │  ├─ fc
│  │  │  ├─ 29e2608ac35bf3f1f5e7a255043f9b11c83464
│  │  │  ├─ 3e0730d1cf8a902e07a060c8158404b5ac87d1
│  │  │  └─ ff0733c6333a4e94d34f14b53f6c3633bdd6a6
│  │  ├─ fd
│  │  │  └─ 3bd27843dbe221bec5c8c0b164a7925abc453e
│  │  ├─ fe
│  │  │  └─ c4c44a022b714416d26b016c2ca30f565a0304
│  │  ├─ ff
│  │  │  ├─ 116a65eb5bd1f84f697e32eef143faaece0c1e
│  │  │  ├─ 81a842a8b0cf896858f227f0d2d0f331cb8bdc
│  │  │  └─ c37a942dc1c1b00c2a2bc0964567c0f55c0e6e
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-3771a145791b8a2f6383d838c8a3988c82937e9a.idx
│  │     ├─ pack-3771a145791b8a2f6383d838c8a3988c82937e9a.pack
│  │     ├─ pack-66fb5840a802dd6972b856e93a75dc7acfb0d28e.idx
│  │     ├─ pack-66fb5840a802dd6972b856e93a75dc7acfb0d28e.pack
│  │     ├─ pack-80281160ac308b3dfadcddc62f786aade529770c.idx
│  │     └─ pack-80281160ac308b3dfadcddc62f786aade529770c.pack
│  ├─ ORIG_HEAD
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  ├─ develop
│     │  └─ harry
│     ├─ remotes
│     │  └─ origin
│     │     ├─ develop
│     │     ├─ harry
│     │     └─ HEAD
│     └─ tags
├─ .github
│  └─ workflows
├─ .gitignore
├─ .vscode
│  └─ extensions.json
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