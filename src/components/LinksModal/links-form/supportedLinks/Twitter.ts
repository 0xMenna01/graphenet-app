import { BaseLink } from '../BaseLink'
import TwitterImage from '../../../../../public/socials/twitter.svg'

export class Twitter implements BaseLink {
   name = 'Twitter'
   link = 'twitter.com/'
   icon = TwitterImage
   alt = 'twitter logo'
}
