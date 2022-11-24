import { Avatar, Box, Divider, Flex, Text } from '@chakra-ui/react'

import styles from '../../styles/Home.module.css'
import { MainHeading, SecondHeading } from '../heading/Headings'

export const PageCustmoization = () => {
   return (
      <Box className={styles.pagebox}>
         <div className={styles.accountbox}>
            <MainHeading text="Profile Settings" />
            <SecondHeading text="Manage your links and style your Web Page" />
         </div>

         <Flex
            bg="card"
            className={styles.accountinfo}
            _hover={{ borderColor: 'main', transform: 'scale(1.03)' }}
         >
            <Avatar marginTop="20px" size="xl" src="/account.png" />
            <Text marginTop="10px" opacity="0.7" fontWeight={600}>
               Main
            </Text>
            <Text fontWeight={600} padding="20px">
               Computer Engeneering. Developer | Polkadot enthusiast
            </Text>
         </Flex>
      </Box>
   )
}
