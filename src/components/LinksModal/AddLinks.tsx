import { AddIcon, ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Flex, IconButton } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import styles from '../../styles/NewProfile.module.css'
import { IconCustomButton } from '../button/IconCustomButton'
import { NewLink } from './links-form/NewLink'
import Image from 'next/image'
import LinksImage from '../../../public/newlink.png'
import { NewLinksForm } from './links-form/NewLinksForm'
import { Website } from './links-form/supportedLinks/Website'
import { LinksContext } from '../../contexts'

type AddLinksProps = {
   isClosedModal: boolean
}

export const AddLinks = () => {
   const [linkCount, setLinkCount] = useState<number>(0)
   const [stepLink, setStep] = useState<number>(1)

   const { currentLinks } = useContext(LinksContext)

   useEffect(() => {
      if (currentLinks?.length === 0) {
         setLinkCount(0)
         setStep(1)
      }
   })

   const hasBackLink = () => {
      return stepLink > 1
   }

   const hasForwardLink = () => {
      return stepLink < linkCount
   }

   useEffect(() => {
      console.log(linkCount)
   }, [linkCount])

   return (
      <Flex>
         <Flex flexDir="column" padding="20px">
            <Box className={styles.linksimage}>
               <Image src={LinksImage} alt="Links Image" />
            </Box>
            <Flex className={styles.steplinks}>
               <IconCustomButton
                  isDisabled={!hasBackLink()}
                  className={styles.arrow}
                  bg="back"
                  aria-label="Move to  a back link"
                  Icon={<ArrowBackIcon />}
               />
               <IconCustomButton
                  isDisabled={!hasForwardLink()}
                  bg="back"
                  className={styles.arrow}
                  aria-label="Move to next link"
                  Icon={<ArrowForwardIcon />}
               />
            </Flex>

            <NewLink
               className={styles.websitelink}
               isSupported={false}
               link={new Website()}
               count={linkCount}
               setNewCount={setLinkCount}
            />

            <IconCustomButton
               bg="back"
               isDisabled={linkCount === 0}
               isHover={true}
               Icon={<AddIcon />}
               className={styles.websitebtn}
            />
         </Flex>

         <NewLinksForm />
      </Flex>
   )
}
