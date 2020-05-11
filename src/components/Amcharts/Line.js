import React from 'react';
import { Card } from 'react-bootstrap';
import AmCharts from "@amcharts/amcharts3-react";

const config = {
    "type": "serial",
    "theme": "light",
    "marginRight": 40,
    "marginLeft": 40,
    "autoMarginOffset": 20,
    "mouseWheelZoomEnabled": true,
    "valueAxes": [{
      "id": "v1",
      "axisAlpha": 0,
      "position": "left",
      "ignoreAxisWidth": true
    }],
    "balloon": {
      "borderThickness": 1,
      "shadowAlpha": 0
    },
    "graphs": [{
      "id": "g1",
      "balloon":{
        "drop": true,
        "adjustBorderColor": false,
        "color":"#ffffff"
      },
      "bullet": "round",
      "bulletBorderAlpha": 1,
      "bulletColor": "#FFFFFF",
      "bulletSize": 5,
      "hideBulletsCount": 50,
      "lineThickness": 2,
      "title": "red line",
      "useLineColorForBulletBorder": true,
      "valueField": "value",
      "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
    }],
    "chartScrollbar": {
      "graph": "g1",
      "oppositeAxis": false,
      "offset":30,
      "scrollbarHeight": 80,
      "backgroundAlpha": 0,
      "selectedBackgroundAlpha": 0.1,
      "selectedBackgroundColor": "#888888",
      "graphFillAlpha": 0,
      "graphLineAlpha": 0.5,
      "selectedGraphFillAlpha": 0,
      "selectedGraphLineAlpha": 1,
      "autoGridCount": true,
      "color":"#AAAAAA"
    },
    "chartCursor": {
      "pan": true,
      "valueLineEnabled": true,
      "valueLineBalloonEnabled": true,
      "cursorAlpha":1,
      "cursorColor":"#258cbb",
      "limitToGraph":"g1",
      "valueLineAlpha":0.2,
      "valueZoomable": true
    },
    "valueScrollbar":{
      "oppositeAxis": false,
      "offset":50,
      "scrollbarHeight":10
    },
    "categoryField": "date",
    "categoryAxis": {
      "parseDates": true,
      "dashLength": 1,
      "minorGridEnabled": true
    },
    "dataProvider": [
        {date: '1.1', value: 10},
        {date: '1.2', value: 9},
        {date: '1.3', value: 11},
        {date: '1.4', value: 13},
        {date: '1.5', value: 7},
    ]
};

function LineChart() {
    return (
        <Card>
            <AmCharts.React style={{ width: "100%", height: "350px" }} options={config} />
        </Card>
    );
}

export default LineChart;
