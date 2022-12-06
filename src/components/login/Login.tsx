import { Heading, Flex, Box, useDisclosure } from '@chakra-ui/react'
import { NextPage } from 'next'
import styles from '../../styles/Login.module.css'
import { MainCard } from '../card/MainCard'
import { WalletAccount } from '../../wallets/types'
import WalletList from '../../wallets/wallet-list/WalletsList'
import { CURRENT_WALLET } from '../../wallets/wallet-list/WalletsList'
import { Accounts } from '../account/Accouts'
import { useEffect, useState } from 'react'
import { useAccount } from '../../contexts'
import { MainButton } from '../button/MainButton'
import { useRouter } from 'next/router'
import { LoginStep } from './LoginStep'

const Login: NextPage = () => {
   const { account, setAccount, isConnected, isNftOwner } = useAccount()
   const [step, setStep] = useState(1)

   const router = useRouter()

   useEffect(() => {
      if (isConnected) {
         if (isNftOwner) {
            setStep(6)
         } else {
            setStep(5)
         }
      }
   }, [isNftOwner, isConnected])

   const firstHeading = () => {
      switch (step) {
         case 2: {
            // Wallet
            return 'Select one of the wallet providers'
         }
         case 3: {
            // Account
            return 'Select your wallet account'
         }
         case 4: {
            //Energy or Tokens
            return ''
         }
         case 5: {
            // Spinner check nft and profile Subsocial
            return ''
         }

         case 6: {
            // Profile
            return 'Select your Subsocial Profile'
         }

         default: {
            return 'Login'
         }
      }
   }

   const secondHeading = () => {
      switch (step) {
         case 2: {
            // Wallet
            return 'Check here how to set up a wallet'
         }
         case 3: {
            // Account
            return 'Choose one of your accounts'
         }
         case 4: {
            //Energy or Tokens
            return ''
         }

         case 5: {
            // Spinner check nft and profile Subsocial
            return ''
         }

         case 6: {
            // Profile
            return 'Choose your profile or create a new one'
         }

         default: {
            return 'Why do you need a wallet to login ? Read here'
         }
      }
   }

   const Footer = () => {
      return (
         <MainButton
            text="Back"
            bg="linear"
            padding="10px"
            onClick={() => setStep(step - 1)}
         />
      )
   }

   return (
      <Flex className={styles.page}>
         <Box className={styles.box} bg="linear">
            <Heading size="lg" fontWeight="800">
               Connect your Wallet to Login
            </Heading>
            <Heading size="md" fontWeight="700" opacity="0.9">
               To have access to Graphenet be sure to own a{' '}
               <a href=".">Ninja NFT</a>
            </Heading>
         </Box>

         <MainCard
            firstHeading={firstHeading()}
            secondHeading={secondHeading()}
            hasFooter={step > 2}
            footer={<Footer />}
         >
            <LoginStep step={step} setStep={setStep} />
         </MainCard>
      </Flex>
   )
}

export default Login
