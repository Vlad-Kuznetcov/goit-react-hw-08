import { useDispatch, useSelector } from "react-redux";
import s from "../SearchBox/SearchBox.module.css";
import { selectFilter } from "../../redux/selectors";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        value={filter}
        className={s.input}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Enter name.."
      />
    </div>
  );
};

export default SearchBox;
