import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const BarGraph = (props) => {
    return(
        <>
         <Bar data={props.data}/>
        </>
    ) 
}
export default BarGraph;