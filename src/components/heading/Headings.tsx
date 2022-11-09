import { Heading } from '@chakra-ui/react'

type HeadText = {
   text: string
}

export const MainHeading = ({ text }: HeadText) => {
   return (
      <Heading as={'h1'} size="2xl" marginBottom="20px">
         {text}
      </Heading>
   )
}

export const SecondHeading = ({ text }: HeadText) => {
   return (
      <Heading as={'h2'} size="md" opacity="0.5">
         {text}
      </Heading>
   )
}
