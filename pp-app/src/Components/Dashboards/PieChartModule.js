import React from 'react';
import {useMonthlySubscriptionStateContext} from  '../../Context/MonthlySubscriptionStateContext'
import PieChart from './PieChart';
import { useOpenChartsContext } from '../../Context/OpenChartsContext';

export default function PieChartModule(props) {
  const {setShowPieChart} = useOpenChartsContext();
  const { chartData } = useMonthlySubscriptionStateContext();

  const noChartData = ( ) => {
      var sum =0;
      chartData.map((item) => {
        sum=sum+item;
      })
      return sum ===0;
  }

  return (
    <>     
           {props.label}
           <div className="flex p-7 flex-[0_0_auto]" onClick={()=>{if(!noChartData()) setShowPieChart(true)}}>
              {!(noChartData()) ?
                <PieChart legendSize="16" ></PieChart>
                :
                <div className='text-center font-Pop-R text-xl text-gray-400'>
                  No hay datos para mostrar para el mes y año seleccionados.
                </div>
              } 
            </div>
            
    </>
  );
}

