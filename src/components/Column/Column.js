import styles from './Column.module.scss';
import Card from './../Card/Card';
import CardForm from './../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { makeGetFilteredCards } from '../../redux/store';

const Column = (props) => {
  const selectCards = useMemo(() => makeGetFilteredCards(props.id), [props.id]);
  const cards = useSelector(selectCards);

  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon} />
        {props.title}
      </h2>
      <ul className={styles.cards}>
        {cards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            isFavorite={card.isFavorite}
          />
        ))}
      </ul>
      <CardForm columnId={props.id} />
    </article>
  );
};

export default Column;