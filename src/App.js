import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { theme as muiTheme } from './styles/theme/muiTheme';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MUIThemeProvider } from '@mui/material';
import { theme } from './styles/theme/themes';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import PredictionForm from './components/Form/predictionForm';
import './index.css'; // Ensure this file is included in your project

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55],
      fill: false,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(75,192,192,1)',
    },
  ],
};

const data2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Dataset 2',
      data: [28, 48, 40, 19, 86, 27],
      fill: false,
      backgroundColor: 'rgba(153,102,255,1)',
      borderColor: 'rgba(153,102,255,1)',
    },
  ],
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ padding: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function App() {
  const [value, setValue] = React.useState(0);
  const [boxItemValues, setBoxItemValues] = React.useState([
    { name: 'Temperature', value: 10 },
    { name: 'Precipitation', value: 10 },
    { name: 'Wind Speed', value: 10 },
    { name: 'Pressure', value: 10 },
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={muiTheme}>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              width: '100%',
              minHeight: '100vh',
              background: 'linear-gradient(135deg, #000000 30%, #1a1a1a 100%)',
              backgroundSize: '200% 200%',
              animation: 'gradientAnimation 10s ease infinite', // Animation
              paddingTop: '80px', // Space for the fixed tab bar
              color: 'white', // Ensure all text is visible
            }}
          >
            <Box
              sx={{
                width: '100%',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 1000,
                backgroundColor: '#333333', // Dark background
                borderBottom: '1px solid #444', // Border for the bottom of the tab bar
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                textColor="inherit" // Ensures the text is white
                TabIndicatorProps={{
                  style: {
                    backgroundColor: 'white', // Active tab underline color
                  },
                }}
                centered
              >
                <Tab label="Input" {...a11yProps(0)} />
                <Tab label="Prediction" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <Box
              sx={{
                width: '100%',
                maxWidth: '1200px', // Increased width for better layout
                margin: '0 auto',
                marginTop: '20px',
                padding: '20px',
              }}
            >
              <CustomTabPanel value={value} index={0}>
                <Grid container spacing={2} justifyContent="center">
                  {boxItemValues.map((el) => (
                    <Grid item key={el.name} xs={6} sm={3}>
                      <Box
                        sx={{
                          border: '1px solid lightgrey',
                          padding: '20px',
                          borderRadius: '10px',
                          textAlign: 'center',
                          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                          backgroundColor: '#444',
                          height: '100px', // Ensure consistent height
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Typography variant="h6" color="white">
                          {el.name}: {el.value}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                <Box
                  sx={{
                    backgroundColor: '#333333',
                    borderRadius: '10px',
                    padding: '20px',
                    width: '100%',
                    textAlign: 'center',
                    marginTop: '20px',
                  }}
                >
                  <Typography variant="h5" color="white">
                    Input Data
                  </Typography>
                  <PredictionForm
                    onSubmit={() => {
                      // handle form submission
                    }}
                    initialValues={{ cropType: '', soilType: '', fieldSize: 0 }}
                    isLoading={false}
                  />
                </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Box
                      sx={{
                        backgroundColor: '#333333',
                        borderRadius: '10px',
                        padding: '20px',
                        height: '300px', // Limit height to fit the screen
                        marginBottom: '20px', // Space between the graphs
                        overflow: 'hidden', // Ensure content doesn't overflow
                      }}
                    >
                      <Typography variant="h5" color="white" textAlign="center">
                        Graph 1
                      </Typography>
                      <Line data={data1} />
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: '#333333',
                        borderRadius: '10px',
                        padding: '20px',
                        height: '300px', // Limit height to fit the screen
                        overflow: 'hidden', // Ensure content doesn't overflow
                      }}
                    >
                      <Typography variant="h5" color="white" textAlign="center">
                        Graph 2
                      </Typography>
                      <Line data={data2} />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box
                      sx={{
                        backgroundColor: '#333333',
                        borderRadius: '10px',
                        padding: '20px',
                        height: '100%',
                      }}
                    >
                      <Typography variant="h5" color="white">
                        Recommendations
                      </Typography>
                      <Typography variant="body2" color="white" paragraph>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Et porro ad voluptate, possimus voluptatum totam ipsum
                        exercitationem error consequatur laboriosam, sint nostrum
                        id neque maxime culpa!
                      </Typography>
                      <Typography variant="body2" color="white" paragraph>
                        Another recommendation text goes here. Lorem ipsum dolor
                        sit amet, consectetur adipisicing elit. Doloremque,
                        molestias.
                      </Typography>
                      <Typography variant="body2" color="white" paragraph>
                        Final recommendation text. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Tempore, voluptatum!
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CustomTabPanel>
            </Box>
          </Box>
        </ThemeProvider>
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
