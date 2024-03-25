"use client";
import { Grid, Paper, Typography,makeStyles } from "@mui/material";
import React from "react";
import { SAMPLE_DATA } from "./SampleData";
import { FileData } from "../../../../types/fileCard";
import Image from "next/image";
import Divider from '@mui/material/Divider';
import WindowIcon from '@mui/icons-material/Window';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

export default function FileCards() {
    const verticalLineStyle = {
        height: '100%',
        width: '2px', // Adjust the width as needed
        backgroundColor: '#d9d9d9', // Change color as needed
        margin: '0 10px', // Adjust margin as needed
      };
        // Check if the device size is large (lg)
  const isLargeDevice = window.innerWidth >= 1280; // Adjust the breakpoint as needed

  // Apply height only for large devices
  if (isLargeDevice) {
    verticalLineStyle.height = '60px';
  }
  return (
    <>
      {SAMPLE_DATA.map((data: FileData, index: number) => {
        return (
          <Grid alignItems={'center'} key={index} gap={3} container>
            {" "}
            <Grid xs={0} sm={0} lg={1}></Grid>
            {/* 1st data list  */}
            <Grid xs={12} lg={5}>
              <Paper sx={{ p: 1 }} elevation={3}>
                <Grid container>
                  <Grid  xs={12} lg={1.2}>
                    <Image
                      alt={data.title}
                      src={data.image}
                      width={60}
                      height={60}
                    />
                  </Grid>

                  <Grid xs={12} lg={7}>
                     <Typography sx={{fontWeight: 600}}>{data.title}</Typography>
                     <Typography sx={{fontWeight: 300,fontSize: 12}}>{data.description}</Typography>
                     <Typography sx={{fontWeight: 300,fontSize: 12,color:"#239436"}}>{data.category.subCategory.name}</Typography>
                  </Grid>
                  <Divider  orientation="horizontal" style={verticalLineStyle} />
                  <Grid xs={12} lg={1}>
                     <Typography sx={{fontWeight: 600,display:"flex"}}><span><WindowIcon sx={{color:"#0080ff"}} /></span><span>{data.category.primary.name}</span></Typography> 
                     <Typography sx={{display:"flex",gap:1,alignItems:"center",fontSize:13}}><CloudDownloadIcon sx={{color:"#bdbdbd"}} /> <span>{data.totalDownload}</span></Typography>
                  </Grid>


                </Grid>
              </Paper>
            </Grid>
            {/* 2nd data list  */}
            <Grid xs={12} lg={5}>
              <Paper sx={{ p: 1 }} elevation={3}>
                <Grid container>
                  <Grid xs={2}>
                    <Image
                      alt={data.title}
                      src={data.image}
                      width={60}
                      height={60}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid xs={0} sm={0} lg={1}></Grid>
          </Grid>
        );
      })}
    </>
  );
}
