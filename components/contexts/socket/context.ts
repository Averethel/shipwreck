import { Socket } from 'socket.io-client';
import { createContext } from 'react';

type SocketContextData = {
  socket?: Socket;
};

const SocketContext = createContext<SocketContextData>({ socket: undefined });

export default SocketContext;
