import {
   Text,
   Flex,
   Modal,
   ModalContent,
   ModalOverlay,
   Progress,
   Spinner,
   ModalCloseButton,
} from '@chakra-ui/react'
import ErrorIcon from '../../../public/error.png'
import SuccessIcon from '../../../public/success.png'
import { ReactNode, useEffect, useState } from 'react'

import { TRANSACTION } from '../../model/transaction'
import Image from 'next/image'

type TransactionProps = {
   children: ReactNode
   isTransaction: boolean
   closeTransaction: () => void
   status: TRANSACTION
   setBaseStatus: (status: TRANSACTION) => void
}

export const TransactionModal = ({
   children,
   isTransaction,
   closeTransaction,
   status,
   setBaseStatus,
}: TransactionProps) => {
   const [progressValue, setProgressValue] = useState<number | undefined>(
      undefined
   )
   const [statusMessage, setMessage] = useState('')

   useEffect(() => {
      switch (status) {
         case TRANSACTION.INIT: {
            setMessage('Signing the transaction...')
            break
         }
         case TRANSACTION.SENDING: {
            setMessage('Sending the transaction...')
            break
         }

         case TRANSACTION.FINALIZED: {
            setProgressValue(100)
            setMessage('Success')
            break
         }
         case TRANSACTION.CANCELLED: {
            setMessage('Transaction cancelled')
            setProgressValue(0)
            break
         }
         case TRANSACTION.ERROR: {
            setMessage('Transaction Error: please try again')
            setProgressValue(0)
            break
         }
      }
   }, [status])

   return (
      <>
         {children}

         <Modal
            closeOnOverlayClick={false}
            isOpen={isTransaction}
            onClose={() => {
               closeTransaction()
               setBaseStatus(TRANSACTION.INIT)
               setProgressValue(undefined)
            }}
            size={'sm'}
         >
            <ModalOverlay />
            <ModalContent padding="25px" position="fixed" right="10px">
               {status == TRANSACTION.FINALIZED ||
               status == TRANSACTION.ERROR ||
               status == TRANSACTION.CANCELLED ? (
                  <>
                     {status == TRANSACTION.FINALIZED ? (
                        <Image
                           src={SuccessIcon}
                           alt="Success Icon"
                           width={25}
                           height={25}
                        />
                     ) : (
                        <Image
                           src={ErrorIcon}
                           alt="Error Icon"
                           width={25}
                           height={25}
                        />
                     )}
                     <ModalCloseButton opacity="0.5" />
                  </>
               ) : (
                  <Spinner
                     thickness="2px"
                     speed="0.65s"
                     emptyColor="back"
                     color="main"
                     size="md"
                  />
               )}

               <Progress
                  marginTop="20px"
                  borderRadius="15px"
                  background="second"
                  value={progressValue}
                  isIndeterminate={progressValue == undefined}
                  size="xs"
                  colorScheme="purple"
               />
               <Flex marginTop="15px" gap="space-between">
                  <Text opacity="0.6" fontSize="15" fontWeight="600">
                     {statusMessage}
                  </Text>
               </Flex>
            </ModalContent>
         </Modal>
      </>
   )
}
