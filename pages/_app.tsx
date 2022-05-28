import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

function Shipwreck({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default Shipwreck;
