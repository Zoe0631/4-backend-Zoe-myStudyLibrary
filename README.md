# backend-Zoe-mystudyLibrary

---

## :books: 내 주변의 도서관 찾는 사이트 :books:

프로젝트 명: myStudyLibrary

작성자: 김예지

:clipboard: [프로젝트 링크](https://mystudylibrary.pe.kr)

* 참고사항: 보안상 letsencrypt에서 발급받은 ssl 인증서를 적용했고 비밀번호는 암호화돼서 저장됩니다.

## :closed_book: 프로젝트 설명

개인 프로젝트입니다.

사용자 주변 지역의 도서관을 찾아주는 복지 사이트입니다.

각 도서관 페이지에 평점, 후기를 남길 수 있고 사이트 사용자들끼리 커뮤니티 글을 공유할 수 있습니다.

<br>

## 📙 프로젝트 기획 및 설계

### 프로젝트 기획

ovenapp.io 툴 이용했습니다.  




<details>
    <summary> 🧷 기획 예시 사진 및 링크 </summary>
    <br>

* 예시 이미지
![image](https://user-images.githubusercontent.com/98700133/173318356-b076ce39-37cf-4abc-8ea7-c76c7eecfb4f.png)

1. :clipboard: [기획 링크](https://ovenapp.io/view/sM4TbEvWMLijyHLw5oZIhUubP99mgGUD/gHdLH)
2. 왼쪽 하단의 '메모 표시'를 누르면 각 페이지와 기능에 대한 설명을 볼 수 있습니다.
3. 화살표를 누르거나 '페이지 목록'을 누르면 다른 페이지로 넘어갈 수 있습니다.
4. '링크 영역 표시'를 누르면 누를 수 있는 영역을 확인할 수 있습니다.

* 해당 프로젝트를 진행하면서 초반 기획과 달라진 부분들이 꽤 있으니 참고 바랍니다.

<!-- summary 아래 한칸 공백 두고 내용 삽입 -->

</details>

### 프로젝트 DB 테이블

* aquerytool 사이트를 이용해서 테이블 설계

:clipboard: [테이블과 테이블 구성요소](https://closed-glade-095.notion.site/myStudyLibrary-DB-6bc5bd5da4f9483ab37bf6af83cf3e55)


<br>
    
## :ledger: 주요 기능
 
* express-validator 미들웨어를 통해 route에서 유효성 검사를 해줬습니다. 필요한 경우 정규 표현식을 사용했습니다.
    
* 회원가입/비밀번호 수정 기능
    
    * '비밀번호'는 salting과 키 스트레칭을 구현한 bcrypt 해시 함수로 암호화 후 저장했습니다.
    
    * '비밀번호 확인'은 '비밀번호'와 일치하는 지로 여부로 유효성 여부 판별했습니다.
    
* 프로필 사진 수정 기능
    
    * multipart/formdata 형식 데이터를 다루기 위해서 multer 미들웨어를 사용해 줬습니다.
    
    * .jpg/.jpeg/.png/.gjf 확장자일 때만 유효성 검사를 통과하도록 해줬습니다.

* 회원 탈퇴 기능
    
    * 유저가 탈퇴 시 탈퇴한 유저의 정보는 'user' 테이블에서 'withdrawalUser' 테이블로 이동시켜줍니다. 
    
    * 이벤트 스케줄러를 통해 탈퇴 후 일정 기간이 지난 탈퇴 유저의 정보는 주기적으로 'withdrawalUser' 테이블에서 영구 삭제합니다.

* 댓글/대 댓글 작성 및 조회 기능
    
    * 루트 댓글과 대 댓글을 나눠서 작성 및 조회할 수 있도록 했습니다. 대 댓글에는 하위 대 댓글을 작성할 수 없습니다.
    
    * 이를 위해 'comment' 테이블에 parentIndex라는 컬럼을 두고 루트댓글인 경우는 값을 null로 두고 대댓글인 경우는 루트 댓글의 commentIndex 값이 들어가도록 했습니다.
    
    * 페이지네이션을 해서 한 페이지에 최근 작성된 5개의 루트 댓글만 조회를 하고 해당 5개 루트 댓글의 commentIndex가 parentIndex인 대 댓글들을 조회해 줬습니다.
    
    * 프론트 서버에서는 순서대로 배치만 하면 되도록 정렬해 줬습니다.

* 게시글 조회 시 조회 수 중복체크
    
    * 글 조회 시 유효기간이 하루인 쿠키를 발급해서 ';'를 구분자로 조회한 게시글들의 인덱스가 값으로 들어가도록 했습니다. (ex. '1;2;3;4;5;')
    
    * 쿠키의 값을 ';'를 구분자로 파싱 해준 뒤 해당 배열의 값 중 조회한 게시글의 값이 있는지 확인하는 방식으로 조회 수 중복체크를 해줬습니다.


## 📗 개발 스택

- 사용 스택: js, node.js + express.js, mysql, sequelize, pm2(서버에 무중단 배포)

 <br>

## :blue_book: 문제사항과 해결 방안

### 1.

:clipboard: [문제/해결 방안1 링크](https://closed-glade-095.notion.site/myStudyLibrary-1-2cc8fc2aa67d4224bb7336ad2e08c744)

### 2.

:clipboard: [문제/해결 방안2 링크](https://closed-glade-095.notion.site/myStudyLibrary-2-ec21cf5b53b0428f9bce3c5fa2ff9736)

<br>
    
## 💭 프로젝트 진행 후 느낀 점과 개선하고 싶은 점
### 느낀 점

1. 프로젝트를 진행하다 보니 다양한 상황에 대한 예외처리를 해두는 것이 중요하다는 점을 알게됐습니다. 

2. express-validator를 도입하기 전에 유효성 검사 관련 코드를 직접 작성했었습니다. 그러다가 express-validator의 존재를 알고 이미 구현돼 있는 것을 쓰는게 편하고 정확도도 높다는 생각을 하게됐습니다. 어떠한 기능을 구현하고 싶을 때 아래의 선택 기준에 따라 라이브러리를 선택해서 사용하도록 하겠습니다.
 - 라이브러리 선택 기준: 지속적인 유지 보수 및 관리가 되고 있는지, 예제나 사용법 등의 문서 정리를 잘 했는지, 잘 작동하는지 테스트를 포함했는지

### 개선하고 싶은 점

1. 게시글을 조회할 때마다 기존의 쿠키는 없애고 새 게시글 인덱스의 정보를 추가한 값을 가진 쿠키를 새로 발급하도록 해줬습니다. 즉 쿠키의 만료 기간이 지나기 전 새 게시글을 조회할 때마다 쿠키의 만료 기간이 갱신되며 쿠키 값의 길이는 길어집니다. 이 경우 하나의 쿠키에 저장 가능한 용량을 넘기는 경우에 대한 예외 처리가 필요할 것 같습니다.

2. controller에서 로그인을 했는지 여부가 체크가 필요한 기능인 경우 로그인 체크 여부가 매번 똑같은 코드로 반복됩니다. 마찬가지로 controller의 에러 핸들러에서도 비슷한 코드들이 반복됩니다. 이 코드를 따로 메서드로 정의하면 좋을 것 같다는 생각을 했습니다.


<br>
    
## 📝 회고록

 처음에 REST API 존재를 몰라서 HTTP 메서드에 이미 동사 정보가 있는데 uri에도 포함시키다 보니 uri 가 지나치게 길어졌습니다. 프로젝트가 어느 정도 진행되고 나서야 REST API에 대해 알게 돼서 진행된 프로젝트를 크게 바꾸지 않아도 규범을 적용할 수 있는 부분은 적용해 줬습니다. 이처럼 기술 구현에 집중하다 보니 규범에 신경 쓰지 못하는 경우가 종종 생겼었습니다. 이 부분은 차차 개선해나가고 싶습니다.

