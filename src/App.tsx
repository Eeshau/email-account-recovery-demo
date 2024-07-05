import { useTheme, Grid, Typography, Box, TextField }  from '@mui/material'
import './App.css'
import EnableSafeModule from './EnableSafeModule'
import NavBar from './components/NavBar'
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined';
import StyledToggleButtonGroup from './components/Toggle'
import { useState } from 'react';
import { Button } from './components/Button';
import {Link} from 'react-router-dom'

type FlowType = 'setup' | 'recover';

function App() {
  const theme = useTheme();
  const [flow, setFlow] = useState<FlowType>('setup');

  const handleFlowChange = (newFlow: FlowType) => {
    setFlow(newFlow);
    console.log(flow)
  };

  return (
    <div className='bg-white'>
      <NavBar/>

      <Grid sx={{color:'10px', paddingTop: '200px'}}>
        <Box sx={{borderRadius:'25.95px', borderColor: '#CECFD2', borderWidth: '1px', width: '170px', marginX: 'auto', padding:'5px'}}>
          <DraftsOutlinedIcon fill='black' sx={{marginX:'5px', padding:'4px'}}/>
            ZK Email Tech
        </Box>
        <Typography variant='h1' sx={{color: theme.palette.primary.main}}>
          Email Recovery Demo
        </Typography>   
        <Typography sx={{color: theme.palette.secondary.main, paddingTop:'15px', fontWeight:'medium', lineHeight:'140%'}}>
            Assign email guardians to recover your wallet. <br></br>
            3 Guardians must reply back to an email to enable <br></br>
             wallet recovery to a new address.
        </Typography>
        <StyledToggleButtonGroup onFlowChange={handleFlowChange}/>
      </Grid>



      {flow === 'setup' ? (

        // SETUP FLOW
        <Box sx={{height:'250px', alignContent: 'center', justifyContent: 'center', marginX: 'auto'}}>
          <Grid container>
            {/* GNOSIS SAFE */}
            <Grid item xs={6} padding='20px'>
              <Box sx={{height:'250px', background:'#FFFFFF', borderColor:'#B3B3B3', borderWidth:'1.5px', borderRadius:'18px'}}>
                <LockClockOutlinedIcon fill='black' sx={{marginTop:'25px'}}/>
                <Typography variant='h4' sx={{fontWeight:'medium', letterSpacing: -2, paddingBottom:'10px', paddingTop:'10px'}}>Gnosis Safe</Typography>
                <Typography sx={{color:'#848281', fontWeight:'regular', fontSize: '16px', paddingBottom:'10px'}}>Copy the link and import into your Safe wallet</Typography>
                <EnableSafeModule/>
                <Box sx={{display:'flex'}}>
                  <InfoOutlinedIcon fill='black'/>
                  <Typography>Copy the link and import into your Safe wallet</Typography>
                </Box>
              </Box>
            </Grid>

            {/* TEST WALLET */}
            <Grid item xs={6} padding='20px'>
              <Box sx={{height:'250px', background:'#FFFFFF', borderColor:'#B3B3B3', borderWidth:'1.5px', borderRadius:'18px'}}>
                <AccountBalanceWalletOutlinedIcon fill='black' sx={{marginTop:'25px'}}/>
                <Typography variant='h4' sx={{fontWeight:'medium', letterSpacing: -2, paddingBottom:'10px', paddingTop:'10px'}}>Test Wallet </Typography>
                <Typography sx={{color:'#848281', fontWeight:'regular', fontSize: '16px', paddingBottom:'10px'}}>Connect to see the test wallet flow</Typography>
                <EnableSafeModule />
                <Box sx={{display:'flex'}}>
                  <InfoOutlinedIcon fill='black'/>
                  <Typography>Test out setting up a recovery wallet with a test wallet</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* BOTTOM PROMPT TO CONTACT IF U WANT ANOTHER WALLET */}
          <Box sx={{paddingTop:'50px', paddingBottom:'40px'}}>
            <Typography>Want us to setup account recovery for a different wallet? <Link to='https://t.me/zkemail' target="_blank" >Contact Us!</Link></Typography>
          </Box>
        </Box>

      ) : (


        // RECOVERY FLOW
        <Box sx={{height:'250px', background:'#FFFFFF', borderColor:'#B3B3B3', borderWidth:'1.5px', borderRadius:'18px',  margin:'25px'}}>

          <Typography variant='h4' sx={{fontWeight:'medium', letterSpacing: -2, paddingBottom:'10px', paddingTop:'50px'}}>Recover Wallet</Typography>


          <Box>
            <TextField label="Lost Wallet" />
            <TextField label="New address" />
          </Box>

          <Box>
            <Button variant='outlined' sx={{borderWidth:'1px'}}>I don’t know my guardian emails</Button>
            <Button variant='outlined' sx={{borderWidth:'1px'}}>I know my gaudian emails</Button>
          </Box>

          <Box sx={{display:'flex'}}>
            <InfoOutlinedIcon fill='black'/>
            <Typography>Copy the link and import into your Safe wallet</Typography>
          </Box>
        </Box>
      )}
    </div>
  )
}

export default App
