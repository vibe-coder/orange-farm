import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';


export default function BasicGauges() {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
      <Gauge width={300} height={130} value={84} cornerRadius={50}  startAngle={-90} endAngle={90} innerRadius={92} 

            sx={{
              [`& .${gaugeClasses.valueText}`]:{
                fontSize: 40,
                fontWeight: 'medium',
                marginTop: 40,
                transform: 'translate(0px, -20px)'
              },
              [`& .${gaugeClasses.valueArc}`]: {
                fill: '#FFCD71',
              },
              [`& .${gaugeClasses.referenceArc}`]: {
                fill: '#FFF7E8',
              },
            }}
      />
    </Stack>
  );
}


