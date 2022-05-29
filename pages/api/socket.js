import { Server } from 'socket.io';

const eventResponses = {
  inputChange: 'updateInput',
};
const SocketHandler = (_request, response) => {
  if (response.socket?.server) {
    if (!response.socket?.server.socket) {
      const io = new Server(response.socket?.server);
      response.socket.server.socket = io;

      io.on('connection', (socket) => {
        socket.onAny((name, msg) => {
          const [eventName, gameId] = name.split('.');
          const responseEvent = eventResponses[eventName];
          if (responseEvent) {
            socket.broadcast.emit(`${responseEvent}.${gameId}`, msg);
          }
        });
      });
    }
  }
  response.end();
};

export default SocketHandler;
