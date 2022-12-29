import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Divider,
    Heading,
    Stack,
    StackDivider,
    Text,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { AddLink, LinksContext } from '../../contexts'
import { Link } from '../../../model'
import styles from '../../../styles/ManageLinks.module.css'
import { shadow } from '../../../stylesheets/theme'
import { AccountModal } from '../../account/AccountModal'
import { AddLinks } from '../AddLinks'

type ManageLinksCardProps = {
    ownedLinks?: string[]
}

export const ManageLinksCard = ({ ownedLinks }: ManageLinksCardProps) => {
    const [links, setLinks] = useState<AddLink[]>([])

    return (
        <LinksContext.Provider
            value={{ currentLinks: links, addLinks: setLinks }}
        >
            <Card
                color="white"
                padding="10px"
                bg="card"
                boxShadow={shadow}
                width="max"
                borderRadius="15px"
            >
                <CardHeader>
                    <Heading size="lg" fontWeight="700" opacity="0.7">
                        Manage your Links
                    </Heading>
                </CardHeader>

                <CardBody>
                    <AddLinks />
                </CardBody>
            </Card>
        </LinksContext.Provider>
    )
}
