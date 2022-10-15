import React from 'react';
import {useMonthlySubscriptionStateContext} from  '../../Context/MonthlySubscriptionStateContext'
import DChart from './DChart';

export default function DChartModule() {
  const { year, month } = useMonthlySubscriptionStateContext();
  return (
    <>      
            <div className="flex flex-[0_0_auto] pt-10 blackText font-Pop-M uppercase text-lg md:text-xl tracking-wider font-medium">% de subscripciones</div>
              <div className="flex flex-[0_0_auto] blackText font-Pop-M uppercase text-lg md:text-xl tracking-wider font-medium">{month}/{year}</div>

    <div className="flex pt-10 lg:px-6 flex-[0_0_auto]"> 
              <DChart></DChart>
            </div>
            
    </>
  );
}

