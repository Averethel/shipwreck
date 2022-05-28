import { FC } from 'react';
import { HStack, VStack } from '@chakra-ui/react';

import Diamond from './diamond';

const Reverse: FC = () => {
  return (
    <VStack spacing={0}>
      <Diamond size="md" variant="full" />
      <HStack spacing="15px">
        <Diamond size="md" variant="hollow" />
        <Diamond size="md" variant="full" />
      </HStack>
      <Diamond size="md" variant="hollow" />
    </VStack>
  );
};

export default Reverse;
