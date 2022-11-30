import { BaseLink } from '../BaseLink'
import LinkedinWhite from '../../../../public/socials/white/linkedin.svg'
import LinkedinBlack from '../../../../public/socials/black/linkedin.svg'

export class Linkedin implements BaseLink {
   name = 'Linkedin'
   link = 'linkedin.com/'
   icon = { white: LinkedinWhite, black: LinkedinBlack }
   alt = 'linkedin logo'
}
