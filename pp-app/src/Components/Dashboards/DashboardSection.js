import React from "react";
import PieChartModule from "./PieChartModule";
import BarChartModule from "./BarChartModule";
import TotalAmountModule from "./TotalAmountModule";
import { useOpenChartsContext } from "../../Context/OpenChartsContext";
import ChartModal from "./ChartsModal";
import BarChart from "./BarChart";

const DashboardSection = () => {
  const {showBarChart} = useOpenChartsContext();
  return (
    <>
        <div className="px-10 md:px-20 lg:px-80 flex flex-col lg:flex-row w-full lg:space-x-10 space-y-10 lg:space-y-0"> 
        {showBarChart ? 
         <ChartModal chart={<BarChart ></BarChart>}></ChartModal>   
        :
        <></>}
            <div className="lg:basis-1/2 flex flex-col space-y-10">
            <div className="darkGrayBorder rounded-lg h-fit">
                <PieChartModule ></PieChartModule>
            </div>
            </div>
            <div className="lg:basis-1/2 flex flex-col space-y-10 pb-10">
              <div className="darkGrayBorder rounded-lg h-fit">
                  <TotalAmountModule ></TotalAmountModule>
              </div>
              <div className="darkGrayBorder rounded-lg h-fit lg:mb-0"> 
                  <BarChartModule ></BarChartModule> 
              </div>
            </div>         
       </div>
    </>
  );
};
export default DashboardSection;
