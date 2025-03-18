import * as React from 'react';
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';

export default function BasicArea() {
  return (
    <LineChart
      xAxis={[{ data: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,] }]}
      series={[
        {
            curve: "linear",
          data: [1, 2, 5, 6, 2, 3, 6, 7,],
          area: true,
        },
      ]}
      width={450}
      height={300}
      grid={{ vertical: true, horizontal: true }}
      yAxis={[{
        colorMap: {
            type: 'continuous',
            min: -10,
            max: 20,
            color: ['transparent', '#25CD25'],
          }
      }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          strokeDasharray: '10 5',
          strokeWidth: 4,
        }
      }}
      
    />
  );
}
