"use client";
import { Grid, Paper, Typography, withStyles } from "@mui/material";
import React from "react";
import { SAMPLE_DATA } from "./SampleData";
import { FileData } from "../../../../types/fileCard";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import WindowIcon from "@mui/icons-material/Window";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

// Function to calculate the fractional part of a number
const fractionalPart = (num: number) => num - Math.floor(num);

// Function to render the custom rating
const CustomRating = ({ value }: { value: number }) => {
  return (
    <Rating
      name="custom-rating"
      value={value}
      precision={0.1}
      readOnly
      icon={<StarIcon />}
    />
  );
};
export default function FileCards() {

  return (
    <>
          <Grid alignItems={"center"}  gap={3} container>
            {" "}
            <Grid xs={0} sm={0} xl={0.5}></Grid>
            <Grid container xs={11} gap={3}>
            {SAMPLE_DATA.map((data: FileData, index: number) => {
        return (
            <Grid key={index} xs={12} xl={5.5} >
              <Paper sx={{ p: 1 }} elevation={3}>
                <Grid container>
                  <Grid  xs={12} sm={1}>
                    <Image
                      alt={data.title}
                      src={data.image}
                      width={60}
                      height={60}
                    />
                  </Grid>

                  <Grid sx={{borderRight:"2px solid lightGray"}} xs={12} sm={5}>
                    <Typography sx={{ fontWeight: 600 }}>
                      {data.title}
                    </Typography>
                    <Typography sx={{ fontWeight: 300, fontSize: 12 }}>
                      {data.description}
                    </Typography>
                    <Typography
                      sx={{ fontWeight: 300, fontSize: 12, color: "#239436" }}
                    >
                      {data.category.subCategory.name}
                    </Typography>
                  </Grid>
                  <Grid xs={0.2}></Grid>
                  
                  <Grid sx={{borderRight:"2px solid lightGray"}} xs={12} sm={2}>
                    <Typography sx={{ fontWeight: 600, display: "flex" }}>
                      <span>
                        <WindowIcon sx={{ color: "#0080ff" }} />
                      </span>
                      <span>{data.category.primary.name}</span>
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        gap: 1,
                        alignItems: "center",
                        fontSize: 13,
                      }}
                    >
                      <CloudDownloadIcon sx={{ color: "#bdbdbd" }} />{" "}
                      <span>{data.totalDownload}</span>
                    </Typography>
                  </Grid>
                  <Grid xs={0.2}></Grid>
                  
                  <Grid sx={{borderRight:"2px solid lightGray"}} xs={6} sm={2.3}>
                    <Typography sx={{ fontWeight: 600, display: "flex" }}>
                      Rating
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        gap: 1,
                        alignItems: "center",
                        fontSize: 13,
                      }}
                    >
                      {" "}
                      <span>
                        <CustomRating value={data.rating} />
                      </span>
                    </Typography>
                  </Grid>
                  <Grid xs={0.2}></Grid>
                  <Grid sx={{alignItems:"center", display:"flex"}} xs={6} sm={1}>
                    <Typography sx={{ fontWeight: 600, display: "flex",alignItems:"center" }}>
                      {data.mbSize}  MB
                    </Typography>
                     
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            );
          })}
            </Grid>
          <Grid xs={0} sm={0} lg={0.5}></Grid>
        </Grid>
    </>
  );
}
