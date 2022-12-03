import { BaseLink } from '../BaseLink'
import WebsiteWhite from '../../../../public/socials/white/website.svg'
import WebsiteBlack from '../../../../public/socials/black/website.svg'
import WebsiteImage from '../../../../public/socials/website.svg'

export class Website implements BaseLink {
   name = 'Website'
   link = ''
   icon = { white: WebsiteWhite, black: WebsiteBlack, main: WebsiteImage }
   alt = 'website logo'
}
