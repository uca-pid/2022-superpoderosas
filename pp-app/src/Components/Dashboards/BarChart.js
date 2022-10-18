import React from 'react';
import Chart from 'chart.js';
import { useEffect } from 'react';
import {useMonthlySubscriptionStateContext} from  '../../Context/MonthlySubscriptionStateContext'
import datesValues from '../../Values/datesValues';

export default function BarChart(props) {
  const { monthlyAmounts } = useMonthlySubscriptionStateContext();
  const getLabel = (option) => {
    return option.label;
  }

  useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: Array.from(datesValues[0].options,(option) => getLabel(option)),
        datasets: [
          {
            label: 'RESUMEN DE COBRANZAS',
            data: monthlyAmounts,
            backgroundColor: [
              'rgba(88, 214, 141)',
              'rgba(244, 208, 63)',
              'rgba(236, 112, 99)',
              'rgba(235, 152, 78)',
              'rgba(69, 179, 157)',
              'rgba(175, 122, 197)',
              'rgba(118, 215, 196)',
              'rgba(84, 153, 199)',
              'rgba(245, 176, 65)',
              'rgba(212, 225, 87)',
              'rgba(133, 193, 233 )',
              'rgba(240, 98, 146)',
            ]
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
    let ctx = document.getElementById("bar").getContext('2d');
    window.myBar = new Chart(ctx, config);
  }, []);
  return (
    <>
      <canvas id="bar"></canvas>
    </>
  );
}

