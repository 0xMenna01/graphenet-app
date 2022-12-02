import { BaseLink } from '../BaseLink2'
import GithubImage from '../../../../../public/socials/github.svg'

export class Github implements BaseLink {
   name = 'Github'
   link = 'github.com/'
   icon = GithubImage
   alt = 'github logo'
}
