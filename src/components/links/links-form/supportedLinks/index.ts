import { Discord } from './Discord'
import { Facebook } from './Facebook'
import { Github } from './Github'
import { Instagram } from './Instagram'
import { Linkedin } from './Linkedin'
import { Twitter } from './Twitter'
import { Youtube } from './Youtube'

export const supportedLinks = [
   new Twitter(),
   new Instagram(),
   new Facebook(),
   new Youtube(),
   new Discord(),
   new Linkedin(),
   new Github(),
]
