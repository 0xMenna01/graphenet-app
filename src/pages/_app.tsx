import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from '../stylesheets/theme'
import { AccountProvider, ApiProvider } from '../contexts'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import '@fontsource/inter/900.css'

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
