import { BaseLink } from '../BaseLink'
import GithubImage from '../../../../../public/socials/github.svg'

export class Github implements BaseLink {
   name = 'Github'
   link = 'github.com/'
   icon = GithubImage
   alt = 'github logo'
}
