import * as React from "react";
import InputUnstyled from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";

const red = {
  200: "#FF5C56",
  400: "#F65D4E",
  500: "#D74D48",
  600: "#a53834",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const StyledInputRoot = styled("div")(
  ({ theme }) => `
  display: flex;
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 400;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`
);

export const StyledInputElement = styled("input")(
  ({ theme }) => `
  width: 320px;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 50px;
  font-family:${theme.typography.fontFamily}
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};

  &:focus {
    outline: 2px solid ${theme.palette.mode === "dark" ? red[400] : red[200]};
  }
`
);

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
