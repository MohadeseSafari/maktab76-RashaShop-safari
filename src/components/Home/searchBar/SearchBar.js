import SearchIcon from "@mui/icons-material/Search";
import {
  CustomInput,
  InputAdornment,
  IconButton,
} from "common/CustomStyle/SearchBar";

const SearchBar = () => {
  return (
    <div>
      <CustomInput
        name="searchbar"
        sx={{ width: "84%" }}
        type="text"
        placeholder="جستجو ..."
        endAdornment={
          <InputAdornment>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  );
};

export default SearchBar;
