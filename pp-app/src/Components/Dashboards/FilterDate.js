import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/fontawesome-free-solid'
import { Popover } from '@headlessui/react'
import DonationService from '../../services/donations.service'
import { useMonthlySubscriptionStateContext } from "../../Context/MonthlySubscriptionStateContext";

const FilterDate = (props) => {
  const { year, setYear, month, setMonth, setChartData, chartData } = useMonthlySubscriptionStateContext();

  // const incrementNumber = index => {
  //   setChartData(existingItems => {
  //     return [
  //       ...existingItems.slice(0, index),
  //       existingItems[index] + 1,
  //       ...existingItems.slice(index + 1),
  //     ]
  //   })
  // }

  // const setChartDataBasedOnMonthlySubs = (data) =>{
  //   data.data.map((item)=>{
  //       if(item.state=="A"){
  //         incrementNumber(0);
  //       }else if(item.state=="P"){
  //         incrementNumber(1);
  //       }else if(item.state=="C"){
  //         incrementNumber(2);
  //       }
  //     })
  //  }

  const setFilter =(value, tittle) => {
    if (tittle === "Mes"){
      setMonth(value);
    }else{
      setYear(value);
    }
    // DonationService.subscriptionsByMonth(month,year).then(res=>{setChartDataBasedOnMonthlySubs(res);});
  }
  const getValue =(tittle) => {
    if (tittle === "Mes"){
      return month;
    }else{
      return year;
    }
  }
  
  return (
    <>
      <Popover className={"grid relative"}>
      <Popover.Button className="justify-self-end lightgreyBgTranslucentHover rounded-3xl md:rounded-xl lg:basis-2/7 w-fit py-2 px-5 focus:ring-0" >
          <div className="justify-center flex z-50 space-x-4 overflow-hidden mx-auto lg:flex-row">
          <FontAwesomeIcon icon={faFilter} color="gray"/>
          </div>
      </Popover.Button>
      <Popover.Panel className={"p-10 absolute top-0 right-0 mt-16 p-3 rounded-lg almostWhiteBg grayBorder space-y-6 w-fit"} >
          {props.data.map((dataItem) => (
              <label className="flex gap-x-2 items-baseline">
              <span className="text-gray-700 font-Pop-R">{dataItem.tittle}</span>
              <select
                className="rounded-md border-gray-300 shadow-sm focus:border-gray-300 focus:ring-0"
                name={dataItem.tittle}
                value={getValue(dataItem.tittle)}
                onChange={e => {
                  setFilter(e.target.value, dataItem.tittle)
                }}
              >
                <option className={"font-Pop-R"} value="">Seleccionar</option>
                {dataItem.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          ))}
      </Popover.Panel>
      </Popover>
    </>
  );
};

export default FilterDate;