import { useAmount } from  '../../../Context/AmountContext'
import impactSubsValues from '../../../Values/impactSubsValues'
import { useState, useEffect } from 'react'

const DonationImpactForSelectedAmount = () => {
    const { selectedAmount } = useAmount()
    const [amountImpact , setAmountImpact] = useState(impactSubsValues[selectedAmount])

    useEffect(() => {
        setAmountImpact(impactSubsValues[selectedAmount])
      }, [selectedAmount])

  return (
    <>
    <div className='text-center font-Pop-R text-xl text-gray-400'>
    {
    defineImpact(selectedAmount,amountImpact)
    }
    </div>
    </>
  )
}

export default DonationImpactForSelectedAmount

function defineImpact(selectedAmount,amountImpact) {
    return (selectedAmount !== 0) ?
    defineImpactIfAmountIsNotCero(amountImpact)
    :
    defineImpactIfAmountIsCero()
}

function defineImpactIfAmountIsCero() {
    return "Brindá atención nutricional a niños/as."
}

function defineImpactIfAmountIsNotCero(amountImpact) {
    return (amountImpact) ?
        `Brindas atención nutricional a ${amountImpact} niños/as.`
        :
        `Brindas atención nutricional a niños/as.`
}
