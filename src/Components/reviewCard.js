import * as React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import Rating from "@mui/material/Rating";

// {data:{name, address_1, phone, website_url, state, city}}
export default function ReviewCard({ data: { name }, review: { text, rating } }) {
  return (
    <Card sx={{ minWidth: 250, minHeight: 100 }}>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
        >
          {name}
          <Rating
            name="simple-controlled"
            value={rating}
            size="small"
            sx={{ marginLeft: "auto" }}
          />
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {text || ""}
        </Typography>
        {/* <TextField
          id="outlined-multiline-static"
          label="Review"
          multiline
          rows={2}
          sx={{
            width:"100%",
          }}
        /> */}
      </CardContent>
    </Card>
  );
}
