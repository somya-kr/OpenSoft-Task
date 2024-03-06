import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const PieGraph = (props) => {
    return(
        <>
         <Pie data={props.data}/>
        </>
    ) 
}
export default PieGraph;