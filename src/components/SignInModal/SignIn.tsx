import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalBody,
   useDisclosure,
   Text,
   ModalCloseButton,
   Box,
} from '@chakra-ui/react'
import styles from '../../styles/NewProfile.module.css'
import { useEffect, useState } from 'react'
import { MainButton } from '../button/MainButton'
import { WalletAccount } from '../../wallets/types'
import type { Signer as InjectedSigner } from '@polkadot/api/types'
import WalletList, {
   CURRENT_WALLET,
} from '../../wallets/wallet-list/WalletsList'

type SignInProps = {
   setAccount: (account: WalletAccount) => void
}

export const SignIn = ({ setAccount }: SignInProps) => {
   const { isOpen, onOpen, onClose } = useDisclosure()
   const [accounts, setAccounts] = useState<WalletAccount[]>(
      {} as WalletAccount[]
   )
   const [currentWallet, setCurrentWallet] = useState(CURRENT_WALLET)

   useEffect(() => {
      setAccount(accounts[0])
   }, [accounts])

   return (
      <>
         <MainButton onClick={onOpen} bg="linear" text="Connect Wallet" />

         <Modal onClose={onClose} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
               <ModalHeader>
                  <Text className={styles.modaltitle}>Select your wallet</Text>
                  <Text fontSize="16" fontWeight="800" opacity="0.5">
                     Choose one of the available wallet providers.
                  </Text>
               </ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                  <WalletList
                     setAccounts={setAccounts}
                     setCurrentWallet={setCurrentWallet}
                  />
               </ModalBody>
            </ModalContent>
         </Modal>
      </>
   )
}
