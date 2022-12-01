import { config } from '../../config'
import { AddLink } from '../../contexts'
import { BaseLink } from '../links/BaseLink'
import { supportedLinks } from '../links/supportedLinks'

export const isInputValid = (input: string, isBio: boolean): boolean => {
   let min = 2
   if (isBio) {
      min = 5
   }
   const count = input.length
   let empty = 0
   if (count > min && input[0] != '') {
      for (let i = 1; i < count; i++) {
         if (input[i] == '') {
            empty++
         }
      }
      if (count - empty > min) {
         return true
      }
   }
   return false
}

//IPFS Gateway

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

export function srcLink(name: string): BaseLink {
   for (const element of supportedLinks) {
      if (name === element.name) {
         return element
      }
   }
   throw new Error('Link' + name + 'is not supported as icon')
}
