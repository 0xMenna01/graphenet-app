import { table } from 'console'

type mobileSize = string
type tabletSize = string
type mainSize = string

export type ResponsiveStyle =
   | [mobileSize, tabletSize, mainSize]
   | [mobileSize, mainSize]
