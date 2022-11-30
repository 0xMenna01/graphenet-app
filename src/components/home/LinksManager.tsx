import { color, Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useApi } from '../../contexts'
import { ComponentStyle, Link, Profile } from '../../model'
import styles from '../../styles/Home.module.css'
import { IconLinks } from '../links/IconLinks'

type LinksManagerProps = {
   links: Link[]
   cardStyle: ComponentStyle
   linkStyle: ComponentStyle
   iconStyle: ComponentStyle
}

export const LinksManager = ({
   links,
   cardStyle,
   linkStyle,
   iconStyle,
}: LinksManagerProps) => {
   const hasLinks = (profile: Profile) => {
      return false
   }

   return (
      <Flex className={styles.linksbox} background={cardStyle.background}>
         <IconLinks links={links} compStyle={iconStyle} />
      </Flex>
   )
}
