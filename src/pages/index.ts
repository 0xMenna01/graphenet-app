import NewProfile from '../components/home/NewProfile'

export default NewProfile

export async function getServerSideProps({ query }: any) {
   if (query.tab) {
      return {
         props: {
            router: {
               query,
            },
         },
      }
   }

   return { props: {} }
}
