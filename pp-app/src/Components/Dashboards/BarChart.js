import React from 'react';
import Chart from 'chart.js';
import { useEffect, useState } from 'react';
import AdminServices from '../../services/transactions.service'
import {useMonthlySubscriptionStateContext} from  '../../Context/MonthlySubscriptionStateContext'
import axios from "axios";
const API_URL = "http://localhost:8080/api/payment/";

export default function BarChart(props) {
  const { chartData, year,month } = useMonthlySubscriptionStateContext();
  const [data, setData] = React.useState([])

  const getLabel = (option) => {
    return option.label;
  }
  
  const get = (e) =>{
    var date= "2022-10"
    for (var i = 0; i < 12; i++) {
      data.push(axios.post(API_URL + "getMonthIncome", {
        date,
      }))
    }
    Promise.all(data).then(() => {
        console.log('done')
    })
  }
  useEffect(() => {
    get()
    let config = {
      type: "bar",
      label: 'RESUMEN DE COBRANZAS',
      data: {
        labels: Array.from(props.data[0].options,(option) => getLabel(option)),
        datasets: [
          {
            data: [23,533,823,538,15,249,240,200,487,650,764,357],
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
        maintainAspectRatio: true,
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
  }, [chartData]);
  return (
    <>
      <canvas id="bar"></canvas>
    </>
  );
}

