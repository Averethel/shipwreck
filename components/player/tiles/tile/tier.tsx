import { FC } from 'react';

import { VStack } from '@chakra-ui/react';

import { FateTier } from '@lib/game/types';

import Diamond from './diamond';

type Props = {
  tier: FateTier;
};

const Tier: FC<Props> = ({ tier }) => {
  return (
    <VStack spacing="3px">
      {Array.from({ length: tier }, (_, i) => (
        <Diamond key={`diamond-${i}`} size="sm" variant="full" />
      ))}
    </VStack>
  );
};

export default Tier;
