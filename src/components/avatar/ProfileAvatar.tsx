import { Avatar, Input } from '@chakra-ui/react'
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

         return () => URL.revokeObjectURL(objectUrl)
      }
   }, [src])

   return (
      <label>
         <Avatar
            borderRadius={borderValue}
            size="2xl"
            padding="10px"
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
               }}
            />
         </Avatar>
      </label>
   )
}
