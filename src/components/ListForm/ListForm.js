import styles from './ListForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const ListForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.listForm}>
      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.label}>Title:</span>
          <TextInput
            className={styles.input}
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Description:</span>
          <TextInput
            className={styles.input}
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </label>

        <Button>ADD LIST</Button>
      </div>
    </form>
  );
};

export default ListForm;