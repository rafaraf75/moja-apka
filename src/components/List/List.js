import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';

const List = () => {
  // <-- bierzemy kolumny z magazynu Redux
  const columns = useSelector(state => state.columns);

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Things to do<span>soon!</span>
        </h2>
      </header>
      <p className={styles.description}>
        Interesting things I want to check out
      </p>
      <section className={styles.columns}>
        {columns.map(column => (
          // przekazujemy tylko dane kolumny (bez cards i addCard)
          <Column key={column.id} {...column} />
        ))}
      </section>
      {/* na razie bez propsów – akcje dodamy po zrobieniu reduktora */}
      <ColumnForm />
    </div>
  );
};

export default List;