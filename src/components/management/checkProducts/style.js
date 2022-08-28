import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';

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
  padding: '16px 32px 24px 32px',
});

export const DeliveryButton = styled(ButtonUnstyled)(({ theme }) => `
  width: 100px;
  height: 40px;
  font-weight: bold;
  font-size: 1.45rem;
  font-family: ${theme.typography.fontFamily};
  background-color: #60a3bc ;
  padding: 0px 15px;
  border-radius: 10px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

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
