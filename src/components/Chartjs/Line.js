import React from 'react';
import { Card } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';

const state = {
    labels: ['January', 'February', 'March', 'April', 'May', '8888'],
    datasets: [
        {
            label: 'Rainfall',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(200,200,0,1)',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56, 60]
        }
    ]
}

function LineChart() {
    return (
        <Card>
            <Line
                height={250}
                data={state}
                options={{
                    title:{
                        display:true,
                        text:'Average Rainfall per month',
                        fontSize:20
                    },
                    legend:{
                        display:true,
                        position:'bottom'
                    }
                }}
            />
        </Card>
    );
}

export default LineChart;
