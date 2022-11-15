import {
   Modal,
   ModalOverlay,
   ModalContent,
   Flex,
   ModalBody,
   ModalCloseButton,
   useDisclosure,
   Box,
   Text,
} from '@chakra-ui/react'
import Image from 'next/image'
import styles from '../../styles/NewProfile.module.css'
import AccountIcon from '../../../public/account.png'
import { MainButton } from '../button/MainButton'

type SignedAccount = {
   name: string | undefined
}

export const SignedInModal = ({ name }: SignedAccount) => {
   const { isOpen, onOpen, onClose } = useDisclosure()
   return (
      <>
         <Flex
            padding="5px"
            paddingLeft="12px"
            paddingRight="12px"
            gap="10px"
            justifyContent="space-around"
            borderWidth="1px"
            borderColor="hover"
            alignItems="center"
            _hover={{ cursor: 'pointer' }}
            background="second"
            borderRadius="15px"
            onClick={onOpen}
         >
            <Box className={styles.walleticon}>
               <Image
                  src={AccountIcon}
                  alt={name + ' Account'}
                  className={styles.walleticon}
               />
            </Box>
            <Text fontSize="16px" opacity="0.5" fontWeight="500">
               {name}
            </Text>
         </Flex>

         <Modal onClose={onClose} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent padding="20px">
               <ModalBody></ModalBody>
               <ModalCloseButton opacity="0.5" />
            </ModalContent>
         </Modal>
      </>
   )
}
