// router에 구현한 미들웨어 함수 부분을 떼어서 controller 파일에 옮기자
// controller에 넘어간 미들웨어 함수를 export하고 route에서 import해주자

exports.hello = (req, res) => {
  res.send("라우터하나에 모아보기z");
};
