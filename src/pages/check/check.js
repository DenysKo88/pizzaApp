
import './check.module.css';
export const Check = ({cart}) => {
    


    return (
      <table className="table table-success table-hover">
        <thead>
          <tr>
            <th scope="col">Інгредієнт</th>
            <th scope="col">Вартість</th>
            <th scope="col">К-сть</th>
            <th scope="col">Ціна</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}

