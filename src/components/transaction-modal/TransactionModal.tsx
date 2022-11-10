import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons'
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
import { ReactNode, useEffect, useState } from 'react'

import { TRANSACTION } from '../../model/transaction'

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
                        <CheckCircleIcon marginBottom="20px" />
                     ) : (
                        <WarningIcon
                           width="20px"
                           height="20px"
                           color="red.800"
                           marginBottom="20px"
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
                     marginBottom="20px"
                  />
               )}

               <Progress
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
