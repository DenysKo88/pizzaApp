
import './check.module.css';
import { RemoveBtn} from '../../components/buttons/removeBtn';

export const Check = (props) => {
    const { cart, onButtonClick, getTotalPrice, handleConfirmPayment } = props;

    return (
      <table className="table table-success table-hover">
        <thead>
          <tr>
            <th scope="col">Інгредієнт</th>
            <th scope="col">Вартість</th>
            <th scope="col">К-сть</th>
            <th scope="col">Ціна</th>
            <th scope="col">+/-</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.price * product.quantity}</td>
              <td>
                <RemoveBtn onClick={() => onButtonClick(product)} />
              </td>
            </tr>
          ))}
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleConfirmPayment}
          >
            Замовити {getTotalPrice()} UAH
          </button>
        </tbody>
      </table>
    );
}

