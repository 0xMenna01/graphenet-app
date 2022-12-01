import { Flex, Text } from '@chakra-ui/react'
import styles from '../../styles/MangeLinks.module.css'

type NavbarProps = {
   elems: string[]
   position: number
}

export const Navbar = ({ elems, position }: NavbarProps) => {
   return (
      <Flex className={styles.navbar} backgroundColor="second">
         {elems.map((value, index) => (
            <Text
               className={styles.textnav}
               opacity={position == index ? '1' : '0.6'}
               _hover={{ opacity: 1 }}
            >
               {value}
            </Text>
         ))}
      </Flex>
   )
}
