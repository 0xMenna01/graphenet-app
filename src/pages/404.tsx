import { NextPage } from 'next'
import { Box, Flex, Text } from '@chakra-ui/react'

import styles from '../styles/404.module.css'
import { MainButton } from '../components/button/MainButton'
import { useRouter } from 'next/router'

const ErrorNotFound: NextPage = () => {
   const router = useRouter()

   return (
      <Flex justifyContent="center">
         <Box className={styles.message}>
            <Text fontWeight="800" fontSize="45">
               Page Not Found
            </Text>
            <Text fontSize="20" fontWeight="500">
               Please return to the Home Page
            </Text>

            <MainButton
               text="Home"
               fontSize="18"
               padding="20px"
               bg="second"
               onClick={() => router.push('/')}
            />
         </Box>
      </Flex>
   )
}

export default ErrorNotFound
