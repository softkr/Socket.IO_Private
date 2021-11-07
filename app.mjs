import { createServer } from 'http';
import { Server } from 'socket.io';
import { Users, Medicines, Steps } from './model.mjs';

const httpServer = createServer();
const io = new Server(httpServer);

// 소켓 연결
io.on('connection', async (socket) => {
  // 테이블
  let Tables = { user: Users, medicine: Medicines, step: Steps };

  // 메세지 전송 및 삭제
  async function message(i, channel, db) {
    if (i == 0) return false;
    let data = await db.findOneAndRemove({});
    socket.emit(channel, data);
    message(i - 1, channel, db);
  }

  // 카운트
  async function count(item) {
    let [channel, db] = [item, Tables[item]];
    let count = await db.countDocuments({});
    message(count, channel, db);
  }

  // 초 단위로 데이터 체크
  setInterval(async () => {
    Object.keys(Tables).map(count);
  }, 1000);

  // 복약수정요청이벤트
  socket.on('medicine', (data) => {
    console.log(data);
  });
  ç;
  // 연결끊김이벤트
  socket.on('disconnect', () => {
    console.log(socket.id);
  });
});

httpServer.listen(1024);
console.log('port:1024');
