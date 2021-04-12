import { Component, Inject, OnInit } from '@angular/core'
// import Web3 from 'web3'
import { ContractService } from '../../services/contract.service'

const web3object = 'web3'
const ethObject = 'ethereum'

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  constructor(private contractService: ContractService) {}

  // eslint-disable-next-line class-methods-use-this
  async ngOnInit() {
    try {
      // await this.web3.currentProvider.enable();
      await this.contractService.checkAndInstantiateWeb3()
      // console.log(accounts)
    } catch (error) {
      console.error(error)
    }
    // if ('enable' in this.web3.currentProvider) {
    // }
  }
}
