import React, { useEffect, useState } from "react";
import { Box, Stack, TextField, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from "./card";
import Main from "../main";

const Sidebar = ({ breweries, setbreweries, setIndex }) => {
  const [select, setselect] = useState("by_city");
  const [search, setsearch] = useState("san_diego");

  const hadleSubmit = () => {
    fetch(`${Main.URL}/breweries/${select}=${search}&per_page=6`)
      .then((el) => el.json())
      .then((br) => setbreweries(br.brewaries))
      .catch((err) => console.log(err));
  };
  const handleCardClick = (el) => {
    setIndex(el);
  };
  useEffect(() => hadleSubmit, []);
  const handleChange = (event) => {
    setselect(event.target.value);
  };
  return (
    <Box sx={{ width: "100%", height: "98vh" }}>
      <Stack
        direction="row"
        spacing={1}
        sx={{ padding: "10px", paddingBlock: "2rem", height: "5%" }}
      >
        <FormControl sx={{ width: "20%" }} size="small">
          <InputLabel id="demo-simple-select-label">Select</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={select}
            label="select"
            onChange={handleChange}
          >
            <MenuItem value={"by_city"}>by_city</MenuItem>
            <MenuItem value={"by_name"}>by_name</MenuItem>
            <MenuItem value={"by_type"}>by_type</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="search-basic"
          label="search"
          variant="outlined"
          size="small"
          value={search}
          onChange={({ target: { value } }) => setsearch(value)}
        />
        <Button variant="contained" size="small" onClick={hadleSubmit}>
          Contained
        </Button>
      </Stack>
      <Stack
        spacing={2}
        sx={{ height: "80%", overflow: "auto", padding: "2rem" }}
      >
        {breweries?.map((el, index) => {
          return (
            <Card
              key={el.id}
              data={el}
              onClick={handleCardClick}
              index={index}
            />
          );
        })}
        {/* <Card /> */}
      </Stack>
    </Box>
  );
};

export default Sidebar;
