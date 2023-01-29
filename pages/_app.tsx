import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { global_theme } from '@/styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={global_theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
