import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Box,
  Container,
  InputLabel,
  Stack,
  Typography,
  FormHelperText,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
//import common components
import {
  CustomInput,
  InputAdornment,
  IconButton,
  CustomButton,
  ContainerImage,
  labelInput,
  errorHolder,
  ForgetPassword,
  fontIcon,
} from "pages/managementPanel/loginForm/Style";

import LoginNavbar from "layout/managementLayout/login/LoginNavbar";

// import icons
import PersonIcon from "@mui/icons-material/Person";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import "styles/style.css";

import { useDispatch, useSelector } from "react-redux";
import { login } from "redux/feature/user/UsersSlice";

const initialValues = {
  username: "",
  password: "",
};

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("نام کاربری نمی تواند خالی باشد!"),
  password: Yup.string().required("رمز عبور نمی تواند خالی باشد!"),
});

function LoginForm() {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, isLoggedIn } = useSelector((state) => state.users);
  const [showPassword, setShowPassword] = useState(false);
  const [openToast, setOpenToast] = useState(true);

  const handleClickShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handelSubmit = async (values, props) => {
    dispatch(login(values));
    props.resetForm();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenToast(false);
  };

  if (isLoggedIn) {
    navigate("products");
  }

 

  return (
    <Container maxWidth="xl" style={ContainerImage}>
      <LoginNavbar />
      <Stack spacing={2} sx={{ width: "100%" }}>
        {error && (<Snackbar open={openToast} autoHideDuration={6000} onClose={handleClose}>

            <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
              <Typography sx={{ ml: 1 }}>{error}</Typography>
            </Alert>

          </Snackbar>
        )}
      </Stack>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handelSubmit}
      >
        {(props) => (
          <Form className="loginForm" autoComplete="false">
            <h1 className="start">
              <span className="end1"></span>
              <span className="middle1">مدیریت</span>
              <span className="middle2"></span>
              <span className="end2">راشــا</span>
            </h1>

            <Box display="row">
              <Stack direction="column">
                <InputLabel style={labelInput}>نام کاربری</InputLabel>
                <CustomInput
                  name="username"
                  type="text"
                  autocomplete="false"
                  value={props.values.username}
                  onChange={props.handleChange}
                  endAdornment={
                    <InputAdornment>
                      <IconButton>
                        <PersonIcon style={fontIcon} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {props.errors.username ? (
                  <FormHelperText style={errorHolder}>
                    {props.errors.username}
                  </FormHelperText>
                ) : null}
              </Stack>
            </Box>

            <Box display="row">
              <Stack direction="column">
                <InputLabel style={labelInput}>رمز عبور</InputLabel>
                <CustomInput
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={props.values.password}
                  onChange={props.handleChange}
                  endAdornment={
                    <InputAdornment>
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? (
                          <VisibilityOffOutlinedIcon style={fontIcon} />
                        ) : (
                          <VisibilityOutlinedIcon style={fontIcon} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {props.errors.password ? (
                  <FormHelperText style={errorHolder}>
                    {props.errors.password}
                  </FormHelperText>
                ) : null}
              </Stack>
            </Box>

            <CustomButton type="submit" disabled={!props.isValid}>
              ورود
            </CustomButton>

            <Typography style={ForgetPassword}>
              پسورد خود را فراموش کردید؟
            </Typography>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default LoginForm;
