import React from 'react';
import Chart from 'chart.js';
import { useEffect } from 'react';
import {useMonthlySubscriptionStateContext} from  '../../Context/MonthlySubscriptionStateContext'

export default function PieChart(props) {
  const { chartData } = useMonthlySubscriptionStateContext();

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
              'rgba(165, 192, 135)',
              'rgba(131, 157, 154)',
              'rgba(235, 131, 1)',
            ],
            hoverOffset: 4,
            hoverBackgroundColor: [
              "#87AB5F",
              "#AFC0BE",
              "#FE9A20"
            ],            
          },
        ],
      },  
      options: {
        maintainAspectRatio: true,
        responsive: true,
        legend: {
          position: 'left',
          labels: {
            boxWidth: 10,
            fontSize: Number(props.legendSize),
            fontFamily: 'Poppins-Regular',
          }
        },
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



