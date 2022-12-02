import { BaseLink } from '../BaseLink2'
import InstagramImage from '../../../../../public/socials/instagram.svg'

export class Instagram implements BaseLink {
   name = 'Instagram'
   link = 'instagram.com/'
   icon = InstagramImage
   alt = 'instagram logo'
}
