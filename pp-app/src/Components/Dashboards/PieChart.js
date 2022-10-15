import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Activas', 'Pausadas', 'Canceladas'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(88, 214, 141)',
        'rgba(244, 208, 63)',
        'rgba(236, 112, 99)',
      ],
      borderColor: [
        'rgba(88, 214, 141)',
        'rgba(244, 208, 63)',
        'rgba(236, 112, 99)',
      ],
    },
  ],
};

export default function PieChart() {
  return (
    <Pie data={data}/>
  )
  ;
}