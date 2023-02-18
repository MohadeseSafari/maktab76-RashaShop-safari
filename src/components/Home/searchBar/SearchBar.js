import { ListItem } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: '50px',
  backgroundColor: `${theme.palette.yellow.light}`,
  "&:hover": {
    backgroundColor: alpha(theme.palette.yellow.light, 0.75),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "70ch",
      "&:focus": {
        width: "70ch",
      },
    },
  },
}));

const SearchBar = () => {
  return (
    <ListItem>
      <Search>
        <SearchIconWrapper>
          <SearchIcon  fontSize="30px"/>
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="جستجو ..."
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </ListItem>
  );
};

export default SearchBar;
