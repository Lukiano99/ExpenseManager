import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((data) => data.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPont) => (
        <ChartBar
          key={dataPont.label}
          value={dataPont.value}
          maxValue={totalMaximum}
          label={dataPont.label}
        />
      ))}
    </div>
  );
};

export default Chart;
