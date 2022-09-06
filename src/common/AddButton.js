import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';



export const CustomButton = styled(ButtonUnstyled)(({ theme }) => `
  width: 21rem;
  font-weight: bold;
  font-size: 1.45rem;
  font-family: ${theme.typography.fontFamily};
  background-color: #f65d4e;
  background:'inherit' !important;
  padding: 7px 15px;
  border-radius: 14px;
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
`);

export const AddButton = styled(ButtonUnstyled)(({ theme }) => `
  width: 2;
  font-weight: bold;
  font-size: 1.45rem;
  font-family: ${theme.typography.fontFamily};
  background-color: #fff;
  background:'inherit' !important;
  padding: 3px 15px;
  border-radius: 30px;
  color: black;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid #A5A8AD;
  border-right:none;
  border-left: 1px solid #A5A8AD;

  &:hover {
    background-color: #F65D4E;
    border:none;
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
`);

export const DecreaseButton = styled(ButtonUnstyled)(({ theme }) => `
  font-weight: bold;
  font-size: 1.45rem;
  font-family: ${theme.typography.fontFamily};
  background-color: #fff;
  background:'inherit' !important;
  padding: 3px 15px;
  border-radius: 20px;
  color: black;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid #A5A8AD;
  border-left:none;
  border-right: 1px solid #A5A8AD;

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
`);