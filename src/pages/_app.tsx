import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from '../stylesheets/theme'
import { ApiProvider, InitProvider } from '../contexts'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import '@fontsource/inter/900.css'
import { Navbar } from '../components/navbar/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <ChakraProvider theme={theme}>
         <ApiProvider>
            <InitProvider>
               <Navbar>
                  <Component {...pageProps} />
               </Navbar>
            </InitProvider>
         </ApiProvider>
      </ChakraProvider>
   )
}

export default MyApp
