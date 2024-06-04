import React from 'react';
import { Grid, Box } from '@mui/material';

function TopMetrics() {
  const metrics = [
    { label: 'Temperature', value: 10 },
    { label: 'Precipitation', value: 10 },
    { label: 'Wind Speed', value: 10 },
    { label: 'Pressure', value: 10 },
  ];

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ width: '100%', margin: '20px 0' }}>
      {metrics.map((metric, index) => (
        <Grid item key={index}>
          <Box
            sx={{
              padding: '10px 20px',
              border: '1px solid lightgrey',
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              color: 'white',
              minWidth: '150px',
              textAlign: 'center',
            }}
          >
            {metric.label}: {metric.value}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default TopMetrics;
