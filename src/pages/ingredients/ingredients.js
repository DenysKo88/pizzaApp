
import './ingredients.module.css';
import '../../components/buttons/buttons';
import { Button } from '../../components/buttons/buttons';
import { useState } from 'react';


export const Ingredients = ({items, onButtonClick}) => {
    
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
                {items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.price} UAH</td>
                        <td><Button onClick={()=>onButtonClick}/></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
