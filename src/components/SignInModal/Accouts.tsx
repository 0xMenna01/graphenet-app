import styles from '../../styles/NewProfile.module.css'
import AccountIcon from '../../../public/account.png'
import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { WalletAccount } from '../../wallets/types'

type AccountsProps = {
   walletAccounts: WalletAccount[]
   setAccount: (account: WalletAccount) => void
}

export const Accounts = ({ walletAccounts, setAccount }: AccountsProps) => {
   const accounts = walletAccounts.map((account) => {
      return (
         <Box
            key={account.address}
            className={styles.wallet}
            _hover={{ cursor: 'pointer', bgColor: 'second' }}
            onClick={() => setAccount(account)}
         >
            <Box className={styles.walleticon}>
               <Image
                  src={AccountIcon}
                  alt={account.name + ' Account'}
                  className={styles.walleticon}
               />
            </Box>

            <Text fontWeight="900" fontSize="18px">
               {account.name}
            </Text>
         </Box>
      )
   })

   return <>{accounts}</>
}
