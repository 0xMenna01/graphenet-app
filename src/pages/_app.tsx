import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from '../stylesheets/theme'
import { InitProvider, TransactionProvider } from '../components/contexts'
import { Navbar } from '../components/navbar/Navbar'
import { Inter } from '@next/font/google'
import { SpacesProvider } from '../components/contexts/SpacesContext'
const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main className={inter.className}>
            <ChakraProvider theme={theme}>
                <InitProvider>
                    <TransactionProvider>
                        <SpacesProvider>
                            <Navbar>
                                <Component {...pageProps} />
                            </Navbar>
                        </SpacesProvider>
                    </TransactionProvider>
                </InitProvider>
            </ChakraProvider>
        </main>
    )
}

export default MyApp
