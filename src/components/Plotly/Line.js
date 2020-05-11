import React from 'react';
import { Card } from 'react-bootstrap';
import Plot from 'react-plotly.js';

function LineChart() {
    return (
        <Card>
            <Plot
                data={[
                {
                    x: [1, 2, 3],
                    y: [2, 6, 3],
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'red'},
                },
                ]}
                layout={ {
                    height: 350, 
                    title: 'A Fancy Plot', 
                    margin: {
                        l:20,
                        r:20,
                        t:80,
                        b:30
                    }
                } }
            />
        </Card>
    );
}

export default LineChart;
