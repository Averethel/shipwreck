import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

function Shipwreck({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default Shipwreck
