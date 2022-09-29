import { useAmount } from  '../../../Context/AmountContext'
import { useFrequency } from  '../../../Context/FrequencyContext'
import impactSubsValues from '../../../Values/impactSubsValues'
import { useState, useEffect } from 'react'

const DonationImpactMessage = () => {
    const { selectedAmount } = useAmount()
    const { selectedFrequency } = useFrequency()
    const [amountImpact , setAmountImpact] = useState(impactSubsValues[selectedAmount])

    useEffect(() => {
        setAmountImpact(impactSubsValues[selectedAmount])
      }, [selectedAmount])

  return (
    <>
    <div className='text-center font-Pop-R text-xl text-gray-400'>
    {
    defineImpactMessage(selectedAmount, selectedFrequency, amountImpact)
    }
    </div>
    </>
  )
}

export default DonationImpactMessage

function defineImpactMessage(selectedAmount, selectedFrequency, amountImpact) {
    return (selectedAmount !== 0) ?
    defineImpactMessageIfAmountIsNotCero(selectedFrequency, selectedAmount, amountImpact)
    :
    defineImpactMessageIfAmountIsCero(selectedFrequency)
}

function defineImpactMessageIfAmountIsCero(selectedFrequency) {
    return (selectedFrequency === 1) ?
        "Realiza una donación para brindar atención nutricional a niños/as de la comunidad." :
        "Realiza una donación todos los meses para brindar atención nutricional a niños/as de la comunidad."
}

function defineImpactMessageIfAmountIsNotCero(selectedFrequency, selectedAmount, amountImpact) {
    return (selectedFrequency === 1) ?
        `Con tu donación de $${selectedAmount} brindas atención nutricional a niños/as de la comunidad.` 
        :
        defineImpactMessageIfAmountIsCustomize(amountImpact, selectedAmount)
}

function defineImpactMessageIfAmountIsCustomize(amountImpact, selectedAmount) {
    return (amountImpact !== undefined) ?
        `Con tu donación de $${selectedAmount} brindas atención nutricional a ${amountImpact} niños/as todos los meses.`
        :
        `Con tu donación de $${selectedAmount} brindas atención nutricional a niños/as de la comunidad`
}

