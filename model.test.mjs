import { Users, Medicines, Steps } from './model.mjs';

let data = await Steps.findOneAndRemove({});

console.log(`count`, data);

// ((data) => {
//   // 업데이트
// })('데이트 ');
