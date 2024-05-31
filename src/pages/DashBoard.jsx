import React from 'react';
import Sidenav from '../components/Sidenav';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts';
import { Grid } from '@mui/material';
export default function DashBoard() {
  return (
    <>
    <div  style={{ backgroundColor: "darkblue" }}>
    <Navbar/>
    <Box height={30}  />
    <Box sx={{ display: 'flex' }}>
    <Sidenav />
    <Grid container>
      <Grid columns={12 }>
    <Box component="main" sx={{ m:5, p: 3, alignContent:"center",backgroundColor:"pink",borderRadius:"20px",width:130,height:130}}>
    <h1>12</h1>
      </Box>
      </Grid>
      <Grid>
      <Box component="main" sx={{m:5,  p: 3,alignContent:"center", backgroundColor:"pink",borderRadius:"20px",width:130,height:130}}>
    <h1>12</h1>
      </Box>
      </Grid>
      <Grid>
    <Box component="main" sx={{ m:5, p: 3, alignContent:"center",backgroundColor:"pink",borderRadius:"20px",width:130,height:130}}>
    <h1>12</h1>
      </Box>
      </Grid>
      <Grid>
      <Box component="main" sx={{m:5,  p: 3,alignContent:"center", backgroundColor:"pink",borderRadius:"20px",width:130,height:130}}>
    <h1>12</h1>
      </Box>
      </Grid>
   </Grid>
   </Box>
   </div>
   <div>
    <Grid container justifyContent={'space-between'}>
      
      <Grid item>
        <Box component="main" sx={{ ml: 30, alignItems: "left"}}>
          <BarChart
            xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
            series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
            width={300}
            height={200}
          />
        </Box>
      </Grid>

      <Grid item>  
        <Box component="main" sx={{ }}>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: 'series A' },
                  { id: 1, value: 15, label: 'series B' },
                  { id: 2, value: 20, label: 'series C' },
                ],
              },
            ]}
            width={300}
            height={200}
          />
        </Box>
      </Grid>

      <Grid item>
        <Box component="main" sx={{  }}>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                area: true,
              },
            ]}
            width={300}
            height={200}
          />
        </Box>
      </Grid>
    </Grid>
  </div>
     
</>    
  );
}
