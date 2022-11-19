import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'

function Chart(props) {
    // datapoints coming in are objects, so we need to map over each object and
    // only pull out the value property
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    // this new array needs to be spread out as standalone numbers to Math.max
    const totalMax = Math.max(...dataPointValues);

    const chartElements = props.dataPoints.map(dataPoint => {
        return <ChartBar
            value={dataPoint.value}
            maxValue={totalMax}
            label={dataPoint.label}
            key={dataPoint.label}
        />
    });
    return (
        <div className="chart">
            {chartElements}
        </div>
    )
};

export default Chart;