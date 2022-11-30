import {
   Modal,
   ModalCloseButton,
   ModalContent,
   ModalFooter,
   ModalHeader,
   ModalOverlay,
   useDisclosure,
   Divider,
   useToast,
   Spinner,
} from '@chakra-ui/react'
import { MainButton } from '../button/MainButton'
import { AddLinks } from './AddLinks'
import { LinksModalTitle } from './LinksModalTitle'
import styles from '../../styles/NewProfile.module.css'

import { AddLink, LinksContext, useApi } from '../../contexts'
import { createProfile } from '../../guicontroller/createProfile'
import { Toast } from '../toast/Toasts'
import { WalletAccount } from '../../wallets/types'
import { Connection } from '../connection/Connection'
import { useState } from 'react'

export const LinksModal = () => {
   const { isOpen, onOpen, onClose } = useDisclosure()
   const [links, setLinks] = useState<AddLink[]>([])
   const toast = useToast()

   const [onCreate, setOnCreate] = useState(false)

   const { isApiReady, api, substrateApi } = useApi()

   return (
      <LinksContext.Provider
         value={{ currentLinks: links, addLinks: setLinks }}
      >
         <MainButton bg="linear" text="Manage Links" onClick={onOpen} />

         <Modal
            closeOnOverlayClick={false}
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            size={'4xl'}
         >
            <ModalOverlay />
            <ModalContent>
               <ModalHeader>
                  <LinksModalTitle />
               </ModalHeader>
               <Divider
                  marginBottom="20px"
                  alignSelf="center"
                  color="gray.500"
               />

               <AddLinks />
               <ModalCloseButton />

               <ModalFooter marginBottom="10px">
                  {onCreate ? (
                     <Spinner
                        thickness="2px"
                        speed="0.65s"
                        emptyColor="back"
                        color="main"
                        size="lg"
                     />
                  ) : (
                     <MainButton
                        textTooltip="Wait Connection to Subsocial"
                        isDisabled={!isApiReady}
                        padding="20px"
                        text="Create"
                        bg="linear"
                     />
                  )}
               </ModalFooter>
            </ModalContent>
         </Modal>
      </LinksContext.Provider>
   )
}
