import * as React from 'react';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';

const uData = [4000, 3000, 2000, 2780];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
];

export default function TinyBarChart() {
  return (
    <ChartContainer
      width={300}
      height={300}
      series={[{ data: uData, label: 'uv', type: 'bar' }]}
      xAxis={[{ scaleType: 'band', data: xLabels }]}
    >
      <BarPlot  />
    </ChartContainer>
  );
}
