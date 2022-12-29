import { AddIcon, ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Flex, IconButton } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import styles from '../../styles/NewProfile.module.css'
import { IconCustomButton } from '../button/IconCustomButton'
import { NewLink } from './links-form/NewLink'
import Image from 'next/image'
import LinksImage from '../../../public/newlink.png'
import { NewLinksForm } from './links-form/NewLinksForm'
import { Website } from './supportedLinks/Website'
import { LinksContext } from '../contexts'
import { MainButton } from '../button/MainButton'

type AddLinksProps = {
    isClosedModal: boolean
}

export const AddLinks = () => {
    const [linkCount, setLinkCount] = useState<number>(0)
    const [stepLink, setStep] = useState<number>(1)

    const { currentLinks } = useContext(LinksContext)

    useEffect(() => {
        if (currentLinks?.length === 0) {
            setLinkCount(0)
            setStep(1)
        }
    })

    const hasBackLink = () => {
        return stepLink > 1
    }

    const hasForwardLink = () => {
        return stepLink < linkCount
    }

    return (
        <Flex alignItems="center">
            <Flex flexDir="column" marginRight="20px">
                <Box className={styles.linksimage}>
                    <Image priority src={LinksImage} alt="Links Image" />
                </Box>

                <MainButton
                    className={styles.newlink}
                    bg="linear"
                    text="Custom Link"
                />
            </Flex>

            <NewLinksForm />
        </Flex>
    )
}
