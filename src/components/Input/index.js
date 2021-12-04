import styles from './Input.module.scss';

const Input = ({
    label,
    block = false,
    id,
    name,
    type = 'text',
    placeholder,
    value,
    onChange
}) => (
    <div className={styles.formGroup}>
        <label htmlFor={id}>{label}</label>
        <input
            className={block ? styles.block : ''}
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange} />
    </div>
)

export default Input;
