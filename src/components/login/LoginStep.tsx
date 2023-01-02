import { Box, Progress, space, Spinner } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useAccount } from '../contexts'
import { useSpaces } from '../contexts/SpacesContext'
import { WalletAccount } from '../../model/wallet'
import { MainButton } from '../button/MainButton'
import { ListItems } from '../selection-list/ListItems'
import WalletList from '../wallets/wallet-list/WalletsList'
import { getSpaces } from '../../guicontroller'
import { SpaceAccount } from '../../model/SpaceAccount'

type StepProps = {
    step: number
    setStep: (value: number) => void
}

export const LoginStep = ({ step, setStep }: StepProps) => {
    const [accounts, setAccounts] = useState<WalletAccount[]>(
        {} as WalletAccount[]
    )
    const { isConnected, account, setAccount } = useAccount()
    const { spaces, setSpaces } = useSpaces()
    const [id, setId] = useState(false)
    const [profile, setProfile] = useState()

    const fetchSpaces = async () => {
        const spaces = await getSpaces(account.address)
        setSpaces(spaces)
        setStep(6)
    }

    useEffect(() => {
        if (isConnected) {
            fetchSpaces()
        }
    }, [isConnected])

    switch (step) {
        case 2: {
            // Wallet
            return <WalletList setAccounts={setAccounts} setStep={setStep} />
        }
        case 3: {
            // Account
            return <ListItems list={accounts} setElement={setAccount} />
        }
        case 4: {
            // Progress while checking Subsocial Spaces
            return (
                <Progress
                    borderRadius="15px"
                    background="second"
                    size="xs"
                    isIndeterminate
                    colorScheme="purple"
                />
            )
        }
        case 5: {
            //Energy or Tokens
            return <></>
        }

        case 6: {
            // Profile
            return <ListItems list={spaces} setElement={setProfile} />
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
