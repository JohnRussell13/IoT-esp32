import { useSelector } from 'react-redux';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import myStyle from './styles';

const Chart = () => {
  
  const historicData = useSelector((state) => state.historic);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom'
      },
    },
    scales: {
      xAxes: {
        grid: {
          display: true,
          color: '#555555',
        }
      },
      yAxes: {
        type: 'linear',
        display: true,
        grid: {
          display: true,
          color: '#555555',
        }
      }
    },
  };
  
  const labels = historicData.reverse().map((obj) => {
    const date = new Date(obj.createdAt);
    return date.getHours() + ':' + date.getMinutes();
  });
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Moisture',
        data: historicData.reverse().map((obj) => {return obj.moist}),
        borderColor: '#21c8a7',
        backgroundColor: '#21c8a7',
        xAxisID: 'xAxes',
        yAxisID: 'yAxes',
      },
      {
        label: 'Light Intensity',
        data: historicData.reverse().map((obj) => {return obj.light}),
        borderColor: '#c8a721',
        backgroundColor: '#c8a721',
        xAxisID: 'xAxes',
        yAxisID: 'yAxes',
      },
      {
        label: 'Temperature',
        data: historicData.reverse().map((obj) => {return obj.temp}),
        borderColor: '#a721c8',
        backgroundColor: '#a721c8',
        xAxisID: 'xAxes',
        yAxisID: 'yAxes',
      },
    ],
  };

  return(
      <>
      {
        !historicData.length ? 
          <p style={myStyle.loading}>Loading</p>
        : 
          <>
            <div style={myStyle.main} align="center">
              <p style={myStyle.title}>History Chart</p>

              <Line options={options} data={data} />
            </div>
          </>
      }
      </>
  );
}

export default Chart;