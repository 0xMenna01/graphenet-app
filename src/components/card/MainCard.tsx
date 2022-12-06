import {
   Card,
   CardHeader,
   Heading,
   CardBody,
   CardFooter,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { shadow } from '../../stylesheets/theme'

type CardProps = {
   firstHeading: string
   secondHeading?: string
   children: ReactNode
   footer?: ReactNode
   hasFooter?: boolean
}

export const MainCard = ({
   firstHeading,
   secondHeading,
   children,
   footer,
   hasFooter,
}: CardProps) => {
   return (
      <Card
         w="563px"
         color="white"
         padding="15px"
         bg="card"
         boxShadow={shadow}
         size="md"
         borderRadius="15px"
      >
         <CardHeader>
            {firstHeading != '' && (
               <Heading size="lg" fontWeight="800" opacity="0.8">
                  {firstHeading}
               </Heading>
            )}
            {secondHeading != '' && (
               <Heading
                  marginTop="20px"
                  size="md"
                  fontWeight="700"
                  opacity="0.6"
               >
                  {secondHeading}
               </Heading>
            )}
         </CardHeader>

         <CardBody>{children}</CardBody>
         {hasFooter && <CardFooter>{footer}</CardFooter>}
      </Card>
   )
}
