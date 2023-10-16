console.log('hi');

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{

  // 가독성을 위한 단순 함수 래핑
  function 
})

const PORT = 3000;
server.listen(PORT, ()=>{
  console.log(`cli 창에서 컨트롤 누른 후, 옆에 포트 누르면 편리하게 확인 => http://localhost:${PORT}/`)
})
