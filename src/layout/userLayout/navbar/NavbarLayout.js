import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LightTooltip from "common/Tooltip";
import {
  Avatar,
  Box,
  Toolbar,
  Typography,
  Badge,
  AppBar,
  Button,
  ListItem,
  List,
} from "@mui/material";
import logo from "assets/image/logo/logo-1.svg";
import { BASE_URL_IMAGE } from "config/api";
import { Icon } from "@iconify/react";
import "layout/userLayout/navbar/style.css";
import { useDispatch, useSelector } from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchBar from "components/Home/searchBar/SearchBar";
import roundGridView from "@iconify/icons-ic/round-grid-view";
import { fetchCategories } from "redux/feature/category/CategorySlice";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import gridViewOutlineRounded from "@iconify/icons-material-symbols/grid-view-outline-rounded";

const NavbarLayout = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { categories } = useSelector((state) => state.categories);
  const [isHovering, setIsHovering] = useState(false);

  const dispatch = useDispatch();
  const trigger = document.querySelectorAll(".trigger-dropdown");
  const background = document.querySelector(".dropdownBackground");
  const nav = document.querySelector(".top-nav");

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  //handel MouseEnter
  trigger.forEach((listItem) =>
    listItem.addEventListener("mouseenter", handelEnterMouse)
  );

  //handel MouseLeave
  trigger.forEach((listItem) =>
    listItem.addEventListener("mouseleave", handelLeaveMouse)
  );

  function handelEnterMouse() {
    setIsHovering(true);
    this.classList.add("trigger-enter");
    background.classList.add("open");

    setTimeout(
      () =>
        this.classList.contains("trigger-enter") &&
        this.classList.add("trigger-enter-active"),
      100
    );

    const dropdown = this.querySelector(".dropdown");

    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
      width: dropdownCoords.width,
      height: dropdownCoords.height - 20,
      top: dropdownCoords.top - navCoords.top + 15,
      left: dropdownCoords.left - navCoords.left,
    };
    background.style.setProperty("width", `${coords.width}px`);
    background.style.setProperty("height", `${coords.height}px`);
    background.style.setProperty("top", `${coords.top}px`);
    background.style.setProperty("left", `${coords.left}px`);
  }

  function handelLeaveMouse() {
    this.classList.remove("trigger-enter", "trigger-enter-active");
    background.classList.remove("open");
    setIsHovering(false);
  }

  return (
    <AppBar elevation={1} style={{ background: "white" }}>
      <Toolbar sx={{ position: "relative" }} className="top-nav">
        <div class="dropdownBackground">
          <span class="arrow"></span>
        </div>
        <List
          className="cool"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: 0,
          }}
        >
          <ListItem>
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
              <Avatar alt="logo" src={logo} sx={{ mr: 1.5 }} />
              <Typography color="secondary" variant="h4" component="h1">
                فروشـگاه راشـــا
              </Typography>
            </Link>
          </ListItem>

          <ListItem className="trigger-dropdown">
            <Button
              sx={{
                backgroundColor: "#F65D4E",
                borderRadius: "50px",
                color: "#fff",
                padding: "10px 40px",
                "&:hover": {
                  backgroundColor: "#D74D48",
                  textShadow: "2px 2px 6px rgba(255, 255, 255, 0.374)",
                },
              }}
              startIcon={
                isHovering ? (
                  <Icon icon={roundGridView} className="grid-icon" />
                ) : (
                  <Icon icon={gridViewOutlineRounded} className="grid-icon" />
                )
              }
              endIcon={
                <ExpandMoreIcon
                  className={isHovering ? "expandLess-icon" : "expandMore-icon"}
                />
              }
            >
              <Typography sx={{ fontSize: 20 }}>دسته بندی ها</Typography>
            </Button>

            <div
              className="dropdown"
              style={{
                alignItems: "center",
                width: "70%",
                padding: "20px",
              }}
            >
              <Box className="box-column">
                {categories.slice(0, 8).map((category) => {
                  return (
                    <ListItem
                      key={category.id}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: "7px 2px",
                        justifyContent: "space-between",
                        borderBottom: "1px solid #e1e1e1",
                        "&:hover": {
                          borderBottom: "2px solid #e1e1e1",
                        },
                      }}
                    >
                      <img
                        src={`${BASE_URL_IMAGE}/${category.icon}`}
                        alt="category icon"
                        style={{ width: "25px", height: "25px" }}
                      />
                      <Link
                        style={{ color: "MenuText" }}
                        to={`/category/${category.engName}`}
                      >
                        <span style={{ textAlign: "left", fontSize: "17px" }}>
                          {category.name}
                        </span>
                      </Link>
                    </ListItem>
                  );
                })}
              </Box>
              <Box className="box-column">
                {categories.slice(8, 16).map((category) => {
                  return (
                    <ListItem
                      key={category.id}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: "7px 2px",
                        justifyContent: "space-between",
                        borderBottom: "1px solid #e1e1e1",
                        "&:hover": {
                          borderBottom: "2px solid #e1e1e1",
                        },
                      }}
                    >
                      <img
                        src={`${BASE_URL_IMAGE}/${category.icon}`}
                        alt="category icon"
                        style={{ width: "25px", height: "25px" }}
                      />
                      <Link
                        style={{ color: "MenuText" }}
                        to={`/category/${category.engName}`}
                      >
                        <span style={{ textAlign: "left", fontSize: "17px" }}>
                          {category.name}
                        </span>
                      </Link>
                    </ListItem>
                  );
                })}
              </Box>
            </div>
          </ListItem>

          <SearchBar />

          <ListItem
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <Link to="/management">
              <LightTooltip title="مدیریت">
                <ManageAccountsOutlinedIcon
                  color="secondary"
                  sx={{ mr: 1, mt: 1, fontWeight: 100 }}
                />
              </LightTooltip>
            </Link>

            <Link
              to="/cart"
              size="large"
              style={{ display: "flex", alignItems: "center" }}
            >
              <LightTooltip title="سبد خرید">
                <Badge
                  badgeContent={cartItems.length}
                  color="pink"
                  sx={{ color: "whitesmoke" }}
                >
                  <ShoppingCartOutlinedIcon
                    color="secondary"
                    sx={{ ml: 2, fontWeight: 100 }}
                  />
                </Badge>
              </LightTooltip>
            </Link>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarLayout;
