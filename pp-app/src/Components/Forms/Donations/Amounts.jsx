import { useAmount } from  '../../../Context/AmountContext'
import AmountButton from "./AmountButton"
import CustomAmountInput from './CustomAmountInput'

const Amounts = () => {
  const { amounts, amountIndex } = useAmount()
  return (
    <>
      <div className="container flex flex-col space-y-6">
        <CustomAmountInput></CustomAmountInput>
        <div className="container grid grid-cols-4 ">
          {amounts.map((amount, index) => {
            return (<AmountButton key={index} amount={amount} selected={index === amountIndex()}/>)
          })}
        </div>
      </div>
    </>
  )
}

export default Amounts
