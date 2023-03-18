import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar-inner">
        <div className="chart-bar-fill" style={{ height: barFillHeight }}></div>
      </div>
      <p className="chart-bar-month">{props.monthName}</p>
    </div>
  );
};
export default ChartBar;
