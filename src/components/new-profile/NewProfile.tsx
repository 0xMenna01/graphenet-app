import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import BackgroundImage from '../../../public/mobile.png'
import type { NextPage } from 'next'
import styles from '../../styles/NewProfile.module.css'
import { ProfileForm } from './form/ProfileForm'
import { ImageResponsive } from '../../responsive/responsive'

const NewProfile: NextPage = () => {
   const showImage: ImageResponsive = {
      display: ['none', 'none', 'flex'],
   }

   return (
      <Flex className={styles.box}>
         <ProfileForm />

         <Box display={showImage.display} className={styles.background}>
            <Image
               priority
               src={BackgroundImage}
               className={styles.image}
               alt="Background Image"
            />
         </Box>
      </Flex>
   )
}

export default NewProfile
