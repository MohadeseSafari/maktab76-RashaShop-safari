import { Box, Container, Typography } from "@mui/material";
import h2_bg from "assets/image/background/h2_bg.png";
import h2_img from "assets/image/background/h2_img.png";
import { CustomInput, CustomButton } from "layout/userLayout/footer/style";
import "styles/style.css";

const ContactUs = () => {
  return (
    <div
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
        <Box sx={{ width: "50%" }}>
          <img src={h2_bg} alt="background" />
          <img src={h2_img} className="community-background" alt="background" />
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "right",
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "whitesmoke", padding: "5px 100px" }}
          >
            با ما در ارتباط باشید
          </Typography>
          <Typography
            sx={{
              color: "whitesmoke",
              fontSize: 18,
              padding: "0px 20px 5px 100px",
            }}
          >
            آدرس ایمیل خود را برای دریافت به‌روزرسانی‌های منظم و همچنین اخبار
            رویدادهای آینده و پیشنهادات خاص وارد کنید.
          </Typography>
          <CustomInput
            type="text"
            placeholder="ایمیل خود را وارد کنید..."
            endAdornment={<CustomButton>ثبت کنید</CustomButton>}
          />
        </Box>
      </Container>
    </div>
  );
};

export default ContactUs;

