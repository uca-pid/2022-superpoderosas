import React from "react";
import PieChartModule from "./PieChartModule";
import BarChartModule from "./BarChartModule";
import TotalAmountModule from "./TotalAmountModule";
import { useOpenChartsContext } from "../../Context/OpenChartsContext";
import ChartModal from "./ChartsModal";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import ChartLabels from "./ChartLabels";

const DashboardSection = () => {
  const {showBarChart, showPieChart} = useOpenChartsContext();
  const { BarChartLabel, PieChartLabel } = ChartLabels();
  return (
    <>
    <div className="px-10 md:px-20 lg:px-80 flex flex-col lg:flex-row w-full lg:space-x-10 space-y-10 lg:space-y-0"> 
        {(showBarChart) ? 
         <ChartModal 
            chart={<BarChart ></BarChart>} 
            chartContainerStyle={{ height:'60vh', width:'100vh'}}
            label = {BarChartLabel}/>   
        :
        <></>}
        {(showPieChart)? 
         <ChartModal 
            chart={<PieChart ></PieChart>} 
            chartContainerStyle={{ height:'60vh', width:'100vh'}}
            label = {PieChartLabel}/>
        : 
        <></>
        }
        <div className="lg:basis-1/2 flex flex-col space-y-10">
        <div className="darkGrayBorder rounded-lg h-fit">
            <PieChartModule 
                label={PieChartLabel}
            />
        </div>
        </div>
        <div className="lg:basis-1/2 flex flex-col space-y-10 pb-10">
            <div className="darkGrayBorder rounded-lg h-fit">
                <TotalAmountModule ></TotalAmountModule>
            </div>
            <div className="darkGrayBorder rounded-lg h-fit lg:mb-0"> 
                <BarChartModule
                label={BarChartLabel}
                />
            </div>
        </div>         
    </div>
    </>
  );
};
export default DashboardSection;

