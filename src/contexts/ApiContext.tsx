import React, { createContext, useContext, useEffect, useState } from 'react'
import { SubsocialApi, generateCrustAuthToken } from '@subsocial/api'
import { ApiPromise } from '@polkadot/api'
import { config as inputConfig } from '../config'
import { Image, useToast } from '@chakra-ui/react'
import { Connection } from '../components/connection/Connection'
import styles from '../styles/App.module.css'

type Props = {
   children: React.ReactNode
}

type ContextType = {
   isApiReady: boolean
   api: SubsocialApi
   substrateApi: ApiPromise
}
export const ApiContext = createContext<ContextType>({
   isApiReady: false,
   api: {} as SubsocialApi,
   substrateApi: {} as ApiPromise,
})

const config = {
   substrateNodeUrl: inputConfig.substrateNodeUrl,
   ipfsNodeUrl: inputConfig.ipfsNodeUrl,
}

export async function initSubsocialApi() {
   const api = await SubsocialApi.create(config)
   const authHeader = generateCrustAuthToken(
      'bottom drive obey lake curtain smoke basket hold race lonely fit walk//Alice'
   )
   api.ipfs.setWriteHeaders({
      authorization: 'Basic ' + authHeader,
   })

   return api
}

export const ApiProvider = ({ children }: Props) => {
   const [api, setApi] = useState<SubsocialApi>({} as SubsocialApi)
   const [substrateApi, setSubstrateApi] = useState<ApiPromise>(
      {} as ApiPromise
   )
   const [isApiReady, setApiReady] = useState(false)

   useEffect(() => {
      setApiReady(false)
      initSubsocialApi().then((res) => {
         setApi(res)
         res.substrateApi.then((res) => {
            setSubstrateApi(res)
            setApiReady(true)
         })
      })
   }, [])

   return (
      <ApiContext.Provider value={{ isApiReady, api, substrateApi }}>
         {children}
      </ApiContext.Provider>
   )
}

export function useApi() {
   return useContext(ApiContext)
}
