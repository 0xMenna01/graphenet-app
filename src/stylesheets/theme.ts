import { defineStyleConfig, extendTheme } from '@chakra-ui/react'
import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

export const shadow = 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;'

const { definePartsStyle, defineMultiStyleConfig } =
   createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
   dialog: {
      borderRadius: '15px',
      boxShadow: shadow,
      bg: 'card',
      padding: '10px',
   },
})

export const modalTheme = defineMultiStyleConfig({
   baseStyle,
})

export const borderValue = '15px'

const theme = extendTheme({
   components: { Modal: modalTheme },
   styles: {
      global: {
         'html, body': {
            color: 'white',
            backgroundColor: '#0F0F0F',
            fontSize: '16px',
            fontWeight: '500',
         },
         '*': {
            boxSizing: 'border-box',
         },
         '::selection': {
            background: '#AA67FF',
         },
         '&::-webkit-scrollbar': {
            width: '6px',
            borderRadius: '15px',
            backgroundColor: 'second',
         },
         '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'main',
            borderRadius: '15px',
         },
      },
   },
   colors: {
      main: '#AA67FF',
      second: '#2B2B2B',
      hover: '#434343',
      warning: '#B95050',
      linear:
         'linear-gradient(270deg, #AA67FF 0%, rgba(143, 0, 255, 0.8) 100%);',
      back: '#0F0F0F',
      card: 'linear-gradient(270.43deg, #0F0F0F 0.38%, #161616 99.64%)',
   },
   breakpoints: {
      sm: '40em',
      md: '72em',
      lg: '96em',
   },
})

export default theme
