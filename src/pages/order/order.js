import styles from './order.module.css';


export const Order = (props) => {
    const {getTotalPrice, cart, handleConfirm} = props;
    return (
      <div className={styles.order}>
        <img src="pizza.jpg" alt="pizza" className={styles.order_img} />
        <div className={styles.order_title}>Ваша піца: {getTotalPrice} UAH</div>
        <ul className={styles.order_content}>
          {cart.map((product) => (
            <li className={styles.order_item}>
              {product.name} - {product.quantity}
            </li>
          ))}
        </ul>
        <button type="button" className="btn btn-primary" onClick={handleConfirm}>
          Go!
        </button>
      </div>
    );
}