import { AddIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import { JSXElementConstructor, ReactElement, ReactNode } from 'react'

type AddLinkProps = {
   className?: string
   Icon: ReactElement<any, string | JSXElementConstructor<any>>
   bg: string
   isHover?: boolean
   isDisabled?: boolean
}

export const IconCustomButton = ({
   className,
   Icon,
   bg,
   isHover,
   isDisabled,
}: AddLinkProps) => {
   return (
      <IconButton
         className={className}
         isDisabled={isDisabled}
         variant="outline"
         borderRadius="15px"
         border="transparent"
         background={bg}
         _hover={{ background: isHover ? 'linear' : 'bg' }}
         _active={{ opacity: '0.8' }}
         aria-label="Add Link"
         icon={Icon}
      />
   )
}
