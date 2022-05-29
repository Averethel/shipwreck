import { FC } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import { getFateTier } from '@lib/game/utils';
import { FateValue } from '@lib/game/types';

import Tier from './tier';

type Props = {
  value: FateValue;
};

const Content: FC<Props> = ({ value }) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" columnGap="3px">
      <GridItem colStart={2} fontSize="2xl" fontWeight="extrabold">
        {value}
      </GridItem>
      <GridItem colStart={3} alignItems="center" display="flex">
        <Tier tier={getFateTier(value)} />
      </GridItem>
    </Grid>
  );
};

export default Content;
