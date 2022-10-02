import React, { useState, useMemo, useEffect } from 'react'
import subscriptionPeriod from '../Values/subscriptionPeriod'
const SubscriptionContext = React.createContext()

export function SubscriptionContextProvider(props) {
  const [subsPeriod, setSubsPeriod] = useState('')
  const [paymentDay, setPaymentDay] = useState(null)

  useEffect(() => {
    setSubsPeriod(subscriptionPeriod[0]);
    setPaymentDay(null);
  }, [])

  const value = useMemo(() => {
    return {
      subsPeriod,
      setSubsPeriod,
      paymentDay, 
      setPaymentDay
    }
  }, [subsPeriod, paymentDay])

  return (
    <SubscriptionContext.Provider value={value}>
      { props.children }
    </SubscriptionContext.Provider>
  )
}

export function useSubscriptionPeriod() {
  const context = React.useContext(SubscriptionContext)
  if (!context) {
    throw new Error('useAmount debe estar en el proveedor SubscriptionContext')
  }
  return context
}