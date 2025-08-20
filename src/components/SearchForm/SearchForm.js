import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchForm = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    // wysyłamy akcję do reducera z aktualną wartością inputa
    dispatch({ type: 'UPDATE_SEARCHSTRING', payload: value });
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder="Search..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Button>
        <span className="fa fa-search" />
        Search
      </Button>
    </form>
  );
};

export default SearchForm;