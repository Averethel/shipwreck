import { connect, Socket } from 'socket.io-client';
import { ChangeEvent, useEffect, useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';

let socket: Socket;

type Props = {
  gameId: string;
};

const Game: NextPage<Props> = ({ gameId }) => {
  const [input, setInput] = useState('');
  useEffect(() => {
    const socketInitializer = async () => {
      await fetch(`/api/socket`);
      socket = connect();
      socket.on(`updateInput.${gameId}`, (msg) => {
        setInput(msg);
      });
    };

    socketInitializer();
  }, [gameId]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target?.value);
    socket.emit(`inputChange.${gameId}`, e.target.value);
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
