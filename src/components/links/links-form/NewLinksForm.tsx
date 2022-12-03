import { Flex, Text, Box } from '@chakra-ui/react'
import styles from '../../../styles/NewProfile.module.css'
import { NewLink } from './NewLink'
import { supportedLinks } from '../supportedLinks'

export const NewLinksForm = () => {
   return (
      <Flex className={styles.linksform}>
         <Text className={styles.supportedlinks}>Popular websites</Text>
         <Box className={styles.linksbox}>
            {supportedLinks.map((item, index) => (
               <Box key={index} marginRight="20px">
                  <NewLink key={item.name} isSupported={true} link={item} />
               </Box>
            ))}
         </Box>
      </Flex>
   )
}
