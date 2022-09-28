import { AmountContextProvider } from  '../../../Context/AmountContext'
import Amounts from './Amounts'
import StartDonation from './StartDonation'

const FirstStep = ({ setStep }) => {
  return (
    <AmountContextProvider>
    <div className=' p-4 container flex flex-row'>
        <Amounts></Amounts>
    </div>
    <StartDonation setStep={setStep}/>  
    </AmountContextProvider>
  )
}

export default FirstStep
