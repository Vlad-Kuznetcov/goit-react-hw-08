import s from "../SearchBox/SearchBox.module.css";

const SearchBox = ({ searchName, setSearchName }) => {
  return (
    <div>
      <input
        className={s.input}
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
        placeholder="Enter name"
      />
    </div>
  );
};

export default SearchBox;
