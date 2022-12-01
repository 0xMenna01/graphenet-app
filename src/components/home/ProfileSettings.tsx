import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

import styles from '../../styles/Home.module.css'
import { MainButton } from '../button/MainButton'
import { MainHeading, SecondHeading } from '../heading/Headings'
import { ManageLinksCard } from '../links/card/ManageLinksCard'
import { AccountCard } from './AccountCard'
import { LinksManager } from './LinksManager'

export const ProfileSettings = () => {
   return (
      <Box className={styles.pagebox}>
         <Box className={styles.text}>
            <MainHeading text="Profile Settings" />
            <SecondHeading text="Manage your links and style your Web Page" />
         </Box>
         <Box className={styles.backbtn}>
            <MainButton text="Background color" bg="second" hover="hover" />
         </Box>

         <AccountCard />
         <ManageLinksCard ownedLinks={['ciao']} />
      </Box>
   )
}
