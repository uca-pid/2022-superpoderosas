import React from 'react';
import {useMonthlySubscriptionStateContext} from  '../../Context/MonthlySubscriptionStateContext'
import PieChart from './PieChart';
import { useOpenChartsContext } from '../../Context/OpenChartsContext';

export default function PieChartModule(props) {
  const {setShowPieChart} = useOpenChartsContext();

  return (
    <>     
           {props.label}
           {/* <div className="flex p-7 flex-[0_0_auto]" onClick={()=>{if(!noChartData()) setShowPieChart(true)}}>
              {!(noChartData()) ?
                <PieChart></PieChart>
                :
                <div className='text-center font-Pop-R text-xl text-gray-400'>
                  No hay datos para mostrar para el mes y año seleccionados.
                </div>
              } 
            </div> */}
            <div className="flex p-7 flex-[0_0_auto]" onClick={() => setShowPieChart(true)}>             
                <PieChart></PieChart>
            </div>
            
    </>
  );
}

