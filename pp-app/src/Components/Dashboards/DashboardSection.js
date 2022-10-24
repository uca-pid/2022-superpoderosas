import React from "react";
import PieChartModule from "./PieChartModule";
import BarChartModule from "./BarChartModule";
import TotalAmountModule from "./TotalAmountModule";
import { useOpenChartsContext } from "../../Context/OpenChartsContext";
import ChartModal from "./ChartsModal";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import ChartLabels from "./ChartLabels";
import { useMonthlySubscriptionStateContext } from "../../Context/MonthlySubscriptionStateContext";
import Card from "../Utiles/Card";
import datesValues from "../../Values/datesValues";
import TwoColumnsPage from "../Utiles/TwoColumnsPage";
import {
  Button,
  Tooltip
} from "@material-tailwind/react";

const DashboardSection = () => {
  const {showBarChart, showPieChart} = useOpenChartsContext();
  const { BarChartLabel, PieChartLabel } = ChartLabels();
  const { year, month } = useMonthlySubscriptionStateContext();
  return (
    <div> 
        {(showBarChart) ? 
         <ChartModal 
            chart={<BarChart ></BarChart>} 
            chartContainerStyle={{ height:'60vh', width:'100vh'}}
            label = {BarChartLabel}/>   
        :
        <></>}
        {(showPieChart)? 
         <ChartModal 
            chart={<PieChart legendSize="20"></PieChart>} 
            chartContainerStyle={{ height:'60vh', width:'100vh'}}
            label = {PieChartLabel}/>
        : 
        <></>
        }
        <TwoColumnsPage
            column1={
                <>
                <Card 
                title="estado de las subscripciones" 
                subtitle={datesValues[0].options[month - 1].label + " de " + year}
                content={
                    <div class="flex flex-col">
                    <Tooltip className={"font-Pop-R w-40 p-3"} content="Haz click en cualquier gráfico para expandirlo" placement="right-start">
                    <Button className={"w-fit self-end h-fit shadow-none"} class="flex h-3 w-3 self-end" data-tooltip-target="tooltip-right" data-tooltip-placement="right" type="button" >
                        <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[#7BA391] opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-[#7BA391]"></span>
                    </Button>
                    </Tooltip>
                    <PieChartModule label={PieChartLabel}></PieChartModule>
                    </div>}
                />
                <Card 
                    title={
                        (month<(new Date().getMonth() + 1) && year===(new Date().getFullYear()))?
                        "IMPORTE TOTAL COBRADO"
                        :
                        "IMPORTE TOTAL A COBRAR"
                        }
                    subtitle={datesValues[0].options[month-1].label + " de " + year}
                    content={<TotalAmountModule></TotalAmountModule>}
                />
                </>
            }
            column2={
                <Card
                title="REPORTE COBRANZAS"
                subtitle = {year}
                content={<BarChartModule></BarChartModule>}
            />
            }
        />
              
    </div>
  );
};
export default DashboardSection;

