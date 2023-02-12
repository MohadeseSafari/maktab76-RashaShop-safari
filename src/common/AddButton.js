import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";

export const CustomButton = styled(ButtonUnstyled)(
  ({ theme }) => `
  width: 9rem;
  font-weight: bold;
  font-size: 1.45rem;
  font-family: ${theme.typography.fontFamily};
  background-color: #f65d4e;
  background:'inherit' !important;
  padding: 7px 15px;
  border-radius: 50px;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #D95032;
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

export const FavoriteButton = styled(ButtonUnstyled)(
  ({ theme }) => `
  width: 9rem;
  font-weight: bold;
  font-size: 1.3rem;
  font-family: ${theme.typography.fontFamily};
  background-color: #F7F7F8;
  padding: 7px 15px;
  color: ${theme.palette.secondary};
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    color: #f65d4e;
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


export const AddButton = styled(ButtonUnstyled)(
  ({ theme }) => `
display: flex;
height: 49px;
top: 0;
z-index: 9;
bottom: 0;
width: 37%;
justify-content: center;
align-items: center;
font-weight: 900;
font-size: 1.75rem;
font-family: ${theme.typography.fontFamily};
background-color: #fff;
background:'inherit' !important;
padding: 0;
color: black;
transition: all 150ms ease;
cursor: pointer;
border: none;
  
  &:hover {
    background-color: #F65D4E;
    border:"1px solid #E6E6E6",
  }

 

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    border: none;
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
);

export const DecreaseButton = styled(ButtonUnstyled)(
  ({ theme }) => `
display: flex;
height: 49px;
z-index: 9;
top: 0;
bottom: 0;
width: 37%;
justify-content: center;
align-items: center;
font-weight: 900;
font-size: 1.75rem;
font-family: ${theme.typography.fontFamily};
background-color: #fff;
background:'inherit' !important;
padding: 0;
color: black;
transition: all 150ms ease;
cursor: pointer;
border: none;

  &:hover {
    background-color: #F65D4E;
    border:none;
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
