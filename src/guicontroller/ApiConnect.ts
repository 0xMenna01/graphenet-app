import { ApiPromise } from '@polkadot/api'
import { SubsocialApi } from '@subsocial/api'
import { config as inputConfig } from '../config'
import { IpfsConnect } from '../ipfs/IpfsConnect'

const config = {
    substrateNodeUrl: inputConfig.substrateNodeUrl,
    ipfsNodeUrl: inputConfig.ipfsNodeUrl,
}

const IpfsConfig = {
    ipfs: inputConfig.ipfs,
}

export class ApiConnect {
    private static instance: ApiConnect | null = null
    private subsocialApi: SubsocialApi | null = null
    private substrateApi: ApiPromise | null = null
    private ipfs: IpfsConnect | null = null

    private constructor() {}

    static getInstance = () => {
        if (this.instance == null) {
            this.instance = new ApiConnect()
        }
        return this.instance
    }

    private initApi = async () => {
        if (this.subsocialApi == null) {
            const api = await SubsocialApi.create(config)
            this.subsocialApi = api
        }
        return this.subsocialApi
    }

    getApi = async () => {
        const api = await this.initApi()
        return api
    }

    getSubstrateApi = async () => {
        if (this.substrateApi == null) {
            const api = await this.initApi()
            const substrateApi = await api.substrateApi
            this.substrateApi = substrateApi
        }
        return this.substrateApi
    }

    ipfsClient = () => {
        if (this.ipfs == null) {
            this.ipfs = new IpfsConnect(IpfsConfig.ipfs)
        }
        return this.ipfs
    }
}
