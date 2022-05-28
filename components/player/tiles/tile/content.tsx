import { FC } from 'react';
import { Grid, GridItem, VStack } from '@chakra-ui/react';

import { TileValue } from '@lib/game/types';

import Diamond from './diamond';

type Props = {
  value: TileValue;
};

const diamonds = [1, 1, 1, 2, 2, 2, 3];

const Content: FC<Props> = ({ value }) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" columnGap="3px">
      <GridItem colStart={2} fontSize="2xl" fontWeight="extrabold">
        {value}
      </GridItem>
      <GridItem colStart={3} alignItems="center" display="flex">
        <VStack spacing="3px">
          {Array.from({ length: diamonds[value - 1] }, (_, i) => (
            <Diamond key={`diamond-${i}`} size="sm" variant="full" />
          ))}
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default Content;
