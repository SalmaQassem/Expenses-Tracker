import "./Chart.css";
import Card from "../UI/Card";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const max = Math.max(...props.items.map((item) => item.value));
  return (
    <Card className="expenses-chart">
      {props.items.map((item) => (
        <ChartBar
          key={item.id}
          value={item.value}
          monthName={item.month}
          maxValue={max}
        />
      ))}
    </Card>
  );
};
export default Chart;
