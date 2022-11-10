import { InfoIcon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/react'
import { borderValue } from '../../stylesheets/theme'

type ToastProps = {
   title: string
}

export const Toast = ({ title }: ToastProps) => {
   return (
      <Flex
         margin={'20px'}
         width={'auto'}
         height={'auto'}
         p={5}
         background="second"
         alignItems="center"
         borderRadius={borderValue}
         gap="25px"
      >
         <InfoIcon color="white" />
         <Text fontWeight="600" color="white">
            {title}
         </Text>
      </Flex>
   )
}
