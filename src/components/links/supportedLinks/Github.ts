import { BaseLink } from '../BaseLink'
import GithubWhite from '../../../../public/socials/white/github.svg'
import GithubBlack from '../../../../public/socials/black/github.svg'

export class Github implements BaseLink {
   name = 'Github'
   link = 'github.com/'
   icon = { white: GithubWhite, black: GithubBlack }
   alt = 'github logo'
}
