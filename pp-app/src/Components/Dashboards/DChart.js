import React from 'react';
import Chart from 'chart.js';
import { useEffect } from 'react';

export default function DChart() {
  useEffect(() => {
    let config = {
      type: "doughnut",
      data: {
        labels: ['Activas', 'Pausadas', 'Canceladas'],
        datasets: [
          {
            data: [12, 19, 3],
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
      },
    };
    let ctx = document.getElementById("doughnut");
    window.myBar = new Chart(ctx, config);
  }, []);
  return (
    <>
              <canvas id="doughnut"></canvas>
    </>
  );
}

