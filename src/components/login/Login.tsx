import { Heading, Flex, Box } from '@chakra-ui/react'
import { NextPage } from 'next'
import styles from '../../styles/Login.module.css'
import { MainCard } from '../card/MainCard'
import { useEffect, useState } from 'react'
import { useAccount } from '../contexts'
import { useRouter } from 'next/router'
import { LoginStep } from './LoginStep'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useSpaces } from '../contexts/SpacesContext'
import { WalletAccount } from '../../model/wallet'
import CID from 'cids'

const Login: NextPage = () => {
    const { account, setAccount, isConnected } = useAccount()
    const [step, setStep] = useState(1)
    const { setSpaces } = useSpaces()

    const router = useRouter()

    useEffect(() => {
        if (isConnected) {
            setStep(4)
        }
    }, [isConnected])

    const handleBackClick = () => {
        switch (step) {
            case 3: {
                setAccount({} as WalletAccount)
            }
            case 5: {
                setStep(step - 2)
                setSpaces([])
            }

            default: {
                setStep(step - 1)
            }
        }
    }

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
                // Spinner check profile Subsocial
                return ''
            }
            case 5: {
                //Energy or Tokens
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
                // Spinner check profile Subsocial
                return ''
            }
            case 5: {
                //Energy or Tokens
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
            <ArrowBackIcon
                boxSize={8}
                color="hover"
                _hover={{
                    cursor: 'pointer',
                    color: 'main',
                    transform: 'scale(1.3)',
                }}
                onClick={handleBackClick}
            />
        )
    }

    return (
        <Flex className={styles.page}>
            <Box className={styles.box} bg="linear">
                <Heading size="lg" fontWeight="700">
                    Connect your Wallet to Login
                </Heading>
            </Box>

            <MainCard
                firstHeading={firstHeading()}
                secondHeading={secondHeading()}
                hasFooter={step > 2 && step != 4}
                footer={<Footer />}
            >
                <LoginStep step={step} setStep={setStep} />
            </MainCard>
        </Flex>
    )
}

export default Login
