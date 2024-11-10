import React, { useState } from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Collapse,Grid2, IconButton } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Logo from '../assets/images/raqib_logo.png';
import { IoMdHome } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { TbLogs } from "react-icons/tb";
import { IoCarSportOutline } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineHelp } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";
import { GrConfigure } from "react-icons/gr";
import { FaRegBuilding } from "react-icons/fa";
import { IoCameraOutline } from "react-icons/io5";
import UserManagement from '../pages/userManagements/user-managements';
const NAVIGATION = [
  { index: 0 , segment: 'accueil', title: 'Accueil', icon: <IoMdHome  style={{fontSize:"1.5rem"}}/>, },
  { 
    index: 1,
    segment: 'utilisateurs',

    title: 'Gestion des utilisateurs',
    icon: <FaUserAlt style={{fontSize:"1rem"}}/> ,
    children: [
      {    index: 2, segment: 'ajouter_utilisateur', title: 'Ajouter un utilisateur', icon: <FaUserPlus  style={{fontSize:"1.3rem"}} /> ,
      },
      {
        index: 3,
        segment: 'roles',
        title: 'Gestion des rôles',
        content:<div>roles</div> ,
        icon: <BarChartIcon style={{fontSize:"1.5rem"}}/> ,
        children: [
          { segment: 'ajouter_role', title: 'Ajouter un rôle', icon: <DescriptionIcon style={{fontSize:"1.5rem"}}/> },
        ],
      },
    ],
  },
  {
    index: 4,
    segment: 'vehicules',
    title: 'Gestion des véhicules',
    
    icon: <FaCarSide style={{fontSize:"1.3rem"}}/> ,
    children: [
      {index: 5, segment: 'ajouter_vehicule', title: 'Ajouter un véhicule', icon: <IoCarSportOutline style={{fontSize:"1.5rem"}}/> },
    ],
  },
  { index: 6, segment: 'rapport', title: 'Les rapports', icon: <TbReportSearch style={{fontSize:"1.5rem"}}/> },
  { index: 7,segment: 'logs', title: 'Logs et audit', icon: <TbLogs style={{fontSize:"1.5rem"}}/> },
  {
    index: 8,
    segment: 'parametre',
    title: 'Paramètres',
   
    icon: <IoMdSettings style={{fontSize:"1.5rem"}}/> ,
    children: [
      { index: 9,segment: 'general', title: 'Information de  l’entreprise', icon: <FaRegBuilding style={{fontSize:"1.3rem"}} /> },
      { index: 10,segment: 'configuration', title: 'Configuration de systeme', icon: <GrConfigure style={{fontSize:"1.5rem"}} /> },
      { index: 11,segment: 'restauration', title: 'Sauvgarde et restauration', icon: <DescriptionIcon /> },
      { index: 12,segment: 'camera', title: 'Listes des caméras', icon: <IoCameraOutline style={{fontSize:"1.5rem"}}/> },
      { index: 13,segment: 'deconnexion', title: 'Déconnexion', icon: <TbLogout2 style={{fontSize:"1.5rem"}} /> },

      
    ],
  },
  { 
    index: 14,
    segment: 'support',

    title: 'Support technique',
    icon: <MdOutlineHelp style={{fontSize:"1.5rem"}}/> ,
    children: [
      {index: 15, segment: 'support_technique', title: 'Support technique', icon: <DescriptionIcon /> },
      {index: 16, segment: 'assistant_en_ligne', title: 'Assistant en ligne', icon: <DescriptionIcon /> },
    ],
  },
];
const CONTENT =[
  <UserManagement/>,

  <UserManagement/>,
  <UserManagement/>,
  <UserManagement/>,
  <UserManagement/>,
  <UserManagement/>,
  <UserManagement/>,
  <UserManagement/>,
  
]
const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    background: { default: '#f4f6f8' },
  },
  components: {
    MuiListItemIcon: { styleOverrides: { root: { color: '#ffffff' } } },
  },
});



export default function DashboardLayoutBasic() {
  const [openSubMenus, setOpenSubMenus] = useState({});
  const [content, setContent] = useState(0);
  const [openSideBar, setOpenSideBar] = useState(true);

  const handleSubMenuClick = (path,index) => {
    setOpenSubMenus((prevOpenSubMenus) => ({
      ...prevOpenSubMenus,
      [path]: !prevOpenSubMenus[path],
    }));
    setContent(index)
  };

  const renderMenuItems = (items, parentPath = '') => (
    items.map((item) => {
      const path = `${parentPath}/${item.segment}`;
      const isOpen = openSubMenus[path] || false;
      const hasNestedChildren = item.children && item.children.some(child => child.children);
  
      return (
        <React.Fragment key={path}>
          <ListItem  button onClick={() => item.children && handleSubMenuClick(path,item.index)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title}  primaryTypographyProps={{ style: { fontSize: '14px' } }} />
            {item.children && (isOpen ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
          {item.children && (
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
              <List
                component="div"

                disablePadding
                sx={{ pl: hasNestedChildren ? 3 : 2 ,}}  // Adds conditional padding for nested children
              >
                {renderMenuItems(item.children, path)}
              </List>
            </Collapse>
          )}
        </React.Fragment>
      );
    })
  );
  

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', height:"100vh", }}>
        <Grid2 container>
          <Grid2 item xs={4}>
            <Box
            sx={{
              width:openSideBar ? '350px' : "50px",
              padding: '5px',
              height:"100%",
              backgroundColor: 'primary.main',
              color: 'white',
              position: 'relative',
              overflowY: 'auto'
            }}
          >
            <Grid2 container sx={{justifyContent:"space-between",alignContent:"center" , textAlign:"center",alignItems:"center"}}>
              {openSideBar && <Grid2 item xs={10} >
                <img src={Logo} alt="Logo" />
              </Grid2>}
              <Grid2 item xs={2} >
                <IconButton onClick={()=>{setOpenSideBar(!openSideBar)}}>
                  {!openSideBar ?<GiHamburgerMenu color='white' style={{ margin:"5px"}}/>:<IoIosCloseCircle color='white' />}  
                </IconButton>
              </Grid2>
            </Grid2>
            {openSideBar && <List>
              {renderMenuItems(NAVIGATION)}
            </List>}
            </Box>
          </Grid2>
          <Grid2 item xs={8}>
            <Box>
             {CONTENT[content]}
            </Box>
          </Grid2>

        </Grid2>
   

   
      
      </Box>
    </ThemeProvider>
  );
}
