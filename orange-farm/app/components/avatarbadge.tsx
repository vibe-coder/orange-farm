import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {customerWithMessage, customerWithNoMessage} from './chatData';




const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export default function BadgeAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      {
        customerWithMessage.map((data) => {
          return(
            <div key={data.key} className='bg-lightorange p-4 rounded-2xl'>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                variant="dot"
              >
                <Avatar alt="Maggie Johnson" src={data.pictureURL} />
              </StyledBadge>
        </div>
          )
        })
      }

      {
        customerWithNoMessage.map((data) => {
          return(
            <div key={data.key}  className='p-4'>
              <Avatar  alt={data.name} src={data.pictureURL}/>
            </div>
          )
        })
      }
    </Stack>
  );
}
