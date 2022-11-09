import { createContext } from 'react'

export interface AddLink {
   name: string
   url: string
}

export type ContextTypeLink = {
   currentLinks?: AddLink[]
   addLinks?: (newLinks: AddLink[]) => void
}

export const LinksContext = createContext<ContextTypeLink>({})
