import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const HourlyChart = ({ forecast }) => {
  const data = forecast.slice(0, 8).map((item) => ({
    time: item.dt_txt.slice(11, 16),
    temp: item.main.temp,
  }));

  return (
    <div className="chart-container">
      <h2>Hourly temperature</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="temp" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HourlyChart;