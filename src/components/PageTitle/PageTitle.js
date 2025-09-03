import styles from './PageTitle.module.scss';

const PageTitle = ({ children }) => (
  <h2 className={styles.title}>{children}</h2>
);

export default PageTitle;
