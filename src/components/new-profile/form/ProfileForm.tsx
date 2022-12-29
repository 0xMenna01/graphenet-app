import {
    Stack,
    Flex,
    Box,
    Link,
    useToast,
    useDisclosure,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { ProfileAvatar } from '../avatar/ProfileAvatar'
import { MainHeading, SecondHeading } from '../../heading/Headings'
import { InputProfile } from '../../input/InputProfile'
import { avatarResponsive, avatarUpload } from './responsive'
import styles from '../../../styles/NewProfile.module.css'
import { MainButton } from '../../button/MainButton'
import { useTransaction } from '../../contexts'
import { createProfile } from '../../../guicontroller/'
import { TransactionModal } from '../../transaction-modal/TransactionModal'
import { TRANSACTION } from '../../../model/TransactionModel'
import { useRouter } from 'next/router'
import { AccountModal } from '../../account/AccountModal'

export const ProfileForm = () => {
    const router = useRouter()

    const [profileName, setProfileName] = useState('')
    const [bio, setBio] = useState<string | null>(null)
    const [avatar, setAvatarImage] = useState<File | null>(null)
    const [check, setCheck] = useState(false)

    //Transaction Modal

    const { transactionStatus, send, setTx } = useTransaction()

    useEffect(() => {
        if (transactionStatus === TRANSACTION.FINALIZED) {
            router.push('/')
        }
    }, [transactionStatus])

    const isAllowed = () => {
        return profileName != ''
    }

    const getTooltip = () => {
        if (profileName == '') {
            return 'Enter your profile name'
        } else {
            return ''
        }
    }

    const handleCreateProfile = async () => {
        send(true)
        const tx = await createProfile(profileName, bio, avatar)
        setTx(tx)
    }

    return (
        <Flex className={styles.container}>
            <Flex
                width={['auto', 'auto', '680px']}
                className={styles.form}
                bg="card"
            >
                <Box className={styles.title}>
                    <MainHeading text="Create your Profile" />
                    <SecondHeading text="Choose your profile name and customize your landing page." />
                    <AccountModal />
                </Box>

                <Flex
                    className={styles.avatarbox}
                    flexDir={avatarResponsive.direction as any}
                >
                    <Flex
                        className={styles.upload}
                        alignSelf={avatarUpload.alignSelf}
                    >
                        <ProfileAvatar
                            src={avatar}
                            setAvatar={setAvatarImage}
                        />
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

                <TransactionModal>
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

                <Link
                    className={styles.link}
                    textDecor="underline"
                    color="main"
                    onClick={() => {
                        router.push('/')
                    }}
                >
                    Already have a profile?
                </Link>
            </Flex>
        </Flex>
    )
}
