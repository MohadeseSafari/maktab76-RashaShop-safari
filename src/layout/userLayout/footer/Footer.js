import {
  Box,
  Container,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Pinterest from "assets/image/icon/pinterest-30.png";
import Facebook from "assets/image/icon/facebook-30.png";
import Linkedin from "assets/image/icon/linkedin-30.png";
import Twitter from "assets/image/icon/twitter-circled-30.png";
import h2_bg from "assets/image/background/h2_bg.png";
import h2_img from "assets/image/background/h2_img.png";
import { CustomInput } from "layout/userLayout/footer/style";
import "styles/style.css";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          backgroundColor: "#A1D0B9",
          borderRadius: "20px",
          width: "100%",
        }}
      >
        <Box>
          <img src={h2_bg} />
          <img src={h2_img} className="community-background" alt="background" />
        </Box>
        <Box>
          <Typography sx={{ color: "whitesmoke" }}>
            با ما در ارتباط باشید
          </Typography>
          <CustomInput placeholder="ایمیل خود را وارد کنید..."/>
        </Box>
        {/* <Box>
          <Typography
            sx={{
              color: "whitesmoke",
            }}
          >
            برای استفاده از مطالب فروشگاه راشـا، داشتن «هدف غیرتجاری» و ذکر
            «منبع» کافیست. تمامی حقوق این وب سایت متعلق به فروشگاه راشاست.
          </Typography>
          <List
            sx={{
              display: "flex",
              maxWidth: 360,
            }}
          >
            <ListItem sx={{ width: "20%" }}>
              <Link href="https://www.pinterest.com/login/" underline="none">
                <img src={Pinterest} alt="Pinterest" />
              </Link>
            </ListItem>
            <ListItem sx={{ textAlign: "center", width: "20%" }}>
              <Link href="https://www.facebook.com/login" underline="none">
                <img src={Facebook} alt="Facebook" />
              </Link>
            </ListItem>
            <ListItem sx={{ textAlign: "center", width: "20%" }}>
              <Link href="https://www.linkedin.com/feed/" underline="none">
                <img src={Linkedin} alt="Linkedin" />
              </Link>
            </ListItem>
            <ListItem sx={{ textAlign: "center", width: "20%" }}>
              <Link href="https://twitter.com/login/" underline="none">
                <img src={Twitter} alt="Twitter" />ّ
              </Link>
            </ListItem>
          </List>
        </Box> */}
      </Container>
    </footer>
  );
};

export default Footer;
