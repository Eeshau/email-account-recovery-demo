
/*
NOTES: 
- do a prop for header if it's the set vs recover flow
*/

import React from 'react';
import { useTheme } from '@mui/material/styles';
import {AppBar, Grid} from '@mui/material/';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {Link} from 'react-router-dom'


const NavBar: React.FC = () => {
    const theme = useTheme();

    return (
        <>
            <AppBar
                position="static"
                sx={{
                    width: '100%',
                    backgroundColor: 'white',
                    paddingY: '0px',
                    boxShadow: {
                        xs: 'none', // No box shadow on small screens
                        md: '0px 1px 7px rgba(0, 0, 0, 0.02)', // Box shadow on medium and larger screens
                    },
                    zIndex: '10',
                    position: 'relative',
                }}
            >
                <Grid container sx={{ justifyContent: 'space-between'}}>
                  <Grid item xs={2} sx={{borderColor: 'black', borderWidth: '2px',  paddingY:'10px'}}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <MailOutlineIcon  style={{ fill: '#000000' }}/>
                        {/* <img src="path_to_logo" alt="Logo" style={{ marginRight: theme.spacing(2) }} /> */}
                        <Typography variant="h6" color="black">ZKEmail</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sx={{borderColor: 'black', borderWidth: '2px', paddingY:'10px'}}>
                      <Box sx={{ display: 'flex', alignItems: 'center',  }}>
                        <Button color="inherit" href='https://prove.email/' sx={{ color: 'black', marginRight: theme.spacing(2) }}>Home</Button>
                        <Button color="inherit" href='https://prove.email/blog' target='_blank' sx={{ color: 'black', marginRight: theme.spacing(2) }}>Blog</Button>
                        <Button color="inherit" href='https://zkemail.gitbook.io/zk-email' target='_blank'sx={{ color: 'black', marginRight: theme.spacing(2) }}>Docs</Button>
                        <Button color="inherit" href='https://prove.email/projects' target='_blank' sx={{ color: 'black', marginRight: theme.spacing(2) }}>Demos</Button>
                        <Button color="inherit" href='https://t.me/zkemail' target='_blank' sx={{ color: 'black', marginRight: theme.spacing(2) }}>Contact</Button>
                    </Box>
                  </Grid>
                  <Grid item xs={4} sx={{borderColor: 'black', borderWidth: '2px', paddingY:'10px',  margin: 'auto'}}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto'}}>
                        <Button variant="outlined" sx={{ marginRight: theme.spacing(2) }}>Check out demo</Button>
                        <Button variant="outlined">Connect Wallet</Button>
                    </Box>
                  </Grid>
                </Grid>
            </AppBar>
        </>
    );
};

export default NavBar;
