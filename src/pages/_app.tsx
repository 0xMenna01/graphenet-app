import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from '../stylesheets/theme'
import { AccountProvider, ApiProvider } from '../contexts'

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <ChakraProvider theme={theme}>
         <ApiProvider>
            <AccountProvider>
               <Component {...pageProps} />
            </AccountProvider>
         </ApiProvider>
      </ChakraProvider>
   )
}

export default MyApp
