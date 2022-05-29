import { DependencyList, useEffect } from 'react';

import useSocket from '@components/hooks/useSocket';

const useEventListener = (
  name: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  listener: (...args: any[]) => void,
  deps: DependencyList = []
) => {
  const socket = useSocket();

  useEffect(() => {
    socket?.on(name, listener);

    return () => {
      socket?.off(name, listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!socket, ...deps]);
};

export default useEventListener;
