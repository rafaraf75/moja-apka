import styles from './CardForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const CardForm = ({ columnId }) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch({ type: 'ADD_CARD', columnId, title });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.cardForm}>
      <label>
        <span>Title:</span>
        <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;