import { Flex, Image, Text } from '@chakra-ui/react'
import styles from '../../../styles/NewProfile.module.css'
import { NewLink } from './NewLink'
import { supportedLinks } from './supportedLinks'

export const NewLinksForm = () => {
   return (
      <Flex className={styles.linksform}>
         <Text className={styles.supportedlinks}>Popular links</Text>
         {supportedLinks.map((item, index) => (
            <NewLink key={index} isSupported={true} link={item} />
         ))}
      </Flex>
   )
}
