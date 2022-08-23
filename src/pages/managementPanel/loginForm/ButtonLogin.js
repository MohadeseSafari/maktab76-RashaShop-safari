import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

const red = {
    600: '#EB5F5D'
}
const darkblue = {
    800: '#3B4859',
    900: '#262f3a'
};

export const CustomButton = styled(ButtonUnstyled)(({ theme }) => `
  width: 18rem;
  font-weight: bold;
  font-size: 1.45rem;
  font-family: ${theme.typography.fontFamily};
  background-color: ${theme.palette.mode === 'dark' ? red[600] : darkblue[800]};
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
`);

