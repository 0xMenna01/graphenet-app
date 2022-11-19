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
   w?: string
   fontSize?: string
   padding?: string
   align?: string
   isDisabled?: boolean
   onClick?: MouseEventHandler<HTMLButtonElement>
   className?: string
   textTooltip?: string
   place?: PlacementWithLogical
   hover?: string
}

export const MainButton = ({
   text,
   bg,
   w,
   fontSize,
   padding,
   onClick,
   isDisabled,
   className,
   textTooltip,
   place,
   hover,
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
            w={w}
            isDisabled={isDisabled}
            variant="outline"
            borderRadius={borderValue}
            border={bg}
            background={bg}
            padding={padding}
            fontSize={fontSize}
            _hover={{
               background: !hover ? 'linear' : hover,
            }}
            _active={{ opacity: '0.8' }}
            onClick={onClick}
         >
            {text}
         </Button>
      </Tooltip>
   )
}
