import * as React from "react";
import { styled } from "@mui/system";
import InputUnstyled from "@mui/base/InputUnstyled";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";

//import background
import LoginBackground from "assets/image/background/Login-Background.jpg";

const grey = {
  20: "#ffffffd0",
  50: "#f7f8fa",
  100: "#dfe3e9",
  200: "#95a4b9",
  300: "#7c8fa8",
  400: "#697f9b",
  500: "#A0AAB4",
  600: "#8b9cb2",
  700: "#445367",
  800: "#596575",
  900: "#3b4859",
};

const red = {
  600: "#EB5F5D",
};
const darkblue = {
  800: "#3B4859",
  900: "#262f3a",
};

const StyledInputRoot = styled("div")(
  ({ theme }) => `
  display: flex;
  font-weight: 500;
  font-family: ${theme.typography.fontFamily};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[500]};
  border-radius: 18px;
  margin: 5px;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    
  }
`
);

const StyledInputElement = styled("input")(
  ({ theme }) => `
  width: 18rem;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: ${theme.typography.fontFamily};
  line-height: 1;
  flex-grow: 1;
  color: ${theme.palette.mode === "dark" ? grey[20] : grey[900]};
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 7px 22px;
  outline: 0;
  &:hover {
    border-color: ${theme.palette.mode === "dark" ? grey[200] : grey[600]};
`
);

export const IconButton = styled(ButtonUnstyled)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: #adb6c2;
  background: inherit;
  cursor: pointer;
`;

export const InputAdornment = styled("div")`
  position: absolute;
  margin: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  right: 5px;
`;

export const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  const { components, ...other } = props;
  return (
    <InputUnstyled
      components={{
        Root: StyledInputRoot,
        Input: StyledInputElement,
        ...components,
      }}
      {...other}
      ref={ref}
    />
  );
});

export const CustomButton = styled(ButtonUnstyled)(
  ({ theme }) => `
  width: 18rem;
  font-weight: bold;
  font-size: 1.45rem;
  font-family: ${theme.typography.fontFamily};
  background-color: ${theme.palette.mode === "dark" ? red[600] : darkblue[800]};
  background:'inherit' !important;
  padding: 10px 24px;
  border-radius: 18px;
  margin-top: 25px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: ${darkblue[900]};
  }

 

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
);

export const ContainerImage = {
  backgroundImage: `url(${LoginBackground})`,
  backgroundRepeat: "no-repeat",
  height: "100vh",
};

export const labelInput = {
  marginRight: "17px",
  marginTop: "10px",
};

export const errorHolder = {
  color: "#d63031",
  textAlign: "right",
  marginRight: 2,
  fontSize: 18,
};

export const ForgetPassword = {
  marginTop: 2,
  cursor: "pointer",
};

export const fontIcon={
  fontSize: 22 
}
