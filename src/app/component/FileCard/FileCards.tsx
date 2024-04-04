"use client";
import { Button, Grid, Paper, Typography, withStyles } from "@mui/material";
import React from "react";
import { SAMPLE_DATA_OF_ANDROID, SAMPLE_DATA_OF_MACOS, SAMPLE_DATA_OF_WINDOW } from "./SampleData";
import { FileData } from "../../../../types/fileCard";
import FileCardCompo from "./FileCardCompo";
import EditorJSRenderer from "../EditorDataDisplay";

export default function FileCards() {
  return (
    <>
      <Grid sx={{mt:6}} container>
        {/* view all button card */}
        {/* <Grid sx={{ mb: 2 }} container>
          <Grid xs={0} sm={1} xl={1}></Grid>
          <Grid sx={{ borderLeft: "4px solid #fa00ed" }} xs={12} sm={9} xl={7.35}>
            <Paper sx={{ p: 2.5 }} elevation={3}>
              <Grid container>
                <Grid xs={6}>
                  <Typography sx={{ fontWeight: 600 }}>Windows</Typography>
                </Grid>
                <Grid xs={2} sm={4} ></Grid>
                <Grid sx={{display:'flex',justifyContent:"end"}} xs={4} sm={2}>
                  <Button
                    size="small"
                    sx={{ color: "#fa00ed", borderColor: "#fa00ed" }}
                    variant="outlined"
                  >
                    View All
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid> */}
        {/* show all window data file card */}
        {/* <Grid sx={{mt:3}}  alignItems={"center"} container>
          {" "}
          <Grid xs={0} sm={1} xl={1}></Grid>
          <Grid container xs={12} sm={9} xl={11} gap={2}>
            {SAMPLE_DATA_OF_WINDOW.map((data: FileData, index: number) => {
              return <FileCardCompo key={index} data={data} index={index} />;
            })}
          </Grid> 
        </Grid> */}

        {/* {this is for mac os } */}
        {/* <Grid sx={{ mb: 2,mt:8 }} container>
          <Grid xs={0} sm={1} xl={1}></Grid>
          <Grid sx={{ borderLeft: "4px solid #fa00ed" }} xs={12} sm={9} xl={7.35}>
            <Paper sx={{ p: 2.5 }} elevation={3}>
              <Grid container>
                <Grid xs={6}>
                  <Typography sx={{ fontWeight: 600 }}>MacOs</Typography>
                </Grid>
                <Grid xs={2} sm={4}></Grid>
                <Grid sx={{display:'flex',justifyContent:"end"}} xs={4} sm={2}>
                  <Button
                    size="small"
                    sx={{ color: "#fa00ed", borderColor: "#fa00ed" }}
                    variant="outlined"
                  >
                    View All
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid> */}
        {/* show all window data file card */}
        {/* <Grid sx={{mt:3}}  alignItems={"center"} container>
          {" "}
          <Grid xs={0} sm={1} xl={1}></Grid>
          <Grid container xs={12} sm={9} xl={11} gap={2}>
            {SAMPLE_DATA_OF_MACOS.map((data: FileData, index: number) => {
              return <FileCardCompo key={index} data={data} index={index} />;
            })}
          </Grid>
        </Grid> */}
           
        {/* {this is for Android } */}
        <Grid sx={{ mb: 2,mt:8 }} container>
          <Grid xs={0} sm={1} xl={1}></Grid>
          <Grid sx={{ borderLeft: "4px solid #fa00ed" }} xs={12} sm={9} xl={7.35}>
            <Paper sx={{ p: 2.5 }} elevation={3}>
              <Grid container>
                <Grid xs={6}>
                  <Typography sx={{ fontWeight: 600 }}>Android</Typography>
                </Grid>
                <Grid xs={2} sm={4}></Grid>
                <Grid sx={{display:'flex',justifyContent:"end"}} xs={4} sm={2}>
                  <Button
                    size="small"
                    sx={{ color: "#fa00ed", borderColor: "#fa00ed" }}
                    variant="outlined"
                  >
                    View All
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        {/* show all window data file card */}
        <Grid sx={{mt:3}} alignItems={"center"} container>
          {" "}
          <Grid xs={0} sm={1} xl={1}></Grid>
          <Grid container xs={12} sm={9} xl={11} gap={2}>
            {SAMPLE_DATA_OF_ANDROID.map((data: FileData, index: number) => {
              return <FileCardCompo key={index} data={data} index={index} />;
            })}
          </Grid>
          {/* <Grid xs={0} sm={0} lg={0.5}></Grid> */}
        </Grid>
      </Grid>
    </>
  );
}
