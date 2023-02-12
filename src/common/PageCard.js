import { BASE_URL_IMAGE } from "config/api";
import {
  Box,
  Breadcrumbs,
  Typography,
  Divider,
  Chip,
  Rating,
  Stack,
  List,
  ListItem,
  ListItemAvatar,
  Grid,
  Button,
} from "@mui/material";
import { increase } from "redux/feature/cart/CartSlice";
import {
  CustomButton,
  AddButton,
  DecreaseButton,
  FavoriteButton,
} from "common/AddButton";
import {
  customInput,
  BoxQuantity,
  Item,
} from "components/Home/cartTable/style";
import delivery from "assets/image/background/delivery.jpg";
import { NavLink, Outlet } from "react-router-dom";
import Book from "assets/image/background/Book.gif";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useState, useEffect, useRef } from "react";
import "styles/style.css";
import ReactImageZoom from "react-image-zoom";

function PageCard({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const refs = useRef([]);
  refs.current = [];
  const [count, setCount] = useState(0);
  const [firstImage, setFirstImage] = useState("");
  const [showMore, setShowMore] = useState(false);

  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("cartItems")) {
      const IndexCartItem = JSON.parse(
        localStorage.getItem("cartItems")
      ).findIndex((item) => item.id === data.id);
      if (IndexCartItem === -1) {
        setCount(0);
      } else {
        const cartItem = JSON.parse(localStorage.getItem("cartItems")).filter(
          (item) => item.id === data.id
        );
        setCount(cartItem[0].count);
      }
    }

    setFirstImage(image[0]);
  }, [data.id]);

  const {
    id,
    name,
    image,
    author,
    translator,
    publication,
    description,
    genre,
    price,
    off,
    quantity,
  } = data;

  const handelAddToCart = (data) => {
    dispatch(increase({ data, count }));
    navigate("/cart");
  };

  const handelIncrease = ({ data, count }) => {
    setCount(count + 1);
  };

  const handelDecrease = ({ data, count }) => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  const hoverHandler = (picture, index) => {
    setFirstImage(picture);
    refs.current[index].classList.add("activeImage");
    for (var j = 0; j < picture.length; j++) {
      if (index !== j) {
        refs.current[j].classList.remove("activeImage");
      }
    }
  };
  return (
    <Grid
      container
      rowSpacing={12}
      columnSpacing={4}
      sx={{ marginTop: "30px", justifyContent: "center", alignItems: "center" }}
    >
      <Grid item xs={5} md={5}>
        <Item elevation={2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ReactImageZoom
              {...{
                img: `${BASE_URL_IMAGE}/${firstImage}`,
                width: 550,
                height: 760,
                zoomPosition: "original",
              }}
            />
            <List sx={{ display: "flex", mx: 5, justifyContent: "center" }}>
              {image.map((picture, index) => (
                <ListItem sx={{ width: "14%" }}>
                  <ListItemAvatar
                    className={index == 0 ? "activeImage" : ""}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      p: 1,
                    }}
                    onMouseOver={() => hoverHandler(picture, index)}
                    ref={addRefs}
                  >
                    <img
                      alt="Book Cover"
                      key={index}
                      src={`${BASE_URL_IMAGE}/${picture}`}
                      style={{ maxWidth: "50px" }}
                    />
                  </ListItemAvatar>
                </ListItem>
              ))}
            </List>
          </Box>
        </Item>
      </Grid>

      <Grid item xs={12} md={6}>
        <Item
          elevation={3}
          sx={{ p: 4, backgroundColor: "#F7F7F8", mx: 5, textAlign: "left" }}
        >
          <Typography
            variant="h5"
            color="secondary"
            sx={{ mb: 1, fontSize: 35 }}
          >
            کتاب {name}
          </Typography>

          <Grid
            container
            spacing={1}
            direction="row"
            sx={{ display: "flex" }}
          >
            <Grid  >
              <Item item xs={3} elevation={0}>
                <Typography sx={{ lineHeight: 1 }}>
                  نویسنده : {author}
                </Typography>
              </Item>
            </Grid>

            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ height: "20px" }}
            />

            <Grid >
              <Item item xs={3} elevation={0}>
                <Rating
                  defaultValue={4}
                  precision={0.25}
                  readOnly
                  sx={{ fontSize: "17px", textAlign: "start"}}
                />
              </Item>
            </Grid>

            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ height: "20px" }}
            />

            <Grid >
              <Item item xs={3} elevation={0}>
                <Typography sx={{ lineHeight: 1 }}>
                  ناشر: {publication}
                </Typography>
              </Item>
            </Grid>

            {translator ? (
              <>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ height: "20px" }}
                />

                <Grid>
                  <Item item xs={3} elevation={0}>
                    <Typography sx={{ lineHeight: 1 }}>
                      مترجم: {translator}
                    </Typography>
                  </Item>
                </Grid>
              </>
            ) : (
              ""
            )}
          </Grid>
          <Divider />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            {off > 0 ? (
              <Typography
                color="#A5A8AD"
                sx={{
                  fontSize: 25,
                  mr: 1,
                  mt: 1,
                  textDecoration: "line-through",
                }}
              >
                {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </Typography>
            ) : (
              ""
            )}
            {off > 0 ? (
              <Typography
                variant="h6"
                align="right"
                color="pink.main"
                sx={{ fontSize: 30, fontWeight: "bold" }}
              >
                {(price - (price * off) / 100)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                <Typography variant="caption" sx={{ fontSize: 15 }}>
                  تومان{" "}
                </Typography>
              </Typography>
            ) : (
              <Typography
                variant="h6"
                align="end"
                color="pink.main"
                sx={{ fontSize: 30, fontWeight: "bold" }}
              >
                {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                <Typography variant="caption" sx={{ fontSize: 15 }}>
                  تومان{" "}
                </Typography>
              </Typography>
            )}

            {/* {off > 0 ? (
              <Chip
                label={`${off}%`}
                color="error"
                sx={{ fontSize: 22, fontWeight: 700 }}
              />
            ) : (
              ""
            )} */}
          </Box>

          <Typography
            variant="h6"
            color="secondary"
            sx={{
              mb: 1,
              fontSize: 20,
              fontWeight: 700,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {showMore ? (
              <div dangerouslySetInnerHTML={{ __html: description }} />
            ) : (
              <div
                dangerouslySetInnerHTML={{
                  __html: `${description.substring(0, 270)}`,
                }}
              />
            )}
            {description.length > 270 ? (
              <Button onClick={() => setShowMore(!showMore)}>
                {showMore ? `بستن` : `نمایش بیشتر`}
              </Button>
            ) : (
              ""
            )}
          </Typography>

          <Divider />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              my: 1,
            }}
          >
            <Typography>موجودی کالا</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mx: 4,
              }}
            >
              <FavoriteButton>افزودن به علاقمندی</FavoriteButton>
              <CustomButton
                variant="contained"
                onClick={() => handelAddToCart(data)}
              >
                افزودن به سبد
              </CustomButton>

              {count < quantity ? (
                <Box style={BoxQuantity}>
                  <AddButton onClick={() => handelIncrease({ data, count })}>
                    +
                  </AddButton>
                  <input value={count} style={customInput} />
                  <DecreaseButton
                    onClick={() => handelDecrease({ data, count })}
                  >
                    -
                  </DecreaseButton>
                </Box>
              ) : (
                <>
                  <AddButton
                    disabled
                    onClick={() => handelIncrease({ data, count })}
                  >
                    +
                  </AddButton>
                  <input value={count} style={customInput} />
                  <DecreaseButton
                    disabled
                    onClick={() => handelDecrease({ data, count })}
                  >
                    -
                  </DecreaseButton>
                </>
              )}
            </Box>
          </Box>

          <Divider />

          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "baseline",
              my: 1,
            }}
          >
            <Typography variant="h6" color="#A5A8AD" sx={{ fontSize: 22 }}>
              دسته بندی :
            </Typography>
            {genre.map((item, index) => (
              <Chip
                key={index}
                label={item}
                sx={{ fontSize: 17, fontWeight: 700 }}
              />
            ))}
          </Stack>

          <Divider />

          <Grid container columnSpacing={3} sx={{ my: 2 }}>
            <Grid item xs={6}>
              <Item
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ mx: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 900 }}>
                    نسخه الکترونیکی کتاب
                  </Typography>
                </Box>
                <img width="100px" src={Book} alt="Book" />
              </Item>
            </Grid>

            <Grid item xs={6}>
              <Item
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    mx: 2,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 900 }}>
                    ارسال رایگان
                  </Typography>
                  <Typography sx={{ fontSize: "17px" }}>
                    برای سفارش بالای 500 هزار تومان
                  </Typography>
                </Box>
                <img width="100px" src={delivery} alt="delivery" />
              </Item>
            </Grid>
          </Grid>
        </Item>
      </Grid>

      <Grid item xs={10} sx={{ mb: 4 }}>
        <Item
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 0,
          }}
        >
          <div role="presentation" className="singleBookLink">
            <Breadcrumbs sx={{ fontSize: 28 }}>
              <NavLink
                to="BookDescription"
                style={({ isActive }) => ({
                  color: isActive ? "#000000" : "#999999",
                  borderBottom: isActive ? "2px solid #F65D4E" : "none",
                })}
              >
                توضیحات
              </NavLink>

              <NavLink
                to="AdditionalInformation"
                style={({ isActive }) => ({
                  color: isActive ? "#000000" : "#999999",
                  borderBottom: isActive ? "2px solid #F65D4E" : "none",
                })}
              >
                مشخصات کتاب
              </NavLink>
              <NavLink
                to="Review"
                style={({ isActive }) => ({
                  color: isActive ? "#000000" : "#999999",
                  borderBottom: isActive ? "2px solid #F65D4E" : "none",
                })}
              >
                نظرات
              </NavLink>
            </Breadcrumbs>
          </div>
        </Item>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default PageCard;
