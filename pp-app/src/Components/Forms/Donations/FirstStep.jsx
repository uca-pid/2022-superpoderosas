import { AmountContextProvider } from  '../../../Context/AmountContext'
import Amounts from './Amounts'
import StartDonation from './StartDonation'
import DonationImpactMessage from './DonationImpactMessage'
import DashedLine from '../../Utiles/DashedLine'
import { useFrequency } from  '../../../Context/FrequencyContext'

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
      <div> Poner Campos para seleccionar que día del mes, cada cuanto y un checkbox si arranca a pagar este mes</div>
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
