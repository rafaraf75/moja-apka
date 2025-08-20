import styles from './Column.module.scss';
import Card from './../Card/Card';
import CardForm from './../CardForm/CardForm';
import { useSelector, shallowEqual } from 'react-redux';

const Column = props => {
  const { id, title, icon } = props;

  // fraza z wyszukiwarki (z magazynu)
  const searchString = useSelector(state => state.searchString);
  const needle = searchString.trim().toLowerCase();

  // karty z tej kolumny, dodatkowo filtrowane po tytule (case-insensitive)
  const cards = useSelector(
    state =>
      state.cards.filter(card =>
        card.columnId === id &&
        (needle === '' || card.title.toLowerCase().includes(needle))
      ),
    shallowEqual
  );

  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + icon} />
        {title}
      </h2>
      <ul className={styles.cards}>
        {cards.map(card => (
          <Card key={card.id} title={card.title} />
        ))}
      </ul>
      <CardForm columnId={id} />
    </article>
  );
};

export default Column;