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
                content={<PieChartModule label={PieChartLabel}></PieChartModule>}
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

