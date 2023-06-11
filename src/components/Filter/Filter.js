import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterState } from 'redux/store';
import { useState } from 'react';

const Filter = () => {
  const dispatch = useDispatch();
  // const { filter } = useSelector(state => state.filter);
  const [filter, setFilter] = useState('');

  const filterInputChange = event => {
    const { value } = event.currentTarget;
    setFilter(value);
    dispatch(setFilterState({ filter: value }));
  };
  return (
    <label className={css.filter_label}>
      Find contacts by name
      <input
        placeholder="Search"
        className={css.filter_input}
        onChange={filterInputChange}
        value={filter}
        type="text"
      ></input>
    </label>
  );
};

export default Filter;

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired,
// };
