import { Injectable } from '@angular/core'
import { Web3Controller, FlassetsController } from '@urbanisierung/flethly'

declare let require: any
const Web3 = require('web3')
declare let window: any

@Injectable({
  providedIn: 'root',
})
export class ContractService {
  private messageResult: any

  constructor() {}

  // eslint-disable-next-line class-methods-use-this
  public async checkAndInstantiateWeb3(): Promise<boolean> {
    const web3Controller = new Web3Controller()
    const result = await web3Controller.initBrowser()
    const flassetsController = new FlassetsController(web3Controller.web3)
    const accounts = await flassetsController.getAccounts()
    console.log(accounts)
    await flassetsController.init('0x6E06b31F7C62CbC7D5e5D7072f50259a57695298')
    const manager = await flassetsController.getManager()
    console.log(manager)
    return result
    // return new Promise((resolve, reject) => {
    //   if (window.ethereum) {
    //     this.messageResult = 'connected'
    //     window.web3 = new Web3(window.ethereum)
    //     window.ethereum.enable()
    //     resolve(this.messageResult)
    //   } else if (window.web3) {
    //     this.messageResult = 'connected'
    //     window.web3 = new Web3(window.web3.currentProvider)
    //     resolve(this.messageResult)
    //   } else {
    //     this.messageResult =
    //       'No Erthereum browser detected. you should consider trying MetaMask'
    //     reject(this.messageResult)
    //   }
    // })
  }
}
