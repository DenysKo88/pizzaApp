
import './ingredients.module.css';
import '../../components/buttons/buttons';
import { Button } from '../../components/buttons/buttons';



export const Ingredients = (props) => {
    const {items, onButtonClick} = props;
    return (
        <table className ="table table-warning table-hover">
            <thead>
                <tr>
                    <th scope="col">Інгредієнт</th>
                    <th scope="col">Ціна</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.price} UAH</td>
                        <td><Button onClick={()=>onButtonClick(item)}/></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
