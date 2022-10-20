import React from 'react';
import PieChart from './PieChart';
import { useOpenChartsContext } from '../../Context/OpenChartsContext';

export default function PieChartModule(props) {
  const {setShowPieChart} = useOpenChartsContext();

  return (
    <>     
           {props.label}
            <div className="flex p-7 flex-[0_0_auto]" onClick={() => setShowPieChart(true)}>             
                <PieChart legendSize="16"></PieChart>
            </div>
            
    </>
  );
}

