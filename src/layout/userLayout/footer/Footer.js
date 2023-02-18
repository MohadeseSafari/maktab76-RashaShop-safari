import { Avatar, Grid, Typography, Box, List, ListItem } from "@mui/material";
import Pinterest from "assets/image/icon/pinterest-30.png";
import Facebook from "assets/image/icon/facebook-30.png";
import Linkedin from "assets/image/icon/linkedin-30.png";
import Twitter from "assets/image/icon/twitter-circled-30.png";
import FooterLogo from "assets/image/logo/footer_img.png";
import logo from "assets/image/logo/logo-1.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const { categories } = useSelector((state) => state.categories);
  return (
    <footer style={{ backgroundColor: "#282828", marginTop: "70px" }}>
      <section>
        <Grid container spacing={2} padding="40px 70px">
          <Grid item xs={2}>
            <Typography sx={{ color: "#fff", fontSize: "25px", mt: 1 }}>
            دسته بندی ها (1)
            </Typography>
            <List>
              {categories.slice(11, 16).map((category) => (
                <ListItem key={category.id} sx={{ padding: "0px 8px" }}>
                  <Link to={`/category/${category.engName}`}>
                    <Typography
                      sx={{
                        textAlign: "left",
                        fontSize: "22px",
                        color: "#999999",
                        "&:hover": {
                          color: "#f4402f",
                        },
                      }}
                    >
                      {category.name}
                    </Typography>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={2}>
            <Typography sx={{ color: "#fff", fontSize: "25px", mt: 1 }}>
              دسته بندی ها (2)
            </Typography>
            <List>
              {categories.slice(5, 10).map((category) => (
                <ListItem key={category.id} sx={{ padding: "0px 8px" }}>
                  <Link to={`/category/${category.engName}`}>
                    <Typography
                      sx={{
                        textAlign: "left",
                        fontSize: "22px",
                        color: "#999999",
                        "&:hover": {
                          color: "#f4402f",
                        },
                      }}
                    >
                      {category.name}
                    </Typography>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={2}>
            <Typography sx={{ color: "#fff", fontSize: "25px", mt: 1 }}>
              سرویس های ما
            </Typography>
            <List>
              <ListItem sx={{ padding: "0px 8px" }}>
                <Typography
                  sx={{
                    color: "#999999",
                    padding: "0px 8px",
                    cursor: "pointer",
                    "&:hover": {
                      color: "#f4402f",
                    },
                  }}
                >
                  ارتباط با ما
                </Typography>
              </ListItem>

              <ListItem sx={{ padding: "0px 8px" }}>
                <Typography
                  sx={{
                    color: "#999999",
                    padding: "0px 8px",
                    cursor: "pointer",
                    "&:hover": {
                      color: "#f4402f",
                    },
                  }}
                >
                  امکانات
                </Typography>
              </ListItem>

              <ListItem sx={{ padding: "0px 8px" }}>
                <Typography
                  sx={{
                    color: "#999999",
                    padding: "0px 8px",
                    cursor: "pointer",
                    "&:hover": {
                      color: "#f4402f",
                    },
                  }}
                >
                  نحوه ارسال فروشگاه
                </Typography>
              </ListItem>

              <ListItem sx={{ padding: "0px 8px" }}>
                <Typography
                  sx={{
                    color: "#999999",
                    padding: "0px 8px",
                    cursor: "pointer",
                    "&:hover": {
                      color: "#f4402f",
                    },
                  }}
                >
                  موجودی کالا ها
                </Typography>
              </ListItem>

              <ListItem sx={{ padding: "0px 8px" }}>
                <Typography
                  sx={{
                    color: "#999999",
                    padding: "0px 8px",
                    cursor: "pointer",
                    "&:hover": {
                      color: "#f4402f",
                    },
                  }}
                >
                  مرجوعی کالاها
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={3}>
            <List>
              <ListItem sx={{ padding: "0px 8px", mb: 1 }}>
                <Typography sx={{ color: "#fff", fontSize: "25px" }}>
                  تماس با ما
                </Typography>
              </ListItem>

              <ListItem sx={{ padding: "0px 8px", mb: 1 }}>
                <Typography color="#F65D4E" variant="h5">
                  113 - 54 - (021) +
                </Typography>
              </ListItem>

              <ListItem sx={{ padding: "0px 8px" }}>
                <Typography color="#999999">
                  شنبه - پنجشنبه : ساعت 09:00 -20:00
                  <br />
                  جمعه : ساعت 11:00 - 19:00
                </Typography>
              </ListItem>

              <ListItem sx={{ padding: "5px 8px" }}>
                <Typography color="#fff" fontFamily="cursive">
                  RashaBook@email.com
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              borderLeft: "2px solid rgb(68,68,68)",
              borderWidth: "0 1px 0",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Avatar
                alt="logo"
                src={logo}
                sx={{ mr: 1.5, width: "60px", height: "60px" }}
              />
              <Typography color="#fff" variant="h4" component="h1">
                فروشـگاه راشـــا
              </Typography>
            </Box>
            <Typography color="#999999">
              میدان انقلاب، خیابان انقلاب، خیابان ۱۲ فروردین، خیابان لبافی نژاد
              نرسیده به خیابان منیری جاوید (اردیبهشت)، شماره ۱۸۵
            </Typography>
            <List
              sx={{
                display: "flex",
                maxWidth: 360,
                justifyContent: "flex-end",
              }}
            >
              <ListItem sx={{ width: "20%" }}>
                <Link to="https://www.pinterest.com/login/">
                  <img src={Pinterest} alt="Pinterest" />
                </Link>
              </ListItem>
              <ListItem sx={{ textAlign: "center", width: "20%" }}>
                <Link to="https://www.facebook.com/login">
                  <img src={Facebook} alt="Facebook" />
                </Link>
              </ListItem>
              <ListItem sx={{ textAlign: "center", width: "20%" }}>
                <Link to="https://www.linkedin.com/feed/">
                  <img src={Linkedin} alt="Linkedin" />{" "}
                </Link>
              </ListItem>
              <ListItem sx={{ textAlign: "center", width: "20%" }}>
                <Link to="https://twitter.com/login/">
                  <img src={Twitter} alt="Twitter" />ّ
                </Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </section>
      <section
        style={{
          display: "flex",
          borderStyle: "solid",
          borderWidth: "1px 0 0",
          borderColor: "rgb(68,68,68)",
          transition:
            "background .3s,border .3s,border-radius .3s,box-shadow .3s",
          padding: "45px 50px",
        }}
      >
        <Grid
          container
          columnSpacing={{ xs: 4, md: 3 }}
          sx={{ justifyContent: "space-between" }}
        >
          <Grid item columns={{ xs: 6, md: 12 }}>
            <img src={FooterLogo} alt="FooterLogo" />
          </Grid>
          <Grid item columns={{ xs: 6, md: 12 }}>
            <Typography
              sx={{
                color: "#999999",
              }}
            >
              برای استفاده از مطالب فروشگاه راشـا، داشتن «هدف غیرتجاری» و ذکر
              «منبع» کافیست. تمامی حقوق این وب سایت متعلق به فروشگاه راشاست.
            </Typography>
          </Grid>
        </Grid>
      </section>
    </footer>
  );
};

export default Footer;
