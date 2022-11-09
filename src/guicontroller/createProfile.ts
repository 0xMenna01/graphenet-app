import { SubsocialApi } from '@subsocial/api'
import { ApiPromise } from '@polkadot/api'
import { IpfsContent } from '@subsocial/api/substrate/wrappers'
import { WalletAccount } from '../wallets/types'

export const createProfile = async (
   subApi: SubsocialApi,
   subtrateApi: ApiPromise,
   userName: string,
   account: WalletAccount,
   bio?: string | null,
   avatar?: File | null
) => {
   let ipfsImageCid = null
   if (avatar) {
      ipfsImageCid = await subApi.ipfs.saveFile(avatar)
   }

   const cid = await subApi.ipfs.saveContent({
      about: bio ? bio : null,
      image: ipfsImageCid,
      name: userName,
      tags: null,
   })

   const spaceTransaction = subtrateApi.tx.spaces.createSpace(
      IpfsContent(cid),
      null
   )

   return account.wallet?.sign(spaceTransaction, account.address)
}
