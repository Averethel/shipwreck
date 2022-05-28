import type { AppProps } from 'next/app';
import { ChakraProvider, Container, Flex } from '@chakra-ui/react';

function Shipwreck({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Flex bg="gray.100" height="100vh">
        <Container maxW="container.xl">
          <Component {...pageProps} />
        </Container>
      </Flex>
    </ChakraProvider>
  );
}

export default Shipwreck;
