import { useSelector } from 'react-redux';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { getFavoriteCards } from '../../redux/store';
import styles from '../Column/Column.module.scss';

const Favorite = () => {
  const cards = useSelector(getFavoriteCards);

  if (!cards.length) {
    return (
      <section>
        <PageTitle>Favorite</PageTitle>
        <p>No cards…</p>
      </section>
    );
  }

  return (
    <section className={styles.column}>
      <PageTitle>Favorite</PageTitle>
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
    </section>
  );
};

export default Favorite;