// src/io/io.ts

import { io } from "socket.io-client";
import config from 'config';

const socket = io(config.get<string>('io.url'), {
  transports: ['websocket'],
  reconnection: true
});

socket.on('connect', () => {
    console.log('🟢 Connected to Socket.IO server');
  });

export default socket;