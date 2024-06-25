import React from "react";
import { Box, Stack, TextField, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Card from "./card"


export default function Sidebar() {
  return (
    <Box sx={{ width: "100%", height:"98vh" }}>
      <Stack direction="row" spacing={1} sx={{padding:"10px", paddingBlock:"2rem", height:"5%"}}>
        <FormControl sx={{width:"20%"}} size="small">
          <InputLabel id="demo-simple-select-label">Select</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="select"
            // onChange={handleChange}
          >
            <MenuItem value={10}>by_city</MenuItem>
            <MenuItem value={20}>by_name</MenuItem>
            <MenuItem value={30}>by_type</MenuItem>
          </Select>
        </FormControl>
        <TextField id="search-basic" label="search" variant="outlined" size="small" />
        <Button variant="contained" size="small">Contained</Button>
      </Stack>
      <Stack spacing={2} sx={{height:"80%", overflow:"auto", padding:"2rem"}}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </Stack>
    </Box>
  );
}
