import * as React from "react";
import InputUnstyled from "@mui/base/InputUnstyled";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
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

const StyledInputRoot = styled("div")`
  display: flex;
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 400;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const StyledInputElement = styled("input")(
  ({ theme }) => `
  width: 70%;
  font-size: 1.15rem;
  font-weight: 500;
  line-height: 1.5;
  padding: 12px 90px 12px 25px;
  border-radius: 50px;
  font-family:${theme.typography.fontFamily};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};

  &:focus {
    outline: 1px solid ${theme.palette.mode === "dark" ? red[400] : red[200]};
  }
`
);

export const CustomButton = styled(ButtonUnstyled)(
  ({ theme }) => `
  font-family:${theme.typography.fontFamily};
  font-weight: 600;
  font-size: 1.15rem;
  line-height: 1.5;
  background-color: ${red[400]};
  padding: 13px 50px;
  border-radius: 50px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  position: absolute;
  top: 0;
  right: 20px;

  &:hover {
    background-color: ${red[500]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${red[500]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
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
