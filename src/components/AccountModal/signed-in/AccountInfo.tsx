import { Avatar, Flex, Box, Text, Grid, GridItem } from '@chakra-ui/react'
import styles from '../../../styles/NewProfile.module.css'
import Image, { StaticImageData } from 'next/image'
import { CheckIcon, CopyIcon } from '@chakra-ui/icons'
import { IconCustomButton } from '../../button/IconCustomButton'
import { useState } from 'react'

type AccountInfoProps = {
   avatar: StaticImageData
   name?: string
}

export const AccountInfo = ({ avatar, name }: AccountInfoProps) => {
   const [isCopied, setIsCopied] = useState(false)

   const uncheck = () => {
      setIsCopied(false)
   }

   return (
      <Flex className={styles.accountinfo}>
         <Avatar size="lg">
            <Image src={avatar} alt="avatar" />
         </Avatar>

         <Box className={styles.addressaccount} background="second">
            <Text color="white" opacity="0.8" fontWeight="800">
               {name}
            </Text>
            <IconCustomButton
               text={isCopied ? 'Address copied!' : 'Copy address'}
               bg="back"
               onClick={() => {
                  setIsCopied(true)
                  setTimeout(uncheck, 2500)
               }}
            >
               {isCopied ? <CheckIcon /> : <CopyIcon />}
            </IconCustomButton>
         </Box>
      </Flex>
   )
}
