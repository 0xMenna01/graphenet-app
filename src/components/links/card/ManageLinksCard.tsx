import { Card, CardBody, Text } from '@chakra-ui/react'
import { Link } from '../../../model'

type ManageLinksCardProps = {
   ownedLinks: string[]
}

export const ManageLinksCard = ({ ownedLinks }: ManageLinksCardProps) => {
   return (
      <Card>
         <CardBody>
            <Text>
               View a summary of all your customers over the last month.
            </Text>
         </CardBody>
      </Card>
   )
}
