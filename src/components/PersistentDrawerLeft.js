import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {Drawer,Typography} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material'; 
import Navbar from './Navbar';  // Ensure Navbar is imported
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import UserManagement from '../pages/userManagements/user-managements';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  })
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null); // State for selected item

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item); // Update the selected item
  };

  const renderContent = () => {
    switch (selectedItem) {
      case 'Inbox':
        return <UserManagement/>;
      case 'Starred':
        return <Typography>Starred Content</Typography>;
      case 'Send email':
        return <Typography>Send email Content</Typography>;
      case 'Drafts':
        return <Typography>Drafts Content</Typography>;
      case 'All mail':
        return <Typography>All mail Content</Typography>;
      case 'Trash':
        return <Typography>Trash Content</Typography>;
      case 'Spam':
        return <Typography>Spam Content</Typography>;
      default:
        return <Typography>Select an item from the drawer to view content</Typography>;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar open={open} handleDrawerOpen={handleDrawerOpen} />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => handleItemClick(text)}> {/* Handle click */}
                <ListItemIcon>
                  {text === 'Inbox' ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => handleItemClick(text)}> {/* Handle click */}
                <ListItemIcon>
                  {text === 'All mail' ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main content */}
      <Main open={open}>
        <DrawerHeader />
        {renderContent()} {/* Conditionally render content */}
      </Main>
    </Box>
  );
}
