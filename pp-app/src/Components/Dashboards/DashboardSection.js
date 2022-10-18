import React from "react";
import PieChartModule from "./PieChartModule";
import BarChartModule from "./BarChartModule";
import TotalAmountModule from "./TotalAmountModule";
import { useOpenChartsContext } from "../../Context/OpenChartsContext";
import ChartModal from "./ChartsModal";
import BarChart from "./BarChart";

const DashboardSection = () => {
  const {showBarChart} = useOpenChartsContext();
  const data=[
  {tittle: "Mes",options:[{ value: '1', label: 'Enero'},
  { value: 2, label: 'Febrero'},
  { value: 3, label: 'Marzo'},
  { value: 4, label: 'Abril'},
  { value: 5, label: 'Mayo'},
  { value: 6, label: 'Junio'},
  { value: 7, label: 'Julio'},
  { value: 8, label: 'Agosto'},
  { value: 9, label: 'Septiembre'},
  { value: 10, label: 'Octubre'},
  { value: 11, label: 'Noviembre'},
  { value: 12, label: 'Diciembre'}]
  },
  {tittle: "Año",options:[
  { value: 2021, label: '2021'},
  { value: 2022, label: '2022'},]
  }
  ];

  return (
    <>
        <div className="px-5 md:px-20 lg:px-80 flex flex-col lg:flex-row w-full lg:space-x-10 space-y-10 lg:space-y-0"> 
        {showBarChart ? 
         <ChartModal chart={<BarChart data={data}></BarChart>}></ChartModal>   
        :
        <></>}
            <div className="lg:basis-1/2 flex flex-col space-y-10">
            <div className="darkGrayBorder rounded-lg h-fit">
                <PieChartModule data={data}></PieChartModule>
            </div>
            </div>
            <div className="lg:basis-1/2 flex flex-col space-y-10 pb-10">
            <div className="darkGrayBorder rounded-lg h-fit">
                <TotalAmountModule data={data}></TotalAmountModule>
            </div>
            <div className="lg:basis-1/2 darkGrayBorder rounded-lg h-fit lg:mb-0"> 
                <BarChartModule data={data}></BarChartModule> 
            </div>
            </div>         
       </div>
    </>
  );
};
export default DashboardSection;

