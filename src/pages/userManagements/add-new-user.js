import { Grid2 } from "@mui/material";
import React from "react";

export default function AddNewUse() {
    return (
        <Grid2 container>
            <Grid2 item md={4} sx={{ background: "blue", height: "100vh" }} >new</Grid2>
            <Grid2 item md={8} sx={{ background: "green", height: "100vh" }} />
        </Grid2>
    );
}
