import { Box, Flex, useMediaQuery } from '@chakra-ui/react'
import Image from 'next/image'
import LogoImage from '../../../public/logo.png'
import BackgroundImage from '../../../public/mobile.png'
import type { NextPage } from 'next'
import styles from '../../styles/NewProfile.module.css'
import styleslogo from '../../styles/App.module.css'
import { ProfileForm } from '../form/ProfileForm'
import { ImageResponsive } from '../../responsive/responsive'

const NewProfile: NextPage = () => {
   const showImage: ImageResponsive = {
      display: ['none', 'none', 'flex'],
   }

   return (
      <Flex className={styles.box}>
         <Image
            priority
            src={LogoImage}
            alt="Graphenet Logo"
            className={styleslogo.logo}
         />
         <ProfileForm />

         <Box display={showImage.display} width="900px">
            <Image priority src={BackgroundImage} alt="Background Image" />
         </Box>
      </Flex>
   )
}

export default NewProfile
