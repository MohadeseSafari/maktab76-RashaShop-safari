import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { BASE_URL_IMAGE } from "config/api";

function CardProduct({ children }) {
  console.log(children);
  const { id, name, image, price, off } = children;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`${BASE_URL_IMAGE}/${image[image.length - 1]}`}
          alt="Book"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardProduct;
