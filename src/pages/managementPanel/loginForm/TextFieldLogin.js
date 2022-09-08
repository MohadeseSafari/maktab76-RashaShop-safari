import * as React from 'react';
import PropTypes from 'prop-types';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import InputUnstyled from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';


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

const StyledInputRoot = styled('div')(
  ({ theme }) => `
  display: flex;
  font-weight: 500;
  font-family: ${theme.typography.fontFamily};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[500]};
  border-radius: 18px;
  margin: 5px;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    
  }
`,
);

const StyledInputElement = styled('input')(
  ({ theme }) => `
  width: 18rem;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: ${theme.typography.fontFamily};
  line-height: 1;
  flex-grow: 1;
  color: ${theme.palette.mode === 'dark' ? grey[20] : grey[900]};
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 7px 22px;
  outline: 0;
  &:hover {
    border-color: ${theme.palette.mode === 'dark' ? grey[200] : grey[600]};
`,
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

export const InputAdornment = styled('div')`
  margin: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
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

CustomInput.propTypes = {
  components: PropTypes.shape({
    Input: PropTypes.elementType,
    Root: PropTypes.elementType,
    Textarea: PropTypes.elementType,
  }),
};


export const  dateInput ={
  width: '18rem',
  fontSize: '1.5rem',
  fontWeight: 500,
  lineHeight: 1,
  flexGrow: 1,
  background: 'inherit',
  borderRadius: '18px',
  margin: '5px',
  border: '1px solid #A0AAB4',
  padding: '7px 22px',
  outline: 0,
  
}