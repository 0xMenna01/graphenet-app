import { BaseLink, IconSrc } from '../BaseLink'
import YouWhite from '../../../../public/socials/white/youtube.svg'
import YouBlack from '../../../../public/socials/black/youtube.svg'

export class Youtube implements BaseLink {
   name = 'YouTube'
   link = 'youtube.com/'
   icon = { white: YouWhite, black: YouBlack }
   alt = 'youtube logo'
}
