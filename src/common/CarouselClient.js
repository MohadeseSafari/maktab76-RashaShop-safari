import Carousel from "react-material-ui-carousel";
import Comma from "assets/image/background/Comma.png";
import { Box, Typography } from "@mui/material";
import {
  ReviewTitle,
  SubCaption,
  BoxComma,
  ContainerBox,
  IconImage,
  MainBox,
} from "common/client/style";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentsClient } from "redux/feature/comment/CommentSlice";
import { useEffect } from "react";
import { BASE_URL_IMAGE } from "config/api";

const CarouselClient = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCommentsClient());
  }, [dispatch]);

  const { commentsClient } = useSelector((state) => state.commentsClient);

  const Item = ({ commentClient }) => {
    const { firstName, lastName, city, icon, comment } = commentClient;

    return (
      <Box style={ContainerBox}>

        <Typography variant="h6" color="primary.light" style={ReviewTitle}>
          نظرات خریداران!
        </Typography>

        <img src={`${BASE_URL_IMAGE}/${icon}`} style={IconImage} alt="user Icon" />

        <Box style={MainBox}>
          <Typography variant="h6">"{comment}"</Typography>

          <Box style={BoxComma}>
            <img src={Comma} alt="Comma" />
            <Box style={SubCaption}>
              <Typography variant="subtitle1">
                {firstName} {lastName}/{city}{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Carousel navButtonsAlwaysInvisible={true} animation={"slide"} swipe={true}>
      {commentsClient.map((commentClient, index) => {
        return <Item commentClient={commentClient} key={index} />;
      })}
    </Carousel>
  );
};

export default CarouselClient;
