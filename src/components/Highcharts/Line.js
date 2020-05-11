import React from 'react';
import { Card } from 'react-bootstrap';
import ReactHighcharts from 'react-highcharts';

const config = {
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
    }]
};

function LineChart() {
    return (
        <Card>
            <ReactHighcharts config={config} />
        </Card>
    );
}

export default LineChart;
