import { BaseLink, IconSrc } from '../BaseLink'
import YouWhite from '../../../../public/socials/white/youtube.svg'
import YouBlack from '../../../../public/socials/black/youtube.svg'
import YouImage from '../../../../public/socials/youtube.svg'

export class Youtube implements BaseLink {
   name = 'YouTube'
   link = 'youtube.com/'
   icon = { white: YouWhite, black: YouBlack, main: YouImage }
   alt = 'youtube logo'
}
