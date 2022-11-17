import {
   Stack,
   Flex,
   Box,
   Link,
   useToast,
   useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react'
import { WalletAccount } from '../../wallets/types'
import { ProfileAvatar } from '../avatar/ProfileAvatar'
import { MainHeading, SecondHeading } from '../heading/Headings'
import { InputProfile } from '../input/InputProfile'
import { AccountModal } from '../AccountModal/AccountModal'
import { connectBtn, avatarResponsive, avatarUpload } from './responsive'
import styles from '../../styles/NewProfile.module.css'
import { MainButton } from '../button/MainButton'
import { useApi } from '../../contexts'
import { createProfile } from '../../guicontroller/createProfile'
import { Connection } from '../connection/Connection'
import { TransactionModal } from '../transaction-modal/TransactionModal'
import { TRANSACTION } from '../../model/transaction'

export const ProfileForm = () => {
   const [account, setAccount] = useState<WalletAccount>({} as WalletAccount)

   const [profileName, setProfileName] = useState('')
   const [bio, setBio] = useState<string | null>(null)
   const [avatar, setAvatarImage] = useState<File | null>(null)
   const [check, setCheck] = useState(false)

   //Transaction Modal
   const { isOpen, onOpen, onClose } = useDisclosure()
   const [transactionStatus, setStatus] = useState(TRANSACTION.INIT)
   const toast = useToast()

   const { isApiReady, api, substrateApi } = useApi()

   const isConnected = account != undefined && JSON.stringify(account) != '{}'

   const isAllowed = () => {
      return isConnected && profileName != ''
   }

   const getTooltip = () => {
      if (!isApiReady) {
         return 'Wait Connection to Subsocial'
      }
      if (!isAllowed()) {
         if (!isConnected) {
            return 'Connect your Wallet'
         } else {
            return 'Enter your Profile Name'
         }
      } else {
         return ''
      }
   }

   const handleCreateProfile = async () => {
      onOpen()
      if (
         (await createProfile(
            api,
            substrateApi,
            profileName,
            account,
            setStatus,
            bio,
            avatar
         )) == -1
      ) {
         setStatus(TRANSACTION.CANCELLED)
      }
   }

   return (
      <Flex className={styles.container}>
         <Connection isOpen={!isApiReady} />
         <Box alignSelf="end" display={connectBtn.display}>
            <AccountModal
               setAccount={setAccount}
               connected={isConnected}
               accountName={account.name}
            />
         </Box>

         <Flex
            width={['auto', 'auto', '680px']}
            className={styles.form}
            bg="card"
         >
            <Box className={styles.title}>
               <MainHeading text="Create your Profile" />
               <SecondHeading text="Choose your profile name and customize your landing page." />
            </Box>

            <Flex
               className={styles.avatarbox}
               flexDir={avatarResponsive.direction as any}
            >
               <Flex
                  className={styles.upload}
                  alignSelf={avatarUpload.alignSelf}
               >
                  <ProfileAvatar src={avatar} setAvatar={setAvatarImage} />
               </Flex>
               <Stack width="100%" spacing={6}>
                  <InputProfile
                     check={check}
                     input={profileName}
                     setInput={setProfileName}
                     content="Name"
                  />

                  <InputProfile
                     check={check}
                     input={bio as string}
                     setInput={setBio}
                     content="Bio"
                  />
               </Stack>
            </Flex>

            <TransactionModal
               setBaseStatus={setStatus}
               status={transactionStatus}
               isTransaction={isOpen}
               closeTransaction={onClose}
            >
               <MainButton
                  isDisabled={getTooltip() != ''}
                  textTooltip={getTooltip()}
                  place="top"
                  className={styles.create}
                  bg="linear"
                  text="Create your Profile"
                  onClick={handleCreateProfile}
               />
            </TransactionModal>

            <Link className={styles.link} textDecor="underline" color="main">
               Already have a profile?
            </Link>
         </Flex>
      </Flex>
   )
}
