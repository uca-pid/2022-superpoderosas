import { useFrequency } from  '../../../Context/FrequencyContext'
import { useAmount } from '../../../Context/AmountContext'
const CustomAmountInput = () => {
  const { selectedFrequency } = useFrequency()
  const { selectedAmount, setSelectedAmount } = useAmount()

  const onChange = (event) => {
    var amount = parseInt(event.target.value)
    amount = (isNaN(amount) ? 0 : amount);
    setSelectedAmount(amount)
  }
  return (
    <div className='w-full py-3 px-4 md:px-7 block flex flex-row justify-around font-Pop-M purpleText rounded-md uppercase font-Pop-M focus:purpleBorder border-gray-300 border-solid border-2 h-auto'>
      <div className='self-center basis-1/8 text-lg md:text-2xl'>
          $
      </div>
      <input
        type='text'
        autoFocus
        onChange={onChange}
        value = {selectedAmount}
        className='text-lg w-[10px] md:w-auto md:text-2xl basis-3/4 self-center border-none focus:outline-none focus:border-transparent focus:ring-0'>
      </input>
      <div className='self-center basis-1/8 text-lg md:text-xl text-end'>
          {(selectedFrequency === 1)  ? "ARS" : "ARS/MES"}
      </div>
    </div>
  )
}

export default CustomAmountInput
