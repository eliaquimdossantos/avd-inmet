import { Line } from "react-chartjs-2";
import zoomPlugin from 'chartjs-plugin-zoom';

import {
  Chart, LineElement, BarElement, PointElement,
  BarController, BubbleController, DoughnutController,
  LineController, PieController, PolarAreaController,
  RadarController, ScatterController, CategoryScale,
  LinearScale, LogarithmicScale, RadialLinearScale,
  TimeScale, TimeSeriesScale, Decimation, Filler, Legend,
  Title, Tooltip, SubTitle
} from 'chart.js';

Chart.register(
  LineElement, BarElement, PointElement, BarController,
  BubbleController, DoughnutController, LineController,
  PieController, PolarAreaController, RadarController,
  ScatterController, CategoryScale, LinearScale,
  LogarithmicScale, RadialLinearScale, TimeScale,
  TimeSeriesScale, Decimation, Filler, Legend, Title,
  Tooltip, SubTitle, zoomPlugin
);

export default function Grafico({ cityData }) {
  const tempColor = 'rgb(235, 73, 45)'
  const umidColor = 'rgb(98, 173, 230)'

  const data = {
    labels: cityData.labels,
    datasets: [
      {
        label: "Média de temperatura c/ chuva",
        data: cityData.temperatura_c_chuva,
        fill: false,
        pointBackgroundColor: tempColor,
        pointStyle: 'triangle',
        pointRadius: 4,
        pointHoverRadius: 7,
        yAxisID: 'y',
        showLine: false
      },
      {
        label: "Média de temperatura s/ chuva",
        data: cityData.temperatura_s_chuva,
        fill: false,
        borderColor: 'rgb(235, 72, 45, 0.5)',        
        pointBackgroundColor: tempColor,
        backgroundColor: 'rgb(255, 255, 255,0)',
        pointBorderWidth: 0,
        yAxisID: 'y',
        showLine: true,
        pointRadius: 2,
        pointHoverRadius: 7,
        spanGaps: true,
        tension: 0.2
      },
      {
        label: "Umidade c/ chuva",
        data: cityData.umidade_c_chuva,
        fill: false,                
        pointBackgroundColor: umidColor,        
        pointStyle: 'triangle',
        pointRadius: 4,
        pointHoverRadius: 7,
        yAxisID: 'y1',
        showLine: false
      },
      {
        label: "Umidade s/ chuva",
        data: cityData.umidade_s_chuva,
        fill: false,
        borderColor: 'rgb(98, 173, 230, 0.6)',
        backgroundColor: 'rgb(255, 255, 255,0)',
        pointBackgroundColor: umidColor,
        pointBorderWidth: 0,
        yAxisID: 'y1',
        showLine: true,
        pointRadius: 2,
        pointHoverRadius: 7,
        spanGaps: true,
        tension: 0.2
      }
    ],
  }

  const options = {
    animation: false,
    responsive: true,
    aspectRatio: 2.6,
    maintainAspectRatio: true,
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          text: 'Temperatura (°C)',
          display: true
        },
        suggestedMax: 37,
        suggestedMin: 22,
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        title: {
          text: 'Umidade (%)',
          display: true
        },
        suggestedMax: 100,
        suggestedMin: 10
      }
    },
    plugins: {      
      legend: {
        labels: {
          usePointStyle: true,
        },
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true // SET SCROOL ZOOM TO TRUE
          },
          mode: "x",
          speed: 100
        },
        pan: {
          enabled: true,
          mode: "x",
          speed: 100
        }
      }
    }
  }

  return (
    <div>
      <Line
        data={data}
        options={options}        
      />
    </div>
  );
};