import { BaseLink } from '../BaseLink'
import DiscordWhite from '../../../../public/socials/white/discord.svg'
import DiscordBlack from '../../../../public/socials/black/discord.svg'

export class Discord implements BaseLink {
   name = 'Discord'
   link = 'discord.com/'
   icon = { white: DiscordWhite, black: DiscordBlack }
   alt = 'discord logo'
}
