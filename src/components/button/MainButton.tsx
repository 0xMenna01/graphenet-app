import {
   background,
   Button,
   PlacementWithLogical,
   Tooltip,
} from '@chakra-ui/react'
import { borderValue } from '../../stylesheets/theme'
import { MouseEventHandler } from 'react'

type ButtonProps = {
   text: string
   bg?: string
   fontSize?: string
   padding?: string
   align?: string
   isDisabled?: boolean
   onClick?: MouseEventHandler<HTMLButtonElement>
   className?: string
   textTooltip?: string
   place?: PlacementWithLogical
}

export const MainButton = ({
   text,
   bg,
   fontSize,
   padding,
   onClick,
   isDisabled,
   className,
   textTooltip,
   place,
}: ButtonProps) => {
   return (
      <Tooltip
         isDisabled={!isDisabled}
         hasArrow
         placement={place}
         label={textTooltip}
         bg="second"
         color="white"
      >
         <Button
            className={className}
            isDisabled={isDisabled}
            variant="outline"
            borderRadius={borderValue}
            border="transparent"
            background={bg}
            padding={padding}
            fontSize={fontSize}
            _hover={{
               background: 'linear',
            }}
            _active={{ opacity: '0.8' }}
            onClick={onClick}
         >
            {text}
         </Button>
      </Tooltip>
   )
}
