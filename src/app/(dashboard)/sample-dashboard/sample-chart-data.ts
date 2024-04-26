import { ChartData } from '@/components/dashboard/sample-dashboard/Chart';

// Generate random data for the chart
export function sampleChartData(numDays: number): ChartData[] {
  const currentDate = new Date();
  const chartData: ChartData[] = [];

  for (let i = 0; i < numDays; i++) {
    const date = new Date();
    date.setDate(currentDate.getDate() - i);

    chartData.push({
      date: date.toISOString().slice(0, 10),
      price: Math.floor(Math.random() * 5000),
    });
  }

  return chartData;
}
