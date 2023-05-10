
import './check.module.css';
// import { Button } from '../../components/buttons/buttons';
import { RemoveBtn} from '../../components/buttons/removeBtn';
export const Check = (props) => {
    const {cart, onButtonClick, getTotalPrice} = props;


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
          <tr>${getTotalPrice()}</tr>
        </tbody>
      </table>
    );
}

