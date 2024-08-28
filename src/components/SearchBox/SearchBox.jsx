import { useDispatch, useSelector } from "react-redux";
import s from "../SearchBox/SearchBox.module.css";

import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";

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
