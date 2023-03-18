import Chart from "../Charts/Chart";

const ExpensesChart = (props) => {
  const chartData = [
    { id: 10, month: "jan", value: 0 },
    { id: 20, month: "feb", value: 0 },
    { id: 30, month: "mar", value: 0 },
    { id: 40, month: "apr", value: 0 },
    { id: 50, month: "may", value: 0 },
    { id: 60, month: "jun", value: 0 },
    { id: 70, month: "jul", value: 0 },
    { id: 80, month: "aug", value: 0 },
    { id: 90, month: "sep", value: 0 },
    { id: 100, month: "oct", value: 0 },
    { id: 110, month: "nov", value: 0 },
    { id: 120, month: "dec", value: 0 },
  ];

  for (let i = 0; i < props.data.length; i++) {
    const monthIndex = new Date(props.data[i].date).getMonth();
    chartData[monthIndex].value += props.data[i].price; 
  }

  return <Chart items={chartData} />;
};

export default ExpensesChart;
