import { Box, Fade } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import styles from '../../styles/App.module.css'
import { Toast } from '../toast/Toasts'

type ConnectionProps = {
   isOpen: boolean
}

export const Connection = ({ isOpen }: ConnectionProps) => {
   const router = useRouter()

   return (
      <>
         <Fade in={isOpen && router.pathname != '/404'} style={{ zIndex: 10 }}>
            <Box className={styles.connectionbox}>
               <Toast title="Connecting to Subsocial..." />
            </Box>
         </Fade>
      </>
   )
}
