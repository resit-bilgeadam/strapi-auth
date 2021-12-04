import styles from './Button.module.scss';

const Button = ({
    children,
    type = 'button',
    color = 'primary',
    onClick = () => null
}) => (
    <button
        className={`${styles.btn} ${styles[color]}`}
        type={type}
        onClick={onClick}>
        {children}
    </button>
)

export default Button;
