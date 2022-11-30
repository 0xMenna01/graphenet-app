import { BaseLink } from '../BaseLink'
import TwitterWhite from '../../../../public/socials/white/twitter.svg'
import TwitterBlack from '../../../../public/socials/black/twitter.svg'

export class Twitter implements BaseLink {
   name = 'Twitter'
   link = 'twitter.com/'
   icon = { white: TwitterWhite, black: TwitterBlack }
   alt = 'twitter logo'
}
