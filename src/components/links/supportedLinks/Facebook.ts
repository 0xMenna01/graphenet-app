import { BaseLink } from '../BaseLink'
import FacebookWhite from '../../../../public/socials/white/facebook.svg'
import FacebookBlack from '../../../../public/socials/black/facebook.svg'

export class Facebook implements BaseLink {
   name = 'Facebook'
   link = 'facebook.com/'
   icon = { white: FacebookWhite, black: FacebookBlack }
   alt = 'facebook logo'
}
