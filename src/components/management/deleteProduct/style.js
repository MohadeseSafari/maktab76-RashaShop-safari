import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled'; 
import { styled } from '@mui/material/styles';
import * as React from 'react';
import clsx from 'clsx';
import ModalUnstyled from '@mui/base/ModalUnstyled';


const BackdropUnstyled = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      direction='rtl'
      className={clsx({ 'MuiBackdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});


export const Modal = styled(ModalUnstyled)`
position: fixed;
z-index: 1300;
right: 0;
bottom: 0;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
`;
export const Backdrop = styled(BackdropUnstyled)`
z-index: -1;
position: fixed;
right: 0;
bottom: 0;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.2);
-webkit-tap-highlight-color: transparent;
`;

export const style = (theme) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  direction: 'ltr',
  fontFamily: theme.typography.fontFamily,
  fontWeight: 800,
  width: 400,
  bgcolor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
  border: '1px solid #3D4C56',
  borderRadius: '8px',
  padding: '16px 32px 24px 32px',
});

export const editModalStyle = (theme) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'right',
  direction: 'ltr',
  fontFamily: theme.typography.fontFamily,
  fontWeight: 800,
  width: 700,
  bgcolor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
  border: '1px solid #3D4C56',
  padding: '16px 32px 24px 32px',
});



export const DeleteButton = styled(ButtonUnstyled)(({ theme }) => `
  height: 45px;
  font-weight: bold;
  font-size: 1.45rem;
  font-family: ${theme.typography.fontFamily};
  background-color: #CE4C4C ;
  padding: 0px 25px;
  border-radius: 18px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color:#a83c3c ;
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

export const UnDeleteButton = styled(ButtonUnstyled)(({ theme }) => `
  height: 45px;
  font-weight: bold;
  font-size: 1.25rem;
  font-family: ${theme.typography.fontFamily};
  background-color:#3c6382 ;
  padding: 0px 15px;
  border-radius: 18px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color:#3c6382 ;
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