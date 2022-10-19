import React from 'react';
import BarChart from './BarChart';
import { useOpenChartsContext } from '../../Context/OpenChartsContext';

export default function BarChartModule(props) {
  const {setShowBarChart} = useOpenChartsContext();

  return (
        <>    
         {props.label}  
         <div className="flex p-7 flex-[0_0_auto]" onClick={()=> setShowBarChart(true)}>
          <div class="chart-container" style={{position: 'relative', height:'50vh', width:'65vh'}}> 
            <BarChart></BarChart>
          </div>
        </div>     
  </>
  );
}

