import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Chip ,Paper} from "@mui/material";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { emphasize } from "@mui/material/styles";

export const AddButton = styled(ButtonUnstyled)(
  ({ theme }) => `
  font-weight: bold;
  height: 25px;
  font-size: 1.45rem;
  font-family: ${theme.typography.fontFamily};
  background-color: #60a3bc ;
  padding: 0px 7px;
  border-radius: 7px;
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
`
);

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const tableStyle = {
  position: "absolute",
  top: 50,
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const headerTable = {
  display: "flex",
  flexDirection: "row",
  marginTop: 2,
  alignItems: "center",
  justifyContent: "space-between!important",
};

export const customTextField = {
  border: "none",
  alignItems: "center",
};

export const customInput = {
  padding: "10px 0px",
  border: "none",
  width: "40px",
  textAlign: "center",
};

export const BoxQuantity = {
  width: "9rem",
  height: "48px",
  boxSizing: "border-box",
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  borderRadius: "50px",
  border:"1px solid #E6E6E6",
  overflow: "hidden",
};

export const FinalButton = styled(ButtonUnstyled)(
  ({ theme }) => `
  font-weight: bold;
  width: 15rem;
  height: 40px;
  font-size: 1.45rem;
  font-family: ${theme.typography.fontFamily};
  background-color: #60a3bc ;
  padding: 0px 7px;
  border-radius: 7px;
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
`
);

export const DeleteAllButton = styled(ButtonUnstyled)(
  ({ theme }) => `
  font-weight: bold;
  width: 15rem;
  height: 40px;
  font-size: 1.45rem;
  font-family: ${theme.typography.fontFamily};
  background-color: #C72945 ;
  padding: 0px 7px;
  border-radius: 7px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover {
    background-color:#ad243d ;
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

export const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor = "#F0F0F1";
  const color = theme.palette.mode === "light" ? "#A12C34" : "#142633e0";
  return {
    backgroundColor,
    color,
    height: theme.spacing(3),
    fontWeight: 700,
    fontSize: "20px",
    marginLeft: 10,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
