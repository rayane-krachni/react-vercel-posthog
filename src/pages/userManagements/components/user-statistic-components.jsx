import React from 'react';
import { Typography,Box,Grid2 } from "@mui/material";
import colors from '../../../utils/colors';
import person from '../../../assets/icons/profile-tick.png';
import twoPerson from '../../../assets/icons/profile-2user.png';
export default function UserStatisticComponents ({title , count}){
    return (
        <Grid2 container  sx={{padding:"10px",margin:"5px"}}>            
            <Grid2>
            <Box sx={{display:"flex",width:"100px",height:"100px",borderRadius:"50%",background:"#D3FFE7",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
              <img src={person}></img>
            </Box>
            </Grid2>

            <Grid2 sx={{justifyContent:"center",textAlign:"start",alignContent:"center",alignItems:"center",padding:"5px"}} >
                <Grid2>
                <Typography  sx={{color:colors.textGrey}}>{title}</Typography>
                </Grid2>
                <Grid2>
                <Typography>{count}</Typography>
                </Grid2>
            </Grid2>
    </Grid2>
    );
}