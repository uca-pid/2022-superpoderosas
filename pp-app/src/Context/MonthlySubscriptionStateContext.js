import React, { useState, useMemo } from 'react'
const MonthlySubscriptionStateContext = React.createContext()

export function MonthlySubscriptionStateContextProvider(props) {
  const [month, setMonth] = useState(new Date().getMonth() + 1)
  const [year, setYear] = useState(new Date().getFullYear())

  const value = useMemo(() => {
    return {
      month,
      setMonth,
      year, 
      setYear
    }
  }, [month, year])

  return (
    <MonthlySubscriptionStateContext.Provider value={value}>
      { props.children }
    </MonthlySubscriptionStateContext.Provider>
  )
}

export function useMonthlySubscriptionStateContext() {
  const context = React.useContext(MonthlySubscriptionStateContext)
  return context
}