import { AmountContextProvider } from  '../../../Context/AmountContext'
import Amounts from './Amounts'
import StartDonation from './StartDonation'
import DonationImpactMessage from './DonationImpactMessage'
import DashedLine from '../../Utiles/DashedLine'
import { useFrequency } from  '../../../Context/FrequencyContext'
import SelectSubscriptionPeriod from './SelectSubscriptionPeriod'
import { SubscriptionContextProvider } from '../../../Context/SubscriptionContext'

const FirstStep = ({ setStep }) => {
  const { selectedFrequency } = useFrequency()
  return (
    <AmountContextProvider>
    <div className='flex flex-col space-y-10'>
      <Amounts></Amounts>
      {(selectedFrequency===1) ? 
      <></>
      :
      <>
      <DashedLine></DashedLine>
      <div>
        <SubscriptionContextProvider>
        <SelectSubscriptionPeriod></SelectSubscriptionPeriod>
        </SubscriptionContextProvider> 
      </div>
      </>
      }
      <DashedLine></DashedLine>
      <DonationImpactMessage></DonationImpactMessage>
      <StartDonation setStep={setStep}/>  
    </div>
    </AmountContextProvider>
  )
}

export default FirstStep
