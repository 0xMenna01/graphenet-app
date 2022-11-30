import Image from 'next/image'
import LogoImage from '../../../public/logo.png'
import type { NextPage } from 'next'
import styleslogo from '../../styles/App.module.css'
import { useAccount } from '../../contexts'
import { ProfileSettings } from './ProfileSettings'
import { LinksModal } from '../LinksModal/LinksModal'

const HomePage: NextPage = () => {
   const { isConnected, account, setAccount } = useAccount()

   return (
      <>
         <ProfileSettings />
      </>
   )
}

export default HomePage
