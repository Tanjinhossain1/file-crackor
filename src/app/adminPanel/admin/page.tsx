"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Button, Grid } from '@mui/material';
import EditorField from './EditorField';

export default function Admin() {
  const [editorData, setEditorData] = useState(null);

  const handleEditorData = (data:any) => {
    setEditorData(data);
  };
  return <Grid sx={{bgcolor:"lightgray"}} container>
      <Grid xs={0} lg={2}>

      </Grid>
      <Grid sx={{height:"500px"}} xs={12} lg={8}>
     <EditorField onEditorData={handleEditorData} />
      </Grid>
      <Grid  xs={0} lg={2}>
      <button onClick={() => console.log('editor data',editorData)}>Get Editor Data</button>
      </Grid>
    </Grid>
  
}
