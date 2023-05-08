import './App.css';
import './pages/ingredients/ingredients';
import { Ingredients } from './pages/ingredients/ingredients';
import { Check } from './pages/check/check';
import { useState } from 'react';



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

function App() {
  const [selectedData, setSelectedData] = useState([]);

  function handleButtonClick(item) {
    setSelectedData([...selectedData, item])
  }
  return (
    <div className="App">
      <h2 className="App-title">Конструктор піци</h2>
      <div className="table-wrapper">
         <Ingredients items={items} onButtonClick={handleButtonClick}/>
         <Check selectedData={selectedData}/>
      </div>
    </div>
  );
}

export default App;



