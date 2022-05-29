import { ChangeEvent, useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';

import useSocket from '@components/hooks/useSocket';
import useEventListener from '@components/hooks/useEventListener';

type Props = {
  gameId: string;
};

const Game: NextPage<Props> = ({ gameId }) => {
  const [input, setInput] = useState('');
  const socket = useSocket();
  useEventListener(`updateInput.${gameId}`, setInput, [gameId]);

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
