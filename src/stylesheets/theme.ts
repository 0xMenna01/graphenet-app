import { extendTheme } from '@chakra-ui/react'
import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } =
   createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
   dialog: {
      borderRadius: '15px',
      boxShadow:
         'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
      bg: 'linear-gradient(270deg, #151515 0%, #212121 100%)',
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
            fontWeight: '300',
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
      warning: '#B95050',
      linear:
         'linear-gradient(270deg, #AA67FF 0%, rgba(143, 0, 255, 0.8) 100%);',
      back: '#0F0F0F',
      card: 'linear-gradient(270deg, #151515 0%, #212121 100%)',
   },
   fonts: {
      html: `'Inter', sans-serif`,
      body: `'Inter', sans-serif`,
      heading: `'Inter', sans-serif`,
   },
   breakpoints: {
      sm: '40em',
      md: '72em',
      lg: '96em',
   },
})

export default theme
