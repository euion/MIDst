import {
  Search,
  SearchbarWrapper,
  SearchButton,
  SearchImg,
} from "../../styles/search/Search.styled";
import { useNavigate } from "react-router";

const SearchBar = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <SearchbarWrapper>
      <Search
        type="text"
        placeholder="Search for expressions or words you're curious about!"
      ></Search>
      <SearchButton type="submit" onClick={() => navigate("/search")}>
        <SearchImg />
      </SearchButton>
    </SearchbarWrapper>
  );
};

export default SearchBar;
