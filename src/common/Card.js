import { Card, CardMedia, CardActionArea, Grid, CardContent, Typography, Rating } from "@mui/material";
import { BASE_URL_IMAGE } from "config/api";
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


function CardProduct({ product }) {

  const { id, name, image, price, author, publication } = product;
  return (
    <Grid item  >
      <Card sx={{ maxWidth: 235 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            sx={{ p: 1, borderRadius: 5 }}
            image={`${BASE_URL_IMAGE}/${image[image.length - 1]}`}
            alt="Book"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">{name}</Typography>
            <Typography variant="body1" color="secondary" fontSize="25">نویسنده: {author}</Typography>
            <Typography variant="body1" color="primary" fontSize="19">نشر: {publication}</Typography>
            <Typography variant="caption" color="error" fontSize="20">قیمت: {price}تومان</Typography>
            <StyledRating sx={{ direction: 'rtl' }} defaultValue={5} IconContainerComponent={IconContainer} getLabelText={(value) => customIcons[value].label} highlightSelectedOnly />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default CardProduct;
