/*
 * @Description:
 * @Author: Elijah Roh
 * @Date: 2021-03-29 16:55:36
 * @LastEditTime: 2021-03-30 15:51:25
 * @LastEditors: Elijah Roh
 */

// ES6 import or TypeScript
import { io } from 'socket.io-client';

const socket = io('ws://127.0.0.1:1024');

console.log('');

socket.on('user', (data) => {
  console.log(data);
});

socket.on('step', (data) => {
  console.log(data);
});

socket.on('medicine', (data) => {
  console.log(data);
});
