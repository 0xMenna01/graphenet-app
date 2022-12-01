import { extendTheme } from '@chakra-ui/react'
import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } =
   createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
   dialog: {
      borderRadius: '15px',
      boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;',
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
            fontWeight: '400',
         },
         '*': {
            boxSizing: 'border-box',
         },
         '::selection': {
            background: '#AA67FF',
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
   fonts: {
      heading: `'Inter', sans-serif`,
      body: `'Inter', sans-serif`,
   },
   breakpoints: {
      sm: '40em',
      md: '72em',
      lg: '96em',
   },
})

export default theme
