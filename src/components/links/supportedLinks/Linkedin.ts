import { BaseLink } from '../BaseLink'
import LinkedinWhite from '../../../../public/socials/white/linkedin.svg'
import LinkedinBlack from '../../../../public/socials/black/linkedin.svg'
import LinkedinImage from '../../../../public/socials/linkedin.svg'

export class Linkedin implements BaseLink {
   name = 'Linkedin'
   link = 'linkedin.com/'
   icon = { white: LinkedinWhite, black: LinkedinBlack, main: LinkedinImage }
   alt = 'linkedin logo'
}
