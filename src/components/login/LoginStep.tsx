import { useState } from 'react'
import { useAccount } from '../../contexts'
import { WalletAccount } from '../../wallets/types'
import WalletList, {
   CURRENT_WALLET,
} from '../../wallets/wallet-list/WalletsList'
import { Accounts } from '../account/Accouts'
import { MainButton } from '../button/MainButton'

type StepProps = {
   step: number
   setStep: (value: number) => void
}

export const LoginStep = ({ step, setStep }: StepProps) => {
   const [currentWallet, setCurrentWallet] = useState(CURRENT_WALLET)
   const [accounts, setAccounts] = useState<WalletAccount[]>(
      {} as WalletAccount[]
   )

   const { isConnected, isNftOwner, account, setAccount } = useAccount()

   switch (step) {
      case 2: {
         // Wallet
         return (
            <WalletList
               setAccounts={setAccounts}
               setCurrentWallet={setCurrentWallet}
               setStep={setStep}
            />
         )
      }
      case 3: {
         // Account
         return <Accounts walletAccounts={accounts} setAccount={setAccount} />
      }
      case 4: {
         //Energy or Tokens
         return <></>
      }

      case 5: {
         // Spinner check nft and profile Subsocial
         return <></>
      }

      case 6: {
         // Profile
         return <></>
      }

      default: {
         return (
            <MainButton
               text="Connect"
               padding="15px"
               bg="second"
               hover="hover"
               w="100%"
               onClick={() => setStep(2)}
            />
         )
      }
   }
}
