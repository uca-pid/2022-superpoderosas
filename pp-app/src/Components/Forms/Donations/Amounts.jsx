import { useAmount } from  '../../../Context/AmountContext'
import AmountButton from "./AmountButton"
import CustomAmount from "./CustomAmount"

const Amounts = () => {
  const { amounts, amountIndex } = useAmount()
  return (
    <>
      <div className="container flex flex-wrap justify-center">
        {amounts.map((amount, index) => {
          return (<AmountButton key={index} amount={amount} selected={index === amountIndex()}/>)
        })}
        <CustomAmount selected={amountIndex() === -1}/>
      </div>
    </>
  )
}

export default Amounts
