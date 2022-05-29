import type { AppProps } from 'next/app';
import { ChakraProvider, Container, Flex } from '@chakra-ui/react';

import { SocketProvider } from '@components/contexts/socket';

function Shipwreck({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <SocketProvider>
        <Flex bg="gray.100" height="100vh">
          <Container maxW="container.xl">
            <Component {...pageProps} />
          </Container>
        </Flex>
      </SocketProvider>
    </ChakraProvider>
  );
}

export default Shipwreck;
