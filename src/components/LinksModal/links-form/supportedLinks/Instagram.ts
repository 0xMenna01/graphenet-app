import { BaseLink } from '../BaseLink'
import InstagramImage from '../../../../../public/socials/instagram.svg'

export class Instagram implements BaseLink {
   name = 'Instagram'
   link = 'instagram.com/'
   icon = InstagramImage
   alt = 'instagram logo'
}
