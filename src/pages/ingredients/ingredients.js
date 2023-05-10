
import './ingredients.module.css';
import '../../components/buttons/buttons';
import { Button } from '../../components/buttons/buttons';



export const Ingredients = (props) => {
    const {products, onButtonClick} = props;
    
    return (
      <table className="table table-warning table-hover">
        <thead>
          <tr>
            <th scope="col">Інгредієнт</th>
            <th scope="col">Вартість</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price} UAH</td>
              <td>
                <Button onClick={() => onButtonClick(product)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}
