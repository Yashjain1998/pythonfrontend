import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// {data:{name, address_1, phone, website_url, state, city}}
export default function BasicCard({ onClick, index, data:{name, address_1, phone, website_url, state, city}}) {
  return (
    <Card sx={{ minWidth: 250, minHeight:200 }} onClick={()=>onClick(index)}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Brewerie
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Phone No: {phone}
        </Typography>
        <Typography variant="body2">
          {address_1}
          <br />
          {`City: ${city}`}
          <br/>
          {`State: ${state}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={website_url}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
