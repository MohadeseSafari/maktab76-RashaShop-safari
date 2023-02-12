import * as React from "react";
import { styled } from "@mui/system";
import InputUnstyled from "@mui/base/InputUnstyled";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";

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

const StyledInputRoot = styled("div")(
  ({ theme }) => `
    display: flex;
    font-weight: 500;
    font-family: ${theme.typography.fontFamily};
    border: 1px solid ${theme.palette.yellow.light};
    border-radius: 50px;
    margin: 10px;
    align-items: center;
    justify-content: center;
  `
);

const StyledInputElement = styled("input")(
  ({ theme }) => `
    width: 40rem;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: ${theme.typography.fontFamily};
    line-height: 1;
    flex-grow: 1;
    color: ${theme.palette.mode === "dark" ? grey[20] : grey[900]};
    background: ${theme.palette.yellow.light};
    border: none;
    border-radius: inherit;
    padding: 5px 22px;
    outline: 0;
  `
);

export const IconButton = styled(ButtonUnstyled)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: #272727;
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
