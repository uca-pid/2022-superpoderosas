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
            label: 'ESTADO DE LAS SUBSCRIPCIONES',
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

