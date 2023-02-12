import {
  Avatar,
  Box,
  Button,
  Typography,
  TableBody,
  TableCell,
  TableRow,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import DialIcon from "assets/image/icon/icons8-dial-32.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "redux/feature/category/CategorySlice";
import "styles/style.css";
import { Link } from "react-router-dom";
import { BASE_URL_IMAGE } from "config/api";

const Category = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div
      className="dropdown"
      sx={{ position: "relative", display: "inline-block" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#F65D4E",
          alignItems: "center",
          borderRadius: "50px",
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1px 30px",
          }}
        >
          <img style={{ width: "20px", height: "20px" }} src={DialIcon} />
          <Button>
            <Typography sx={{ color: "#fff", marginLeft: "1px" }}>
              دسته بندی ها
            </Typography>
          </Button>
        </Box>
        <ExpandMoreIcon sx={{ color: "#fff", fontSize: "16px", mr: 2 }} />
      </Box>

      <table className="dropdown-content">
        <TableBody
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            padding: "20px",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "45%" }}>
            {categories.slice(0, 8).map((category) => {
              return (
                <TableRow>
                  <TableCell
                    key={category.id}
                    sx={{ display: "flex", padding: "10px 45px 10px 5px" }}
                  >
                    <ListItemAvatar>
                      <img src={`${BASE_URL_IMAGE}/${category.icon}`} />
                    </ListItemAvatar>
                    <Link
                      style={{ color: "MenuText" }}
                      to={`/category/${category.engName}`}
                    >
                      <ListItemText
                        sx={{ textAlign: "left" }}
                        primary={category.name}
                      />
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </Box>
          <Box sx={{ width: "45%" }}>
            {categories.slice(8, 16).map((category) => {
              return (
                <TableRow>
                  <TableCell
                    key={category.id}
                    sx={{ display: "flex",padding: "10px 45px 10px 5px" }}
                  >
                    <ListItemAvatar>
                      <img src={`${BASE_URL_IMAGE}/${category.icon}`} />
                    </ListItemAvatar>
                    <Link
                      style={{ color: "MenuText" }}
                      to={`category/${category.engName}`}
                    >
                      <ListItemText
                        sx={{ textAlign: "left" }}
                        primary={category.name}
                      />
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </Box>
        </TableBody>
      </table>
    </div>
  );
};

export default Category;

