import { BaseDotsamaWallet } from '../base-wallet'

export class SubWallet extends BaseDotsamaWallet {
   extensionName = 'subwallet-js'
   title = 'SubWallet'
   installUrl = 'https://subwallet.app/download.html'

   noExtensionMessage = ''
   logo = {
      src: 'SubWalletLogo.svg',
      alt: 'Subwallet Logo',
   }
}
