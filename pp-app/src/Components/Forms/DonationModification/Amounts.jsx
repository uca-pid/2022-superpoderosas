import { useAmount } from  '../../../Context/AmountContext'
import AmountButton from "./AmountButton"
import CustomAmountInput from './CustomAmountInput'
import { useSubModContext} from '../../../Context/SubscriptionModificationContext'

const Amounts = () => {
  const { amounts, amountIndex } = useAmount()
  const {userWantsToModifySubs} = useSubModContext()
  return (
    <>
      <div className="container flex flex-col space-y-4">
        <CustomAmountInput></CustomAmountInput>
        { userWantsToModifySubs ?
        <div className="container grid grid-cols-4 ">
          {amounts.map((amount, index) => {
            return (<AmountButton key={index} amount={amount} selected={index === amountIndex()}/>)
          })}
        </div>
        :
        null
        }
      </div>
    </>
  )
}

export default Amounts
