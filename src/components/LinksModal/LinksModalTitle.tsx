import { Flex, Text } from '@chakra-ui/react'
import styles from '../../styles/NewProfile.module.css'

export const LinksModalTitle = () => {
   return (
      <Flex flexDir="column">
         <Text className={styles.linkstitle}>Add your links</Text>
         <Text className={styles.subtitlelinks}>
            Enter the links in your interest
         </Text>
      </Flex>
   )
}
