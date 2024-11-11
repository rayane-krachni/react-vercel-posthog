import React from "react";
import '../../style/shared-style.css';
import SearchIcon from '@mui/icons-material/Search';
import { Grid2, Box, Typography, TextField,InputAdornment } from "@mui/material";
import UserStatisticComponents from "./components/user-statistic-components";

export default function UserManagement() {
    return (
        <div className="global-div">
            <Box 
                sx={{
                    display: "flex", 
                    flexDirection: "column", 
                 
                    alignItems: "start", 
                    justifyContent: "center",
                    padding: { xs: 2, md:1 }, // Responsive padding
                }}
            >
                {/* First Grid */}
                <Grid2 
                    container 
                    spacing={2} 
                    sx={{
                        justifyContent: "center",  // Centers grid items horizontally
                        alignItems: "center",  
                        width:"100%"     // Centers grid items vertically
                    }}
                    className="box-shadow-style"
                >
                    <Grid2 item xs={12} sm={6} md={4} lg={3}> {/* Adjust size at different breakpoints */}
                        <UserStatisticComponents title={"Total des utilisateurs"} count={"500"} />
                    </Grid2>
                    <Grid2 item xs={12} sm={6} md={4} lg={3}>
                        <UserStatisticComponents title={"Total des utilisateurs"} count={"500"} />
                    </Grid2>
                    <Grid2 item xs={12} sm={6} md={4} lg={3}>
                        <UserStatisticComponents title={"Total des utilisateurs"} count={"500"} />
                    </Grid2>
                </Grid2>

                <Grid2 container   
                    sx={{
                        justifyContent: "space-between",  // Centers grid items horizontally
                        alignItems: "center", 
                        width:"97%"  ,
                        display:"flex",
                        flexDirection:"column",

                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",

                        margin:"5px"   // Centers grid items vertically
                    }}  >
                    
                <Grid2 
                    container 
                    spacing={1} 
                    sx={{
                        justifyContent: "space-between",  // Centers grid items horizontally
                        alignItems: "center", 
                        width:"100%"  ,
                        marginTop:"5px"   // Centers grid items vertically
                    }}
                 
                >
                    <Grid2 item xs={6}> {/* Adjust size at different breakpoints */}
                        <Typography sx={{fontWeight:"bold"}}>Tous les utilisateurs</Typography>
                    </Grid2>
                    <Grid2 item xs={6}> {/* Adjust size at different breakpoints */}
                         <Grid2 container spacing={2}
                         
                         sx={{
                            justifyContent: "space-between",  // Centers grid items horizontally
                            alignItems: "center", 
                            width:"100%"     // Centers grid items vertically
                        }}
                         >
                            <Grid2 item xs={6}> 
                            <TextField
                                variant="outlined"
                                placeholder="Search..."
                                fullWidth
                                sx={{
                                    borderRadius: 2, // Rounded corners
                                    backgroundColor: '#f1f1f1', // Light background
                                    height: '36px', // Minimized height
                                    '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px', // Rounded border
                                    height: '100%', // Ensures the height is consistent within the outlined input
                                    '& fieldset': {
                                        borderColor: '#ccc', // Border color
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#888', // Hover border color
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#3f51b5', // Focused border color (blue)
                                    },
                                    '& input': {
                                        padding: '6px 12px', // Reduced padding for smaller height
                                        fontSize: '0.875rem', // Smaller font size for minimized height
                                    },
                                    },
                                    '& .MuiInputAdornment-root': {
                                    color: '#888', // Icon color
                                    fontSize: '1rem', // Reduced size of the icon if necessary
                                    },
                                }}
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                    ),
                                }}
                            />

                            </Grid2>
                            <Grid2 item xs={6}> {/* Adjust size at different breakpoints */}
                                <Typography>filtrer par</Typography>
                            </Grid2>
                         </Grid2>
                    </Grid2>
              
                  
                </Grid2>

                <Grid2 container 
                 sx={{
                    justifyContent: "space-between",  // Centers grid items horizontally
                    alignItems: "center", 
                    width:"97%"  ,
                    display:"flex",
                    flexDirection:"row",
                 
      
                }}>

                    <Grid2>
                     <Typography>Nom et prenom</Typography>
                    </Grid2>
                    <Grid2>
                     <Typography>Telephone</Typography>
                    </Grid2>
                    <Grid2>
                     <Typography>groupe</Typography>
                    </Grid2>
                    <Grid2>
                     <Typography>planing</Typography>
                    </Grid2>
                    <Grid2>
                     <Typography>authorisation</Typography>
                    </Grid2>
                    <Grid2>
                     <Typography>Etat</Typography>
                    </Grid2>
                    <Grid2>
                     <Typography>Creer par/Date</Typography>
                    </Grid2>
                    <Grid2>
                     <Typography>Modifier par/Date</Typography>
                    </Grid2>

                </Grid2>
                </Grid2>
            
            </Box>
        </div>
    );
}
