import { useState } from 'react';
import './check.module.css';


export const Check = ({selectedData}) => {
    
    // const total = items.reduce((sum, item) => sum + item.price, 0);


    return (
        <table className="table table-success table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Інгредієнт</th>
                    <th scope="col">К-сть</th>
                    <th scope="col">Ціна</th>
                </tr>
            </thead>
            <tbody>
                {selectedData.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}