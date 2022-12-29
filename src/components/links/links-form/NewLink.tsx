import { Flex, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import Image from 'next/image'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { AddLink, LinksContext } from '../../contexts'
import { getNewLinks, removeIfExists } from '../../utils'
import { BaseLink } from '../BaseLink'

export type NewLinkProps = {
    link: BaseLink
    isSupported?: boolean
    className?: string
    setCurStep?: (step: number) => void
    setNewCount?: (count: number) => void
    count?: number
}

export const NewLink = ({
    link,
    isSupported,
    className,
    setCurStep,
    setNewCount,
    count,
}: NewLinkProps) => {
    const [newLink, setNewLink] = useState<AddLink | null>(null)
    const linkName = link.name

    const { currentLinks, addLinks } = useContext(LinksContext)

    useEffect(() => {
        if (currentLinks != undefined && addLinks != undefined) {
            if (newLink != null) {
                addLinks(getNewLinks(newLink, currentLinks, count, setNewCount))
            } else {
                addLinks(
                    removeIfExists(linkName, currentLinks, count, setNewCount)
                )
            }
        }
    }, [newLink])

    const createLink = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value == '') {
            setNewLink(null)
        } else {
            setNewLink({ name: link.name, url: link.link + event.target.value })
        }
    }

    return (
        <Flex gap="15px" className={className}>
            <Image priority src={link.icon.main} alt={link.alt} />
            <InputGroup>
                {isSupported && (
                    <InputLeftAddon
                        color="main"
                        backgroundColor="back"
                        padding="25px"
                        borderColor={'back'}
                    >
                        {link.link}
                    </InputLeftAddon>
                )}

                <Input
                    placeholder={isSupported ? '' : link.name}
                    padding="25px"
                    background="second"
                    borderColor={'second'}
                    focusBorderColor={'main'}
                    _hover={{ borderColor: 'main' }}
                    onChange={(event) => createLink(event)}
                />
            </InputGroup>
        </Flex>
    )
}
