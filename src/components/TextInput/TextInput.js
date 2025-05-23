import styles from './TextInput.module.scss';

const TextInput = props => {
  return (
    <input
      className={styles.input}
      type="text"
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
};

export default TextInput;
