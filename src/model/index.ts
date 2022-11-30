export interface Link {
   name: string
   link: string
}

export interface PageStyle {
   background: string
   accountCard: ComponentStyle
   linksCard: ComponentStyle
   links: ComponentStyle
   icons: ComponentStyle
}

export interface ComponentStyle {
   background?: string
   color?: string
   image?: string //IPFS
}

export interface Profile {
   address: string
   name: string
   about: string
   links: Link[]
   style: PageStyle
}
