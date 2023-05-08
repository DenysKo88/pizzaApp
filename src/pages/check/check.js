
import './check.module.css';


export const Check = ({selectedData}) => {
    


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
                {selectedData.map((item, index) => (
                    <tr key={index}>
                        <td>{index +1}</td>
                        <td>{item.name}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}
            </tbody>
    </table>
    )
}