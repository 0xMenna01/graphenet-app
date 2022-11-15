import { supportedWallets } from '../../wallets/supportedWallets'
import { useEffect, useState } from 'react'
import styles from '../../styles/NewProfile.module.css'
import { Wallet, WalletAccount } from '../../wallets/types'
import { config } from '../../config'
import { Box, useToast, Image, Text } from '@chakra-ui/react'
import { DownloadIcon } from '@chakra-ui/icons'
import { Toast } from '../../components/toast/Toasts'

export const CURRENT_WALLET = 'CurrentWalletName'

const { appName } = config

type GetWalletPorps = {
   setAccounts: (accounts: WalletAccount[]) => void
   setCurrentWallet: (walletName: string) => void
   setStep: (step: number) => void
}

const WalletList = ({
   setAccounts,
   setCurrentWallet,
   setStep,
}: GetWalletPorps) => {
   const toast = useToast()
   const [unsubscribe, setUnsubscribe] = useState<() => unknown>()

   useEffect(() => {
      return () => {
         if (unsubscribe) {
            unsubscribe?.()
         }
      }
   })

   const onClick = async (wallet: Wallet) => {
      if (wallet.installed) {
         const ret = await wallet.enable(appName)
         if (ret) {
            toast({
               position: 'bottom-left',
               render: () => <Toast title={`${ret}`.replace('Error:', '')} />,
               duration: 4000,
            })
         }
         if (wallet.enabled) {
            const unsub: any = await wallet.subscribeAccounts(
               async (accounts) => {
                  if (accounts) {
                     setAccounts(accounts)
                     setCurrentWallet(wallet.extensionName)
                     setStep(2)
                  }
               }
            )

            setUnsubscribe(unsub)
         }
      } else {
         toast({
            position: 'bottom-left',
            render: () => (
               <Toast
                  title={`${wallet.title} extension is not installed or refresh the browser if ${wallet.title} is already installed`}
               />
            ),
            duration: 4000,
         })
      }
   }

   const wallets = supportedWallets.map((wallet) => {
      const { title, logo, installed, installUrl } = wallet

      return (
         <Box
            background="second"
            margin="7px"
            padding="30px"
            key={title}
            className={styles.wallet}
            _hover={{ cursor: 'pointer', bgColor: 'hover' }}
            onClick={() => {
               if (!installed) {
                  window.open(installUrl, '_blank')
               } else {
                  return onClick(wallet)
               }
            }}
         >
            <Box className={styles.walleticon}>
               <Image
                  src={logo.src}
                  alt={logo.alt}
                  className={styles.walleticon}
               />
            </Box>

            <Text fontWeight="900" fontSize="18px">
               {title}
            </Text>
            {!installed && <DownloadIcon marginLeft="auto" />}
         </Box>
      )
   })

   return <>{wallets}</>
}

export default WalletList
