import Image from 'next/image'
import LogoImage from '../../../public/logo.png'
import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'
import { useAccount } from '../../contexts'
import { ProfileSettings } from './ProfileSettings'
import { ManageLinksCard } from '../links/card/ManageLinksCard'
import { Flex } from '@chakra-ui/react'
import { Navbar } from '../navbar/Navbar'

const HomePage: NextPage = () => {
   const { isConnected, account, setAccount } = useAccount()

   const navBarElems = ['Manage Links', 'Styles', 'Domains']

   return (
      <Flex className={styles.page}>
         <ManageLinksCard />
      </Flex>
   )
}

export default HomePage
