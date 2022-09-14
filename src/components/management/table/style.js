import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import InputUnstyled from '@mui/base/InputUnstyled';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';

const grey = {
  20: '#ffffffd0',
  50: '#f7f8fa',
  100: '#dfe3e9',
  200: '#95a4b9',
  300: '#7c8fa8',
  400: '#697f9b',
  500: '#A0AAB4',
  600: '#8b9cb2',
  700: '#445367',
  800: '#596575',
  900: '#3b4859',
};

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 28,
    backgroundColor: "#537d97",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,

  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const tableStyle = {
  position: 'absolute',
  top: 50,
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'


}

export const headerTable = {
  display: 'flex',
  flexDirection: 'row',
  marginTop: 2,
  alignItems: 'center',
  justifyContent:'space-between!important'
}

export const SaveButton = styled(ButtonUnstyled)(({ theme }) => `
  height: 45px;
  font-weight: bold;
  font-size: 1.45rem;
  font-family: ${theme.typography.fontFamily};
  background-color: #60a3bc ;
  padding: 0px 25px;
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


const StyledInputRoot = styled('div')(
  ({ theme }) => `
  display: flex;
  font-weight: 500;
  font-family: ${theme.typography.fontFamily};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[500]};
  margin: 5px;
  align-items: center;
  justify-content: center;
`,
);

const StyledInputElement = styled('input')(
  ({ theme }) => `
  width: 10rem;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: ${theme.typography.fontFamily};
  line-height: 0.25;
  flex-grow: 1;
  color: ${theme.palette.mode === 'dark' ? grey[20] : grey[900]};
  background: inherit;
  border: none;
  padding: 5px 22px;
  outline: 0;
`,
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


