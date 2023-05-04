import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input onChange={handleFilterChange} type="search" name="filter" id="" />
    </>
  );
};

export default Filter;
