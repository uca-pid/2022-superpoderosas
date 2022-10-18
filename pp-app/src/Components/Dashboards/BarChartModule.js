import React from 'react';
import {useMonthlySubscriptionStateContext} from  '../../Context/MonthlySubscriptionStateContext'
import BarChart from './BarChart';
import { useOpenChartsContext } from '../../Context/OpenChartsContext';

export default function BarChartModule(props) {
  const {setShowBarChart} = useOpenChartsContext();
  const { year } = useMonthlySubscriptionStateContext();

  return (
        <>    
        <div className="greyBg darkGrayBottomBorder flex  flex-col space-y-1 p-7">
          <div className="flex flex-[0_0_auto] pt-1 blackText font-Pop-SB uppercase text-lg md:text-xl tracking-wider font-medium">RESUMEN DE COBRANZAS</div>
          <div className="flex flex-[0_0_auto] blackText font-Pop-M uppercase text-lg md:text-xl tracking-wider font-medium">{year}</div>
        </div>  
         <button className="flex p-7 flex-[0_0_auto]" onClick={()=> setShowBarChart(true)}>
            <div class="chart-container" style={{position: 'relative', height:'50vh', width:'65vh'}}> 
              <BarChart data={props.data}></BarChart>
            </div>
          </button>     
  </>
  );
}

