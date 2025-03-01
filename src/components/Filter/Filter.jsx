import { SearchLabel, SearchInput } from './FilterStyled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contactSlice.js';
import { selectFilter } from '../../redux/selectors.js';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filterContacts = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <SearchLabel>
      Find contacts by name
      <SearchInput type="text" value={filter} onChange={filterContacts} />
    </SearchLabel>
  );
};
