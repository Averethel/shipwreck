import { useContext } from 'react';

import { SocketContext } from '@components/contexts/socket';

const useSocket = () => {
  const { socket } = useContext(SocketContext);

  return socket;
};

export default useSocket;
