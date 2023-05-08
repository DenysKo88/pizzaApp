import './App.css';
import './pages/ingredients/ingredients';
// import { Ingredients } from './pages/ingredients/ingredients';
// import { Check } from './pages/check/check';
import { useState } from 'react';
import { Button } from './components/buttons/buttons';


const items = [
  {
    name: 'Основа',
    price: 50,
    id: 1
  },
  {
    name: 'Мнєсо',
    price: 25,
    id: 2
  },
  {
    name: 'Цибуля',
    price: 12,
    id: 3
  },
  {
    name: 'Ананас',
    price: 15,
    id: 4
  },
  {
    name: 'Сир',
    price: 15,
    id: 5
  },
  {
    name: 'Ковбаска',
    price: 25,
    id: 6
  },
  {
    name: 'Помідорчики',
    price: 17,
    id: 7
  },
  {
    name: 'Грибочки',
    price: 15,
    id: 8
  }
]

const Ingredients = ({items, onButtonClick}) => {
    
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
                      <td><Button onClick={() => onButtonClick(item)}/></td>
                  </tr>
              ))}
          </tbody>
      </table>
  )
}

function App() {
  const [selectedData, setSelectedData] = useState([]);

  function handleButtonClick(items) {
    setSelectedData([items]);
  }
  return (
    <div className="App">
      <h2 className="App-title">Конструктор піци</h2>
      <div className="table-wrapper">
         <Ingredients items={items} onButtonClick={handleButtonClick}/>
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
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}

// const data = [
//   {
//     name: 'Основа',
//     price: 50,
//     id: 1
//   },
//   {
//     name: 'Мнєсо',
//     price: 25,
//     id: 2
//   },
//   {
//     name: 'Цибуля',
//     price: 12,
//     id: 3
//   },
//   {
//     name: 'Ананас',
//     price: 15,
//     id: 4
//   },
//   {
//     name: 'Сир',
//     price: 15,
//     id: 5
//   },
//   {
//     name: 'Ковбаска',
//     price: 25,
//     id: 6
//   },
//   {
//     name: 'Помідорчики',
//     price: 17,
//     id: 7
//   },
//   {
//     name: 'Грибочки',
//     price: 15,
//     id: 8
//   }
// ] 
// function Table({ data, onButtonClick }) {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Ім'я</th>
//           <th>Вік</th>
//           <th>Дії</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((item, index) => (
//           <tr key={index}>
//             <td>{item.name}</td>
//             <td>{item.age}</td>
//             <td>
//               <button onClick={() => onButtonClick(item)}>Передати дані</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// function App() {
//   const [selectedData, setSelectedData] = useState([]);

//   function handleButtonClick(data) {
//     setSelectedData([data]);
//   }

//   return (
//     <div>
//       <h2>Таблиця 1</h2>
//       <Table data={data} onButtonClick={handleButtonClick} />

//       <h2>Таблиця 2</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Ім'я</th>
//             <th>Вік</th>
//           </tr>
//         </thead>
//         <tbody>
//           {selectedData.map((item, index) => (
//             <tr key={index}>
//               <td>{item.name}</td>
//               <td>{item.age}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
export default App;



