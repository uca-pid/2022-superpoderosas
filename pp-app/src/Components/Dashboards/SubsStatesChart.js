import React from 'react';
import Chart from 'chart.js';
import { useEffect } from 'react';
import {useMonthlySubscriptionStateContext} from  '../../Context/MonthlySubscriptionStateContext'

export default function SubsStatesChart(props) {
  const { chartData, year,month } = useMonthlySubscriptionStateContext();

  useEffect(() => {
    let config = {
      type: "pie",
      data: {
        labels: ['Activas','Pausadas','Canceladas'],
        datasets: [
          {
            data: chartData,
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
        plugins: {
          datalabels: {
              formatter: (value, ctx) => {
                let sum = 0;
                let dataArr = ctx.chart.data.datasets[0].data;
                dataArr.map((item) => {
                    sum += item;
                });
                let percentage = ((value*100 / sum).toFixed(2)).toString()+"%";
                return percentage;
            },
            color: '#fff',
          }
        }
      }
    };
    let ctx = document.getElementById("pie").getContext('2d');
    ctx.height = 1000;
    window.myBar = new Chart(ctx, config);
  }, [chartData]);
  return (
    <>
      <canvas id="pie"></canvas>
    </>
  );
}

