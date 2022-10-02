import { AmountContextProvider } from  '../../../Context/AmountContext'
import Amounts from './Amounts'
import StartDonation from './StartDonation'
import DonationImpactMessage from './DonationImpactMessage'
import DashedLine from '../../Utiles/DashedLine'
import { useFrequency } from  '../../../Context/FrequencyContext'
import SelectSubscriptionPeriod from './SelectSubscriptionPeriod'
import { SubscriptionContextProvider } from '../../../Context/SubscriptionContext'
import SelectPaymentDay from './SelectPaymentDay'

const FirstStep = ({ setStep }) => {
  const { selectedFrequency } = useFrequency()
  return (
    <AmountContextProvider>
    <SubscriptionContextProvider>
    <div className='flex flex-col space-y-10'>
      <Amounts></Amounts>
      {(selectedFrequency===1) ? 
      <></>
      :
      <>
      <DashedLine></DashedLine>
      <div className='space-y-6'>
        <SelectSubscriptionPeriod></SelectSubscriptionPeriod>
        <SelectPaymentDay></SelectPaymentDay>
      </div>
      </>
      }
      <DashedLine></DashedLine>
      <DonationImpactMessage></DonationImpactMessage>
      <StartDonation setStep={setStep}/>  
    </div>
    </SubscriptionContextProvider>
    </AmountContextProvider>
  )
}

export default FirstStep
