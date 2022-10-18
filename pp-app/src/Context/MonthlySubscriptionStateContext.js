import React, { useState, useMemo, useEffect } from 'react'
import DonationService from '../services/donations.service'
import AdminServices from '../services/transactions.service'
import datesValues from '../Values/datesValues'
const MonthlySubscriptionStateContext = React.createContext()


export function MonthlySubscriptionStateContextProvider(props) {
  const [month, setMonth] = useState(new Date().getMonth() + 1)
  const [year, setYear] = useState(new Date().getFullYear())
  const [ chartData, setChartData ] = useState([]);
  const [monthlyAmounts, setMonthlyAmounts] = useState([]);

  const setMonthsIncome = ()=>{
    const a=[];
    datesValues[0].options.map((m)=>{
      AdminServices.getMonthIncome(m.value).then((res)=>{a.push(res.data.total)})
    })
    setMonthlyAmounts(a);
  }

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
  const setChartDataBasedOnMonthlySubs = (res) =>{
    initializeChartData();
    res.data.map((item)=>{
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
    AdminServices.getMonthIncome(10).then((res)=>{console.log("NCIE TRUE"+res.data.total+10);})
    setMonthsIncome();
  }, [month,year])

  const value = useMemo(() => {
    return {
      month,
      setMonth,
      year, 
      setYear,
      chartData,
      setChartData,
      monthlyAmounts
    }
  }, [month, year, chartData, monthlyAmounts])

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