import React from 'react';
import {useMonthlySubscriptionStateContext} from  '../../Context/MonthlySubscriptionStateContext'
import BarChart from './BarChart';

export default function BarChartModule(props) {
  const { year, month } = useMonthlySubscriptionStateContext();

  return (
        <>    
        <div className="greyBg darkGrayBottomBorder flex  flex-col space-y-1 p-7">
        <div className="flex flex-[0_0_auto] pt-1 blackText font-Pop-SB uppercase text-lg md:text-xl tracking-wider font-medium">RESUMEN DE COBRANZAS</div>
        <div className="flex flex-[0_0_auto] blackText font-Pop-M uppercase text-lg md:text-xl tracking-wider font-medium">{year}</div>
 
        </div>  
         <div className="flex p-7 flex-[0_0_auto]"> 
            <BarChart></BarChart>
          </div>
          
  </>
  );
}

