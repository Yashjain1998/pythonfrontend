import {
  Box,
  Stack,
  Typography,
  Rating,
  TextField,
  Button,
} from "@mui/material";
import Sidebar from "./sidebar";
import Main from "../main";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Review from "./reviewCard";
const Dashboard = () => {
  const [value, setValue] = useState(0);
  const [cookies, setCookie] = useCookies(["user"]);
  const [breweries, setbreweries] = useState([]);
  const [brewerieIndex, setIndex] = useState(0);
  const [data, setdata] = useState();
  const [text, settext]= useState("")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${Main.URL}/user`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${cookies.user}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setdata(data.user);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

 const handleobject=()=>{
  let obj={...data}
  obj?.reviews?.push({text:text, rating:value})
  setdata(obj)
  
}
 const handlechange=({target:{value}})=>{
  settext(value);
 }
  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      <Box sx={{ width: "30%" }}>
        <Sidebar
          breweries={breweries}
          setbreweries={setbreweries}
          setIndex={setIndex}
        />
      </Box>
      <Box sx={{ width: "70%", padding: "2rem" }}>
        {data && breweries && (
          <Box>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Brewerie
            </Typography>
            <Typography variant="h5" component="div">
              {breweries[brewerieIndex]?.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Phone No:{breweries[brewerieIndex]?.phone}
            </Typography>
            <Typography variant="body2">
              {breweries[brewerieIndex]?.address_1}
              <br />
              {`City: ${breweries[brewerieIndex]?.city}`}
              <br />
              {`State: ${breweries[brewerieIndex]?.state}`}
            </Typography>
            <Box>
              <TextField
                id="outlined-multiline-static"
                label="Review"
                multiline
                rows={2}
                sx={{
                  width: "100%",
                }}
                value={text}
                onChange={handlechange}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "1rem",
                }}
              >
                <Rating
                  name="simple-controlled"
                  value={value}
                  size="small"
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <Button variant="contained" onClick={handleobject}>ADD Review</Button>
              </Box>
            </Box>

            <Box sx={{ height: "55vh" }}>
              {data?.reviews.map(el=>{
                return(
                    <Review key={el} data={data} review={el}/>
                )
              })}
            </Box>
          </Box>
        )}
      </Box>
    </Stack>
  );
};

export default Dashboard;
