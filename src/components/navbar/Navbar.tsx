import { Flex, Text } from '@chakra-ui/react'
import styles from '../../styles/Home.module.css'
import { shadow } from '../../stylesheets/theme'

type NavbarProps = {
   elems: string[]
   position: number
}

export const Navbar = ({ elems, position }: NavbarProps) => {
   return (
      <Flex
         className={styles.navbar}
         backgroundColor="second"
         boxShadow={shadow}
      >
         {elems.map((value, index) => (
            <Text
               key={value}
               className={styles.textnav}
               opacity={position == index ? '1' : '0.6'}
               _hover={{ opacity: 1, cursor: 'pointer' }}
            >
               {value}
            </Text>
         ))}
      </Flex>
   )
}
