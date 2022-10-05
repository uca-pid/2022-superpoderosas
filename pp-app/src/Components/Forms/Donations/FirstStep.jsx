import { AmountContextProvider } from  '../../../Context/AmountContext'
import Amounts from './Amounts'
import StartDonation from './StartDonation'
import ModifyDonation from './ModifyDonation'
import DonationImpactMessage from './DonationImpactMessage'
import ModifyDonationMessage from './ModifyDonationMessage'
import DashedLine from '../../Utiles/DashedLine'
import { useFrequency } from  '../../../Context/FrequencyContext'
import SelectSubscriptionPeriod from './SelectSubscriptionPeriod'
import { SubscriptionContextProvider } from '../../../Context/SubscriptionContext'
import { useCurrentUser } from "../../../Context/CurrentUserContext";
import SelectPaymentDay from './SelectPaymentDay'
import StepTitle from './StepTitle';

const FirstStep = ({ setStep }) => {
  const { selectedFrequency } = useFrequency()
  const {subscriptionData} = useCurrentUser()

  return (
    <AmountContextProvider>
    <SubscriptionContextProvider>
    <StepTitle titleText={!(subscriptionData) || (selectedFrequency===1) ? 'Únase a la lucha contra la desnutrición infantil' : "Usted ya esta realizando una donación recurrente"}/>  
      {(selectedFrequency===1) ? 
      <>
      <div className='flex flex-col space-y-10'>
        <Amounts></Amounts>
        <DashedLine></DashedLine>
        <DonationImpactMessage></DonationImpactMessage>
        <StartDonation setStep={setStep}/>  
      </div>
      </>
      :
      <>
      {!subscriptionData ?
      <>
        <div className='flex flex-col space-y-10'>
          <Amounts></Amounts>
          <DashedLine></DashedLine>
          <div className='space-y-6'>
            <SelectSubscriptionPeriod></SelectSubscriptionPeriod>
            <SelectPaymentDay></SelectPaymentDay>
          </div>
          <DashedLine></DashedLine>
          <DonationImpactMessage></DonationImpactMessage>
          <StartDonation setStep={setStep}/>  
        </div>
      </>
      :
      <>
      <ModifyDonationMessage></ModifyDonationMessage>
      <ModifyDonation/>  
      </>
      }
      </>
      }
    </SubscriptionContextProvider>
    </AmountContextProvider>
  )
}

export default FirstStep
