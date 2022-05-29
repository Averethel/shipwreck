import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';

import { SocketContext } from '@components/contexts/socket';

type Props = {
  gameId: string;
};

const Game: NextPage<Props> = ({ gameId }) => {
  const [input, setInput] = useState('');
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    socket?.on(`updateInput.${gameId}`, (msg) => {
      setInput(msg);
    });

    return () => {
      socket?.off(`updateInput.${gameId}`);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameId, !!socket]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target?.value);
    socket?.emit(`inputChange.${gameId}`, e.target.value);
  };

  return (
    <input
      placeholder="Type something"
      value={input}
      onChange={onChangeHandler}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query: { id },
}) => {
  return {
    props: { gameId: id },
  };
};

export default Game;
