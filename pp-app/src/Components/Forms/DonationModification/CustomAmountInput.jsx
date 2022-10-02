import { useFrequency } from  '../../../Context/FrequencyContext'
import { useAmount } from '../../../Context/AmountContext'
import { useSubModContext} from '../../../Context/SubscriptionModificationContext'
const CustomAmountInput = () => {
  const { selectedFrequency } = useFrequency()
  const { selectedAmount, setSelectedAmount } = useAmount()
  const {userWantsToModifySubs} = useSubModContext()
//EL VALOR POR DEFAULT DEBERÍA DE VENIR DEL BACKEND
  const onChange = (event) => {
    var amount = parseInt(event.target.value)
    amount = (isNaN(amount) ? 0 : amount);
    setSelectedAmount(amount)
  }
  return (
    <div className={`w-full px-7 block flex flex-row justify-around font-Pop-M purpleText rounded-md uppercase font-Pop-M h-auto py-1 focus:purpleBorder ${useSubModContext ? "border-2 border-gray-300":"border-1 border-gray-100"}`}>
      <div className='self-center basis-1/8 text-xl'>
          $
      </div>
      <input
        type='text'
        disabled={!userWantsToModifySubs}
        autoFocus
        onChange={onChange}
        value = {selectedAmount}
        className='basis-3/4 self-center border-none focus:outline-none focus:border-transparent focus:ring-0 text-xl '>
      </input>
      <div className='self-center basis-1/8 text-xl text-end'>
          {(selectedFrequency === 1)  ? "ARS" : "ARS/MES"}
      </div>
    </div>
  )
}

export default CustomAmountInput
