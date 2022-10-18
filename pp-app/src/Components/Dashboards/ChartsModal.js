import React from 'react';
import { useOpenChartsContext } from '../../Context/OpenChartsContext';

export default function ChartModal(props) {
    const {setShowBarChart} = useOpenChartsContext();
  return (
    <>
    <div className="darkGreyBg justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="my-6 mx-auto max-w-3xl p-10 bg-white rounded-xl w-10/12 flex flex-col">
        <button onClick={()=>setShowBarChart(false)} className="font-Pop-SB text-gray-500 text-end px-10">X</button>
         <div className="flex p-7 flex-[0_0_auto]">
            <div class="chart-container" style={{position: 'relative', height:'60vh', width:'100vh'}}> 
                {props.chart}
            </div>
          </div>
      </div>
    </div>
  </>
  );
}

