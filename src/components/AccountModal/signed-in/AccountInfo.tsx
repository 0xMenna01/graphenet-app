import { Avatar, Flex, Box, Text } from '@chakra-ui/react'
import styles from '../../../styles/NewProfile.module.css'
import Image, { StaticImageData } from 'next/image'
import { CopyIcon } from '@chakra-ui/icons'
import { IconCustomButton } from '../../button/IconCustomButton'

type AccountInfoProps = {
   avatar: StaticImageData
   name?: string
}

export const AccountInfo = ({ avatar, name }: AccountInfoProps) => {
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
               Icon={<CopyIcon />}
               bg="back"
               className={styles.copybtn}
            />
         </Box>
      </Flex>
   )
}
