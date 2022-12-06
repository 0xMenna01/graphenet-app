import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from '../stylesheets/theme'
import { ApiProvider, InitProvider } from '../contexts'
import { Navbar } from '../components/navbar/Navbar'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <main className={inter.className}>
         <ChakraProvider theme={theme}>
            <ApiProvider>
               <InitProvider>
                  <Navbar>
                     <Component {...pageProps} />
                  </Navbar>
               </InitProvider>
            </ApiProvider>
         </ChakraProvider>
      </main>
   )
}

export default MyApp
