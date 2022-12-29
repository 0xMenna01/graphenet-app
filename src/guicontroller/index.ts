import { IpfsContent } from '@subsocial/api/substrate/wrappers'
import { SpaceStruct } from '@subsocial/api/types'
import axios from 'axios'
import CID from 'cids'
import { INFURA_ID, INFURA_SECRET_KEY } from '../config/keys'
import { SpaceAccount } from '../model/SpaceAccount'
import { ApiConnect } from './ApiConnect'

export const createProfile = async (
    name: string,
    bio?: string | null,
    avatar?: File | null
) => {
    const api = await ApiConnect.getInstance().getApi()
    const substrateApi = await ApiConnect.getInstance().getSubstrateApi()
    let ipfsImageCid = null
    if (avatar) {
        ipfsImageCid = await api.ipfs.saveFile(avatar)
    }

    const profile = {
        about: bio ? bio : null,
        image: ipfsImageCid,
        name: name,
        tags: null,
    }

    const cid = await api.ipfs.saveFileToIpfs(JSON.stringify(profile))

    const spaceTransaction = substrateApi.tx.spaces.createSpace(
        IpfsContent(cid),
        null
    )

    return spaceTransaction
}

export const getSpaces = async (address: string) => {
    const api = await ApiConnect.getInstance().getApi()
    const spaceIds = await api.blockchain.spaceIdsByOwner(address)
    const structs = await api.findSpaceStructs(spaceIds)

    let spaces: SpaceAccount[] = []

    structs.forEach(async (spaceStruct) => {
        const { contentId, id } = spaceStruct
        if (contentId) {
            const content = await ApiConnect.getInstance()
                .ipfsClient()
                .getContent(contentId)

            const json = JSON.stringify(content)
            if (json) {
                let space: SpaceAccount = JSON.parse(json)
                space.image = ApiConnect.getInstance()
                    .ipfsClient()
                    .loadContent(space.image)
                space.id = id
                spaces.push(space)
            }
        }
    })

    return spaces
}
