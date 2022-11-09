import { Stack, Flex, Box, Text, Link } from '@chakra-ui/react'
import { useState } from 'react'
import { WalletAccount } from '../../wallets/types'
import { ProfileAvatar } from '../avatar/ProfileAvatar'
import { MainHeading, SecondHeading } from '../heading/Headings'
import { InputProfile } from '../input/InputProfile'
import { SignIn } from '../SignInModal/SignIn'
import { connectBtn, avatarResponsive, avatarUpload } from './responsive'
import styles from '../../styles/NewProfile.module.css'
import { LinksModal } from '../LinksModal/LinksModal'

export const ProfileForm = () => {
   const [account, setAccount] = useState<WalletAccount>({} as WalletAccount)

   const [profileName, setProfileName] = useState('')
   const [bio, setBio] = useState<string | null>(null)
   const [avatar, setAvatarImage] = useState<File | null>(null)
   const [check, setInputCheck] = useState(false)

   const isConnected = account != undefined && JSON.stringify(account) != '{}'

   return (
      <Flex className={styles.container}>
         <Box alignSelf="end" display={connectBtn.display}>
            {!isConnected ? <SignIn setAccount={setAccount} /> : <>dummy</>}
         </Box>

         <Flex
            width={['auto', 'auto', '680px']}
            className={styles.form}
            bg="card"
         >
            <Box className={styles.title}>
               <MainHeading text="Create your Profile" />
               <SecondHeading text="Choose your profile name and  add your personal links" />
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

                  <Box className={styles.text}>
                     <Text>Upload your Avatar</Text>
                  </Box>
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
            <LinksModal
               connected={isConnected}
               profile={profileName}
               account={account}
               bio={bio}
               avatar={avatar}
            />

            <Link className={styles.link} textDecor="underline" color="main">
               Already have a profile?
            </Link>
         </Flex>
      </Flex>
   )
}
