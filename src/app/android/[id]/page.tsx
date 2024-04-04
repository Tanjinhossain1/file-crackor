"use client";
import { SAMPLE_DATA_OF_ANDROID } from "@/app/component/FileCard/SampleData";
import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  RadioGroup,
  Typography,
  styled,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { FileData } from "../../../../types/fileCard";
import Image from "next/image";
import EditorJSRender from "@/app/component/EditorDataDisplay";
import { CustomRating } from "@/app/component/FileCard/FileCardCompo";
import Radio, { RadioProps } from "@mui/material/Radio";
import { useRouter } from "next/navigation";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&::before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

// Inspired by blueprintjs
function BpRadio(props: RadioProps) {
  return (
    <Radio
      disableRipple
      color="secondary"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}
export default function Android({ params }: { params: { id: string } }) {
  const history = useRouter()
  const [androidDetails, setAndroidData] = useState<FileData | null>(null);
  useEffect(() => {
    SAMPLE_DATA_OF_ANDROID.map((data: FileData) => {
      if (data.id === +params.id) {
        setAndroidData(data);
      }
    });
  }, [params.id]);
  const productInformation = [
    {
      name: "File Name",
      key: "title",
    },
    {
      name: "Created By ",
      key: "appCreatedBy",
    },
    {
      name: "Version ",
      key: "version",
    },
    {
      name: "License Type ",
      key: "licenseType",
    },
    {
      name: "Release Date",
      key: "releaseDate",
    },
    {
      name: "Languages",
      key: "languages",
    },
    {
      name: "Total Downloads",
      key: "totalDownload",
    },
    {
      name: "Uploaded By",
      key: "uploadedBy",
    },
  ];
  return (
    <Grid sx={{ backgroundColor: "#fffcff", mt: 5 }} container>
      {androidDetails ? (
        <Grid container>
          <Grid xs={0} md={1} lg={2}></Grid>
          {/* article  */}
          <Grid xs={12} lg={5.5}>
            <Paper sx={{ p: 2 }}>
              <Image
                alt={androidDetails.title}
                src={
                  androidDetails?.articleImage
                    ? androidDetails?.articleImage
                    : ""
                }
                layout="responsive"
                width={100}
                height={100}
                // objectFit="cover"
                // objectPosition="center"
              />
              <EditorJSRender data={androidDetails.article} />
            </Paper>
          </Grid>
          <Grid xs={0} lg={0.4}></Grid>
          <Grid xs={12} lg={2}>
            <Paper sx={{ p: 2.2 }}>
              <Typography
                sx={{ textAlign: "center", fontSize: 20, fontWeight: 600 }}
              >
                {androidDetails.mbSize}
              </Typography>
              <Grid container xs={12}>
                <Grid xs={2}></Grid>
                <Grid sx={{ mt: 1 }} xs={1.5}>
                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "white",
                      backgroundColor: "#80006a",
                      borderTopLeftRadius: "15px",
                      borderBottomLeftRadius: "15px",
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    {androidDetails.rating}
                  </Typography>
                </Grid>
                <Grid xs={0.5}></Grid>
                <Grid sx={{ mt: 1 }} xs={5}>
                  <CustomRating value={androidDetails.rating} />
                </Grid>
                <Grid xs={2}></Grid>
              </Grid>
              <br />
              <br />
              <Grid container xs={12}>
                <Grid xs={0.5}></Grid>
                <Grid xs={10}>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                      sx={{ fontWeight: 600, fontSize: 11 }}
                    >
                      <FormControlLabel
                        value="female"
                        control={<BpRadio />}
                        label="Direct download"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid sx={{ mt: 2 }} container>
                <Grid xs={1}></Grid>
                <Grid xs={10}>
                  {" "}
                  <Button
                    sx={{
                      width: "100%",
                      bgcolor: "#36072e",
                      ":hover": { bgcolor: "#520b46" },
                    }}
                    variant="contained"
                  >
                    Direct Download
                  </Button>
                </Grid>
                <Grid xs={1}></Grid>
              </Grid>
            </Paper>

            <Paper sx={{ p: 2.2, mt: 3 }}>
              <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                Product Information
              </Typography>

              <Divider sx={{ my: 2 }} />
              <Grid container>
                {productInformation.map((data, index) => {
                  return (
                    <Fragment key={index}>
                      <Grid sx={{ m: 0, p: 0 }} container xs={12}>
                        <Grid sx={{ m: 0, p: 0 }} xs={0.2}></Grid>
                        <Grid sx={{ m: 0, p: 0 }} xs={5}>
                          <Typography sx={{ fontSize: 14, m: 0, p: 0 }}>
                            {data.name}
                          </Typography>
                        </Grid>
                        <Grid sx={{ m: 0, p: 0 }} xs={1}></Grid>
                        <Grid sx={{ m: 0, p: 0 }} textAlign={"end"} xs={5}>
                          <Typography sx={{ fontSize: 14, m: 0, p: 0 }}>
                            {(androidDetails as any)[data.key]}
                          </Typography>
                        </Grid>
                        <Grid sx={{ m: 0, p: 0 }} xs={0.2}></Grid>
                      </Grid>
                      <Grid sx={{ my: 2 }} container>
                        <Grid item xs={0.1}></Grid>
                        <Grid item xs={11.7}>
                          <Divider />
                        </Grid>
                        <Grid item xs={0.2}></Grid>
                      </Grid>
                    </Fragment>
                  );
                })}
              </Grid>
            </Paper>
            <br />
            <br />
            <Paper sx={{ p: 2.2, mt: 3 }}>
              <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                Related Products
              </Typography>

              <Divider sx={{ my: 2 }} />
              <Grid  container>
                {SAMPLE_DATA_OF_ANDROID.slice(3).map((data, index) => {
                  return (
                    <Fragment key={index}>
                      <Grid sx={{ m: 0, p: 0,mt:1 }} container xs={12}>
                        <Grid xs={0.2}></Grid>
                        <Grid xs={3}>
                          <Image
                            alt={data.title}
                            src={data.image}
                            width={40}
                            height={40}
                          />
                        </Grid>
                        <Grid xs={8.6}>
                          <Typography onClick={()=>history.push(`/${data.category.primary.type}/${data.id}`)} sx={{ fontSize: 13, fontWeight: 600 }}>
                            {data.title}
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: 300,
                              fontSize: 12,
                              color: "#cf29c6",
                            }}
                          >
                            {data.category.subCategory.name}
                          </Typography>
                          <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
                            {data.mbSize}
                          </Typography>
                        </Grid>
                        <Grid xs={0.2}></Grid>
                      </Grid>
                    </Fragment>
                  );
                })}
              </Grid>
            </Paper>
          </Grid>
          <Grid xs={0} lg={1.9}></Grid>
        </Grid>
      ) : null}
     <Grid sx={{my:5}} container>
          <Grid xs={0} md={1} lg={2}></Grid>
          {/* article  */}
          <Grid xs={12} lg={5.5}>
                <Paper sx={{p:2}}>
                  <Grid container>
                 <Grid xs={12}>
                 <Typography sx={{fontSize:24,fontWeight:600}}>Comments</Typography>
                 </Grid>
                 <Grid xs={12}>
                  <Typography sx={{fontSize:20,fontWeight:600,mt:2}}>Leave a comment</Typography>
                 </Grid>
                 <Grid xs={12}>
                  <Typography sx={{fontSize:15,fontWeight:500}}>Your email address will not be published. Required fields are marked *</Typography>
                 </Grid>

                  </Grid>
                </Paper>
          </Grid>

      </Grid>
    </Grid>
  );
}
