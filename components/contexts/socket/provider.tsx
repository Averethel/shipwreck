import { connect, Socket } from 'socket.io-client';
import { FC, PropsWithChildren, useEffect, useState } from 'react';

import SocketContext from './context';

const SocketProvider: FC<PropsWithChildren<Record<string, unknown>>> = ({
  children,
}) => {
  const [socket, setSocket] = useState<Socket | undefined>(undefined);

  useEffect(() => {
    const socketInitializer = async () => {
      await fetch(`/api/socket`);
      setSocket(connect());

      return () => {
        socket?.disconnect();
      };
    };

    socketInitializer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
