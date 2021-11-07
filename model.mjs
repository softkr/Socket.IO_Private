import mongoose from 'mongoose';
await mongoose.connect('mongodb://10.0.1.10/monitoring', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const UserSchema = new mongoose.Schema({
  project_id: { type: Object, required: true }, //프로젝트아이디
  code: { type: String, unique: true }, // 코더
  name: { type: String }, //이름
  gender: { type: String }, // 성별
  birth: { type: String }, // 생년월일
  age: { type: String }, // 나이
  contact: { type: String }, // 연락처
  disease: { type: String }, //질환
  medicine_list: [{ type: Object }], //약품목록
  take_medicine_time: [{ type: String }], // 개별 복양회수
  device: { type: String }, // 스마트워치 sn
  attend: { type: Date, default: Date.now }, // 참가일
  regdate: { type: Date, default: Date.now }, // 가입일
  state: { type: Number }, //상태
});

// 걸음수 테이블
const StepSchema = new mongoose.Schema({
  parent_id: {
    project_id: { type: Object }, //프로젝트아이디
    user_id: { type: String }, // 유저 아이디
  },
  data: {
    date: { type: Date, default: Date.now }, // 걸음수 전송날짜
    count: { type: String, default: '0' }, // 걸음수
  },
});
// 복약 테이블
const MedicineSchema = new mongoose.Schema({
  parent: {
    project_id: { type: Object }, //프로젝트아이디
    user_id: { type: String }, // 유저아이디
  },
  data: {
    file_name: { type: String }, // 동영상 파일
    guid: { type: String }, // 약병비컨고유번호
    title: { type: String }, //약이름
    time: { type: String }, // 복약시간
    take_medicine: { type: Boolean, default: false }, // 복약여부 기본 미복약
    regdate: { type: Date, default: Date.now }, // 등록시간
    updatetime: { type: Date, default: Date.now }, // 업데이트시간
  },
});

var Users = mongoose.model('User', UserSchema);
var Medicines = mongoose.model('Medicines', MedicineSchema);
var Steps = mongoose.model('Steps', StepSchema);

export { Users, Medicines, Steps };
