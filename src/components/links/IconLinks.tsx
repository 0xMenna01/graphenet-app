import { Avatar, border, Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import { ComponentStyle, Link } from '../../model'
import styles from '../../styles/Home.module.css'
import { srcLink } from '../utils'

type IconLinksProps = {
   links: Link[]
   compStyle: ComponentStyle
}

export const IconLinks = ({ links, compStyle }: IconLinksProps) => {
   return (
      <Flex
         className={styles.iconlinks}
         _hover={{
            borderColor: 'main',
            transform: 'scale(1.03)',
            cursor: 'pointer',
         }}
      >
         {links.map((value, index) => {
            const link = srcLink(value.name)
            return (
               <Box
                  key={link.name}
                  className={styles.iconbox}
                  bg={compStyle.background}
               >
                  <Image
                     src={
                        compStyle.color === 'white'
                           ? link.icon.white
                           : link.icon.black
                     }
                     alt={link.alt}
                  />
               </Box>
            )
         })}
      </Flex>
   )
}
