import type { Signer as InjectedSigner } from '@polkadot/api/types'
import { u128 } from '@polkadot/types'
import { SubmittableExtrinsic } from '@polkadot/api-base/types/submittable'
import { ISubmittableResult } from '@polkadot/types/types'
import { TRANSACTION } from '../model/transaction'

export type SubscriptionFn = (
   accounts: WalletAccount[] | undefined
) => void | Promise<void>

export interface WalletLogoProps {
   // Logo url
   src: string
   // Alt for the Logo url
   alt: string
}

export interface WalletAccount {
   address: string
   source: string
   name?: string
   wallet?: Wallet
   signer?: unknown
   subBalance?: u128
   ksmBalance?: u128
}

interface WalletData {
   // The name of the wallet extension. Should match `WalletAccount.source`
   extensionName: string
   // Display name for the wallet extension
   title: string
   // Message to display if wallet extension is not installed
   noExtensionMessage?: string
   // The URL to install the wallet extension
   installUrl: string
   // The wallet logo
   logo: WalletLogoProps
}

interface WalletExtension {
   installed: boolean | undefined

   enabled: boolean | undefined

   // The raw extension object which will have everything a dapp developer needs.
   // Refer to a specific wallet's extension documentation
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   extension: any

   // The raw signer object for convenience. Usually the implementer can derive this from the extension object.
   // Refer to a specific wallet's extension documentation
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   signer: InjectedSigner | undefined
}

interface Signer {
   // Sign function
   sign: (
      tx: SubmittableExtrinsic<'promise', ISubmittableResult>,
      address: string,
      setStatus: (status: TRANSACTION) => void
   ) => Promise<undefined | number>
}

interface Connector {
   enable: (dappName: string) => unknown

   // Get accounts function
   getAccounts: (anyType?: boolean) => Promise<WalletAccount[]>

   // The subscribe to accounts function
   subscribeAccounts: (callback: SubscriptionFn) => unknown
}

export interface Wallet
   extends WalletData,
      WalletExtension,
      Connector,
      Signer {}
