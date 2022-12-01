import { Flex, Avatar, Text } from '@chakra-ui/react'
import styles from '../../styles/Home.module.css'

export const AccountCard = () => {
   return (
      <Flex
         bg="card"
         className={styles.accountinfo}
         _hover={{
            borderColor: 'main',
            borderWidth: '2px',
            transform: 'scale(1.03)',
         }}
      >
         <Avatar marginTop="20px" size="xl" src="/account.png" />
         <Text marginTop="10px" opacity="0.7" fontWeight={600}>
            Main
         </Text>
         <Text fontWeight={600} padding="20px">
            Computer Engeneering. Developer | Polkadot enthusiast
         </Text>
      </Flex>
   )
}
