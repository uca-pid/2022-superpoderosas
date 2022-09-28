import React, { useState, useEffect, useMemo } from 'react'
import amountsValues from '../Values/amountValues'
import { useFrequency } from './FrequencyContext'

const AmountContext = React.createContext()

export function AmountContextProvider(props) {
  const { selectedFrequency } = useFrequency()
  const [amounts, setAmounts] = useState(amountsValues[selectedFrequency])
  const [selectedAmount, setSelectedAmount] = useState()

  useEffect(() => {
    setSelectedAmount(amounts[2])
    setAmounts(amountsValues[selectedFrequency])
  }, [amounts, selectedFrequency])

  const value = useMemo(() => {
    return {
      amounts,
      setAmounts,
      selectedAmount,
      setSelectedAmount,
      amountIndex: () => {
        return amounts.indexOf(selectedAmount)
      }
    }
  }, [amounts, selectedAmount])

  return (
    <AmountContext.Provider value={value}>
      { props.children }
    </AmountContext.Provider>
  )
}

export function useAmount() {
  const context = React.useContext(AmountContext)
  if (!context) {
    throw new Error('useAmount debe estar en el proveedor AmountContext')
  }
  return context
}