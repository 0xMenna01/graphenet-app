import { BaseLink } from '../BaseLink'
import DiscordWhite from '../../../../public/socials/white/discord.svg'
import DiscordBlack from '../../../../public/socials/black/discord.svg'
import DiscordImage from '../../../../public/socials/discord.svg'

export class Discord implements BaseLink {
   name = 'Discord'
   link = 'discord.com/'
   icon = { white: DiscordWhite, black: DiscordBlack, main: DiscordImage }
   alt = 'discord logo'
}
