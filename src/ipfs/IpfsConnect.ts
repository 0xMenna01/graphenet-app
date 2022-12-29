import axios from 'axios'
import CID from 'cids'
import { INFURA_ID, INFURA_SECRET_KEY } from '../config/keys'

type IpfsConfig = {
    host: string
    ipfsUrl: string
    port: number
    protocol: string
    timeout?: number
}

export class IpfsConnect {
    private client: import('ipfs-http-client/types/src/types').IPFSHTTPClient
    private ipfsUrl: string

    constructor(config: IpfsConfig) {
        this.ipfsUrl = config.ipfsUrl
        const ipfsClient = require('ipfs-http-client')

        const auth =
            'Basic ' +
            Buffer.from(INFURA_ID + ':' + INFURA_SECRET_KEY).toString('base64')

        this.client = ipfsClient.create({
            host: config.host,
            port: config.port,
            protocol: config.protocol,
            timeout: config?.timeout,
            headers: {
                authorization: auth,
            },
        })
    }

    saveContent = async (content: any) => {
        const data = await this.client.dag.put(content)
        const cidToPin = data.toV0().toString()

        this.client.pin.add(cidToPin).then((res) => {
            return res
        })
    }

    getContent = async (contentId: string) => {
        const cid = new CID(contentId)
        const cidV0 = cid.toV0()

        const url = `${this.ipfsUrl}/ipfs/${cidV0}`
        const res = await axios.get(url)
        return res.data
    }

    loadContent = (contentId: string) => {
        const cid = new CID(contentId)
        const cidV0 = cid.toV0()
        return cidV0 ? `${this.ipfsUrl}/ipfs/${cidV0}` : ''
    }
}
