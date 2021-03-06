// 실행 부분
const express = require('express')  // 익스프레스 모듈 가져오기
const app = express()               // 익스프레스 모듈을 app으로 할당
const port = 5000                   // 포트 번호설정 디폴트:3000

// db 연결 부분
const mongoose = require('mongoose')
const config = require('./config/key');
const userName = config.userName;
const userPass = config.userPass;
const dburl = 'mongodb+srv://' + userName + ':' + userPass + '@boilerplate.m8gpm.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(
    dburl,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,    //해당 부분 몽구스 6이상일경우 생략 필요
        // useFindAndModify : false
    }
).then(
    () => console.log('MongoDB Connected')  // 연결 성공시 출력
).catch(   
    err => console.log(err)                 // 에러시 출력
)


// body-parser 
const bodyParser = require('body-parser');
const {User} = require("./models/User");
app.use(bodyParser.urlencoded({extended:true}));  //application/x-www-form-urlencoded
app.use(bodyParser.json());                       //application/json



app.get('/', (req, res) => {
  res.send('Hello World!2')          // 실제 실행 내용
})

// 데이터 받아서 저장
app.post('/register', (req, res) => {
  const user = new User(req.body)

  user.save((err,userInfo) => {
    if (err) return res.json({success:false, err})
    return res.status(200).json({
      success:true
    })
  })
})


app.listen(port, () => {            // 위에 지정한포트로 실행
  console.log(`Example app listening on port ${port}`)
})