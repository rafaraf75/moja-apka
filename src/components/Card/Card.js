import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/store';
import styles from './Card.module.scss';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();

  const onToggle = (e) => {
    e.stopPropagation();
    if (!id) return;
    dispatch(toggleCardFavorite(id));
  };

  const onRemove = (e) => {
    e.stopPropagation();
    if (!id) return;
    dispatch(removeCard(id));
  };

  return (
    <li className={styles.card}>
      <span className={styles.title}>{title}</span>

      <span className={styles.actions}>
        <button
          type="button"
          className={`${styles.iconBtn} ${isFavorite ? styles.isActive : ''}`}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          title={isFavorite ? 'Unfavorite' : 'Favorite'}
          onClick={onToggle}
        >
          <i className={`fa ${isFavorite ? 'fa-star' : 'fa-star-o'}`} aria-hidden="true" />
        </button>

        <button
          type="button"
          className={styles.iconBtn}
          aria-label="Remove card"
          title="Remove"
          onClick={onRemove}
        >
          <i className="fa fa-trash" aria-hidden="true" />
        </button>
      </span>
    </li>
  );
};

export default Card;