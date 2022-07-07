1. 노드 설치

2. 프로젝트 생성

    npm init
- (기본값 전부 Enter)
- package.json 생성 여부 확인

3. express 라이브러리 설치

    npm install express
- node_modules 설치 확인

4. index.js 생성
- 제일 기본 시작 지점
- 내부 데이터는 https://expressjs.com/en/starter/hello-world.html 에서 참조

5. package.json 수정
- package.json 에 아래 문구 추가
- scripts 내부에 start 생성으로 실행가능 ex) "start" : "node index.js"

6. 실행

    npm run start
- package.json의 start 부분이 실행됨
    ctrl + c
- 종료 버튼

3장
7. mongodb 생성
- https://www.mongodb.com/
- 회원가입/로그인후 create로 생성

8. 사용자 생성
- connect 선택후 사용자 아이디와 비밀번호 입력
    
    ikju / 1q2w3e4r
- connect your application > 하단 부분 카피(db 접속 경로)

9. 몽구스(db 연결 라이브러리) 다운로드
    
    npm install mongoose --save
- package.json에 추가 확인

10. index.js에 연결 부분 추가
```
const mongoose = require('mongoose')
mongoose.connect(
    8번에서 복사한 url(password 변경 입력),
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
```
- 실행 확인

4장
11. 모델(nosql에서의 스키마에 대한 설명 필요)
- 스키마를 감싸는 부분
- 스키마 - 데이터에대한 규정

12. model 생성
- models 폴더 생성
- 하위에 User.js 파일생성
- 생성부분 입력
- https://github.com/jaewonhimnae/boilerplate-mern-stack/blob/master/server/models/User.js#L53

13. Git 설치

    git --version 
- 으로 설치 확인
- 미설치시 

    winget install --id Git.Git -e --source winget
- 으로 설치
- 설치 확인

14. git 생성

    git init

15. git 상태 확인

    git status

- 1 Working Directory : 기본값

    git add .
- 2 Staging Area : 깃으로 이동전 대기장소

    git commit -m "처음 저장소에 올림"
- 3 Git repository : 깃 저장소

    git push
- 4 Git repository : 깃 허브


16. 에러 / 수정시 필요 코드

    git config --global core.autocrlf true
- 윈도우 crlf 오류시 필요

    git rm --cached node_modules -r
- Stagig Area에서 삭제

    .gitgnore
    
    node_modules
- 깃 설정 node_modules 은 올리지 않음 설정


17. 깃
- 소스 관리 프로그램

18. 깃허브
- 클라우드 서비스

19. 깃허브 프로젝트 생성
- github.com
- 이후 나오는 커맨드 라인 사용
```
echo "# boiler-plage-ko" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ikju1223/boiler-plage-ko.git
git push -u origin main
```

20. ssh 연결
- 
