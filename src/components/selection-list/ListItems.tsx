import styles from '../../styles/App.module.css'
import { Box, Text } from '@chakra-ui/react'
import Image, { StaticImageData } from 'next/image'
import { MouseEventHandler } from 'react'

type ListItems = {
    list: any[]
    setElement?: (elem: any) => void
    onClick?: MouseEventHandler<HTMLDivElement>
}

export const ListItems = ({ list, setElement, onClick }: ListItems) => {
    const items = list.map((elem) => {
        const { name, image } = elem

        if (!name || !image) {
            throw new Error(
                'Items elements must have a propery called name and image'
            )
        }
        return (
            <Box
                background="second"
                margin="7px"
                padding="30px"
                key={elem.name}
                className={styles.list}
                _hover={{
                    cursor: 'pointer',
                    bgColor: 'hover',
                    transform: 'scale(1.02)',
                }}
                onClick={() => {
                    if (onClick && setElement) {
                        throw new Error(
                            'Cannot pass both onClick and set function'
                        )
                    }
                    onClick || setElement!(elem)
                }}
            >
                <Box className={styles.icon}>
                    <Image
                        src={image}
                        alt={name + ' Image'}
                        className={styles.icon}
                    />
                </Box>

                <Text fontWeight="900" fontSize="18px">
                    {name}
                </Text>
            </Box>
        )
    })

    return <>{items}</>
}
