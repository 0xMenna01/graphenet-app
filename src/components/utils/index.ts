import { config } from '../../config'
import { AddLink } from '../../contexts'

export const isBioValid = (input: string): boolean => {
   return true
}

export const isUsernameValid = (input: string): boolean => {
   if (input == '') {
      return false
   } else {
      return true
   }
}

export const loadImgUrl = (cid: string) => {
   return cid ? `${config.ipfsNodeUrl}/ipfs/${cid}` : ''
}

export function getNewLinks(
   newLink: AddLink,
   currentLinks: AddLink[],
   count?: number,
   setNewCount?: (count: number) => void
): AddLink[] {
   for (let i = 0; i < currentLinks.length; i++) {
      if (newLink.name == currentLinks[i].name) {
         currentLinks[i] = newLink
         return currentLinks
      }
   }
   currentLinks.push(newLink)
   if (count != undefined && setNewCount != undefined) {
      const newCount = count + 1
      setNewCount(newCount)
   }

   return currentLinks
}

export function removeIfExists(
   linkName: string,
   currentLinks: AddLink[],
   count?: number,
   setNewCount?: (count: number) => void
): AddLink[] {
   let index = -1

   for (let i = 0; i < currentLinks.length; i++) {
      if (linkName == currentLinks[i].name) {
         index = i
         break
      }
   }
   if (index > -1) {
      currentLinks.splice(index, 1)
      if (count != undefined && setNewCount != undefined) {
         const newCount = count - 1
         setNewCount(newCount)
      }
   }
   return currentLinks
}
