import { Input } from '@chakra-ui/react'

type InputContent = {
   content: string
   check: boolean
   input: string
   setInput: (text: string) => void
}

const isWarning = (input: string) => {
   return false
}

export const InputProfile = ({
   content,
   check,
   input,
   setInput,
}: InputContent) => {
   const warning = check //&& isWarning(input)

   return (
      <Input
         maxWidth="550px"
         padding="25px"
         background="second"
         placeholder={content}
         borderColor={warning ? 'warning' : 'second'}
         focusBorderColor={warning ? 'warning' : 'main'}
         _hover={{ borderColor: 'main' }}
         onChange={(event) => setInput(event.target.value)}
      />
   )
}
