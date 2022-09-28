import { useAmount } from '../../../Context/AmountContext'
import { useFrequency } from  '../../../Context/FrequencyContext'

const getSelectedColors = (selected) => {
  return selected ? 'purpleBg purpleBorder text-white' : 
  'purpleBgHover purpleBorder border-gray-400 purpleText'
}

const AmountButton = ({ amount, selected }) => {
  const { setSelectedAmount } = useAmount()
  const { selectedFrequency } = useFrequency()
  const handleClick = () => {
    setSelectedAmount(amount)
  }
  return (
    <div className='m-1'>
      <button className={`space-x-3 justify-center flex flex-row rounded-lg uppercase font-Pop-M py-4 px-6 w-full min-w-fit h-auto border m-1 ${getSelectedColors(selected)}`} onClick={handleClick}>
        <div className='text-xl'>
          ${amount}
        </div>
        <div className='text-lg'>
          {(selectedFrequency === 1)  ? "ARS" : "ARS/MES"}
        </div>
      </button>
    </div>
  )
}

export default AmountButton