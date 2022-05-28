import { FC } from 'react';
import { Box, Flex, ScaleFade, useBoolean } from '@chakra-ui/react';

import { FateValue } from '@lib/game/types';

import Reverse from './reverse';
import Content from './content';

type Props = {
  value: FateValue;
  color: 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'black';
  isInitiallyFlipped?: boolean;
  flippable?: boolean;
};

const Tile: FC<Props> = ({
  value,
  color,
  isInitiallyFlipped = false,
  flippable = true,
}) => {
  const [isFlipped, { toggle }] = useBoolean(isInitiallyFlipped);

  return (
    <Box
      w="65px"
      h="65px"
      padding="5px"
      borderRadius="sm"
      bg={color === 'black' ? 'black' : `${color}.400`}
      color={color === 'black' ? 'yellow.300' : 'gray.800'}
      {...(flippable ? { onClick: toggle } : {})}
    >
      <Flex
        border="2px solid"
        borderRadius="sm"
        h="full"
        w="full"
        alignItems="center"
        justifyContent="center"
        padding="5px"
      >
        {isFlipped ? (
          <ScaleFade in={isFlipped} initialScale={0.1} key="reverse">
            <Reverse />
          </ScaleFade>
        ) : (
          <ScaleFade in={!isFlipped} initialScale={0.1} key="content">
            <Content value={value} />
          </ScaleFade>
        )}
      </Flex>
    </Box>
  );
};

export default Tile;
export type { Props as TileProps };
