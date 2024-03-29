import { Card, CardMedia, CardActionArea, Grid, CardContent, Typography, Rating } from "@mui/material";
import { BASE_URL_IMAGE } from "config/api";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="#4A4B8E" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}


function CardProduct({ product, categoryName }) {
  const navigate = useNavigate();
  const { id, name, image, price, off, author, publication } = product;
  const { nameCategory } = useParams();

  return (
    <Grid item xs={3}  >
      <Card sx={{ maxWidth: 350 }}>
        <CardActionArea>
          <Link to={`/book/${id}`}>
          <CardMedia
            component="img"
            height="440"
            sx={{ p: 1, borderRadius: 5 }}
            image={`${BASE_URL_IMAGE}/${image[image.length - 1]}`}
            alt="Book"
          />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">{name}</Typography>
            <Typography variant="body1" color="secondary" fontSize="25">نویسنده: {author}</Typography>
            <Typography variant="body1" color="primary" fontSize="19">نشر: {publication}</Typography>
            <Typography variant="caption" color="#F65D4E" sx={{ fontSize: 22 }}>قیمت: {price}تومان</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default CardProduct;
