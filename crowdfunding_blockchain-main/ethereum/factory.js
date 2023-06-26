import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
   CampaignFactory.abi,
   '0x5c0affa4217A4d9854B071AD4894fAFB9b424CcE'
)

export default instance