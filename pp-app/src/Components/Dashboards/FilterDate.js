import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/fontawesome-free-solid'
import { Popover } from '@headlessui/react'
import datesValues from "../../Values/datesValues";
import { useMonthlySubscriptionStateContext } from "../../Context/MonthlySubscriptionStateContext";

const FilterDate = (props) => {
  const { year, setYear, month, setMonth, monthlyData} = useMonthlySubscriptionStateContext();
  console.log(monthlyData);

  const setFilter =(value, tittle) => {
    if (tittle === "Mes"){
      setMonth(value);
    }else{
      setYear(value);
    }
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
          {datesValues.map((dataItem) => (
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
                { (dataItem.tittle=="Mes") ?
                <>
                {monthlyData.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
                </>
                :
                <>
                {dataItem.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
                </>
               }
              </select>
            </label>
          ))}
      </Popover.Panel>
      </Popover>
    </>
  );
};

export default FilterDate;