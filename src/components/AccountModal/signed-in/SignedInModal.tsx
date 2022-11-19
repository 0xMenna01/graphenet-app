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
   ModalFooter,
   useClipboard,
   Divider,
} from '@chakra-ui/react'
import Image from 'next/image'
import styles from '../../../styles/NewProfile.module.css'
import AccountIcon from '../../../../public/account.png'
import { WalletAccount } from '../../../wallets/types'
import { MainButton } from '../../button/MainButton'
import { useState } from 'react'
import { AccountInfo } from './AccountInfo'

type SignedAccount = {
   name?: string
   setAccount: (account: WalletAccount) => void
   close: () => void
   setStep: (step: number) => void
}

export const SignedInModal = ({
   name,
   setAccount,
   close,
   setStep,
}: SignedAccount) => {
   const { isOpen, onOpen, onClose } = useDisclosure()
   const { onCopy, value, setValue, hasCopied } = useClipboard('')
   const [isChange, setIsChange] = useState(false)

   return (
      <>
         <Flex
            className={styles.accountbtn}
            borderColor="second"
            _hover={{
               cursor: 'pointer',
               borderColor: 'main',
               transform: 'scale(1.05)',
            }}
            background="back"
            onClick={onOpen}
         >
            <Box className={styles.walleticon}>
               <Image
                  src={AccountIcon}
                  alt={name + ' Account'}
                  className={styles.walleticon}
               />
            </Box>
            <Text fontSize="16px" opacity="0.6" fontWeight="600">
               {name}
            </Text>
         </Flex>

         <Modal onClose={onClose} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
               <ModalBody>
                  <AccountInfo name={name} avatar={AccountIcon} />
               </ModalBody>
               <ModalCloseButton opacity="0.5" />

               <ModalFooter display="flex" gap="12px" flexDirection="column">
                  <Divider margin="10px" />
                  <MainButton
                     w="100%"
                     text="Change Account"
                     bg="second"
                     hover="hover"
                  />
                  <MainButton
                     w="100%"
                     text="Disconnect"
                     bg="second"
                     hover="hover"
                     onClick={() => {
                        close()
                        setAccount({} as WalletAccount)
                        setStep(1)
                     }}
                  />
               </ModalFooter>
            </ModalContent>
         </Modal>
      </>
   )
}
