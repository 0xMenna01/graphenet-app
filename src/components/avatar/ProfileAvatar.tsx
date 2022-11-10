import { DeleteIcon } from '@chakra-ui/icons'
import { Avatar, Box, Input, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import styles from '../../styles/NewProfile.module.css'
import { borderValue } from '../../stylesheets/theme'

type AvatarProps = {
   src?: any
   setAvatar: (image: any) => void
}

export const ProfileAvatar = ({ src, setAvatar }: AvatarProps) => {
   const [preview, setPreview] = useState('')

   useEffect(() => {
      if (src) {
         const objectUrl = URL.createObjectURL(src)
         setPreview(objectUrl)
         console.log(src)

         return () => URL.revokeObjectURL(objectUrl)
      }
   }, [src])

   const removeImage = () => {
      setPreview('')
      setAvatar(null)
   }

   const isPreview = () => {
      return preview != ''
   }

   return (
      <>
         {!isPreview() ? (
            <>
               <label>
                  <Avatar
                     borderRadius={borderValue}
                     size="2xl"
                     padding="20px"
                     bg="back"
                     _hover={{ background: 'linear', cursor: 'pointer' }}
                     src={preview}
                  >
                     <Input
                        className={styles.avatar}
                        type="file"
                        display="none"
                        accept="image/*"
                        onChange={(event) => {
                           if (event.target.files) {
                              setAvatar(event.target.files[0])
                           }
                           event.target.value = ''
                        }}
                     />
                  </Avatar>
               </label>
               <Box className={styles.text}>
                  <Text>Upload your Avatar</Text>
               </Box>
            </>
         ) : (
            <>
               <Avatar
                  borderRadius={borderValue}
                  size="2xl"
                  padding="10px"
                  bg="back"
                  src={preview}
               />
               <Box
                  className={styles.deleteicon}
                  _hover={{ opacity: '1', color: 'main', cursor: 'pointer' }}
               >
                  <DeleteIcon onClick={removeImage} />
               </Box>
            </>
         )}
      </>
   )
}
