import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {useCrypto} from "../../context/CryptoContext"

ChartJS.register(ArcElement, Tooltip, Legend);
const CryptoChart = () => {
    const {assets} = useCrypto()
const data = {
  labels: assets.map((a) => a.name),
  datasets: [
    {
      label: '# of Votes',
      data: assets.map((a)=> a.totalAmount),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

    return ( 
    <div style={{}}><Pie data={data} ></Pie></div>);
}
 
export default CryptoChart;