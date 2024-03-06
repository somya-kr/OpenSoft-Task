import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const LineGraph = (props) => {
    return(
        <>
         <Line data={props.data}/>
        </>
    ) 
}
export default LineGraph;
