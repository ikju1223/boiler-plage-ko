// 연결 부분
const mongoose = require('mongoose');

// 스키마 생성부분
const userSchema = mongoose.Schema({
    name: {
        type:String,
        maxlength:50
    },
    email: {
        type:String,
        trim:true,              // 띄어쓰기 가능
        unique: 1 
    },
    password: {
        type: String,
        minglength: 5
    },
    lastname: {
        type:String,
        maxlength: 50
    },
    role : {
        type:Number,            // 유저 권한
        default: 0 
    },
    image: String,
    token : {                   // 유효성 검사 토큰
        type: String,
    },
    tokenExp :{                 // 유효시간
        type: Number
    }
})

// 모델 생성
const User = mongoose.model('User', userSchema);

module.exports = {user}     // 외부 사용 허용

