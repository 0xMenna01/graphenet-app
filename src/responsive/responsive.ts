import { ResponsiveStyle } from './types'

export interface FontResponsive {
   fontSize?: ResponsiveStyle
   fontWeight?: ResponsiveStyle
}

export interface ResponsiveContainer {
   display?: ResponsiveStyle
   direction?: ResponsiveStyle
   alignSelf?: ResponsiveStyle
   justifyContent?: ResponsiveStyle
   alignItems?: ResponsiveStyle
   marginRight?: ResponsiveStyle
   marginLeft?: ResponsiveStyle
   left?: ResponsiveStyle
   right?: ResponsiveStyle
   top?: ResponsiveStyle
   bottom?: ResponsiveStyle
}

export interface ImageResponsive {
   display?: ResponsiveStyle
   justifyContent?: ResponsiveStyle
}
