import React, { useState, useMemo, useEffect } from 'react'
import DonationService from '../services/donations.service'
const MonthlySubscriptionStateContext = React.createContext()

export function MonthlySubscriptionStateContextProvider(props) {
  const [month, setMonth] = useState(new Date().getMonth() + 1)
  const [year, setYear] = useState(new Date().getFullYear())
  const [ chartData, setChartData ] = useState([]);

  const incrementNumber = index => {
    setChartData(existingItems => {
      return [
        ...existingItems.slice(0, index),
        existingItems[index] + 1,
        ...existingItems.slice(index + 1),
      ]
    })
  }
  const initializeChartData = () =>{
    setChartData([0,0,0]);
  }
  const setChartDataBasedOnMonthlySubs = (data) =>{
    initializeChartData();
    data.data.map((item)=>{
        if(item.state=="A"){
          incrementNumber(0);
        }else if(item.state=="P"){
          incrementNumber(1);
        }else if(item.state=="C"){
          incrementNumber(2);
        }
      })
   }
  
  useEffect(() => {
    DonationService.subscriptionsByMonth(month,year).then(res=>{setChartDataBasedOnMonthlySubs(res);});
  }, [month,year])

  const value = useMemo(() => {
    return {
      month,
      setMonth,
      year, 
      setYear,
      chartData,
      setChartData
    }
  }, [month, year, chartData])

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