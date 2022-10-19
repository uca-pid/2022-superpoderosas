import React from 'react';
import Chart from 'chart.js';
import { useEffect } from 'react';
import {useMonthlySubscriptionStateContext} from  '../../Context/MonthlySubscriptionStateContext'

export default function PieChart(props) {
  const { monthlyData, year,month } = useMonthlySubscriptionStateContext();

  const pieChartData = () =>{
    for (const md of monthlyData){
      if(md.value == month){
          return md.subsStates;
      }
    }
  }

  useEffect(() => {
    let config = {
      type: "pie",
      data: {
        labels: ['Activas','Pausadas','Canceladas'],
        datasets: [
          {
            label: 'ESTADO DE LAS SUBSCRIPCIONES',
            data: pieChartData(),
            backgroundColor: [
              'rgba(88, 214, 141)',
              'rgba(244, 208, 63)',
              'rgba(236, 112, 99)',
            ],
            hoverOffset: 4
          },
        ],
      },
      options: {
        maintainAspectRatio: true,
        responsive: true,
      }
    };
    let ctx = document.getElementById("pie").getContext('2d');
    ctx.height = 1000;
    window.myBar = new Chart(ctx, config);
  }, [monthlyData]);
  return (
    <>
      <canvas id="pie"></canvas>
    </>
  );
}

