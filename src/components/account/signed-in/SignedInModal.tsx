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
import { MainButton } from '../../button/MainButton'
import { AccountInfo } from './AccountInfo'
import { WalletAccount } from '../../../model/wallet'

type SignedAccount = {
   account: WalletAccount
   accounts: WalletAccount[]
   setAccount: (account: WalletAccount) => void
   close: () => void
   setStep: (step: number) => void
}

export const SignedInModal = ({
   account,
   accounts,
   setAccount,
   close,
   setStep,
}: SignedAccount) => {
   const { isOpen, onOpen, onClose } = useDisclosure()
   const { onCopy, value, setValue, hasCopied } = useClipboard('')

   return (
      <>
         <Flex
            className={styles.accountbtn}
            borderColor="second"
            _hover={{
               cursor: 'pointer',
               borderColor: 'main',
               transform: 'scale(1.06)',
            }}
            background="none"
            onClick={onOpen}
         >
            <Box className={styles.walleticon}>
               <Image
                  src={AccountIcon}
                  alt={account.name + ' Account'}
                  className={styles.walleticon}
               />
            </Box>
            <Text fontSize="16px" opacity="0.9" fontWeight="600">
               {account.name}
            </Text>
         </Flex>

         <Modal onClose={onClose} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
               <ModalBody>
                  <AccountInfo
                     address={account.address}
                     name={account.name}
                     avatar={AccountIcon}
                  />
               </ModalBody>
               <ModalCloseButton opacity="0.5" />

               <ModalFooter display="flex" gap="12px" flexDirection="column">
                  <Divider margin="10px" />

                  <MainButton
                     w="100%"
                     text="Change Account"
                     bg="second"
                     hover="hover"
                     onClick={() => {
                        setAccount({} as WalletAccount)
                        setStep(2)
                     }}
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
