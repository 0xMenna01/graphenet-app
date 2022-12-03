import { BaseLink } from '../BaseLink'
import InstagramWhite from '../../../../public/socials/white/instagram.svg'
import InstagramBlack from '../../../../public/socials/black/instagram.svg'
import InstagramImage from '../../../../public/socials/instagram.svg'

export class Instagram implements BaseLink {
   name = 'Instagram'
   link = 'instagram.com/'
   icon = { white: InstagramWhite, black: InstagramBlack, main: InstagramImage }
   alt = 'instagram logo'
}
