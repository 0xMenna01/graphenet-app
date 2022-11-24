import Image from 'next/image'
import LogoImage from '../../../public/logo.png'
import type { NextPage } from 'next'
import styleslogo from '../../styles/App.module.css'
import { useAccount } from '../../contexts'
import { PageCustmoization } from './PageCustomization'

const HomePage: NextPage = () => {
   const { isConnected, account, setAccount } = useAccount()

   return (
      <>
         <PageCustmoization />
      </>
   )
}

export default HomePage
