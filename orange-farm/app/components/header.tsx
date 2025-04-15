"use client"

import logo from "../../public/icons/Logo.svg"
import userImage from "../../public/icons/Harry.png"
import Image from "next/image";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


const settings = ['Profile', 'Account', 'Logout'];
const user = userImage

function ResponsiveAppBar() {

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} enableColorOnDark sx={{}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className='flex justify-between'>

        <div>
            <Image alt="logo" width={130} height={40} src={logo} />
        </div>

          
          {/* Profile */}
          <Box sx={{ flexGrow: 0 }} >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="../../public/icons/Harry.png"  />
              </IconButton>
            </Tooltip>
            <Menu
              
              elevation={0}
              sx={{ mt: '45px', box: 3, borderColor: "error.main"}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
