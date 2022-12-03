import { Box, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import styles from '../../styles/App.module.css'
import { shadow } from '../../stylesheets/theme'

type Props = {
   children: React.ReactNode
}

export const Navbar = ({ children }: Props) => {
   const elems = ['Manage Links', 'Styles', 'Domains']
   const pages = ['/', '/styles', '/domains']
   const router = useRouter()

   return (
      <>
         <Flex width="100%" justifyContent="center">
            <Box
               display={pages.includes(router.pathname) ? 'flex' : 'none'}
               className={styles.navbar}
               backgroundColor="second"
               boxShadow={shadow}
            >
               {elems.map((value, index) => (
                  <Text
                     key={value}
                     className={styles.textnav}
                     opacity={
                        pages.indexOf(router.pathname) == index ? '1' : '0.6'
                     }
                     _hover={{ opacity: 1, cursor: 'pointer' }}
                     onClick={() => {
                        router.push('/' + pages[index])
                     }}
                  >
                     {value}
                  </Text>
               ))}
            </Box>
         </Flex>
         {children}
      </>
   )
}
