import './App.css';
import './pages/ingredients/ingredients';
import { Ingredients } from './pages/ingredients/ingredients';
import { Check } from './pages/check/check';
import { useState } from 'react';



const products = [
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
    
    const [cart, setCart] = useState([]);

    const addProduct = (product) => {
        const existingProduct = cart.find((item) => item.id === product.id);

        if (existingProduct) {
            const updatedCart = cart.map((item) =>
            item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
            setCart(updatedCart);
        } else {
            const newProduct = { ...product, quantity: 1 };
            setCart([...cart, newProduct]);
        }
    }



    const removeProduct = (product) => {
      const existingProduct = cart.find((item) => item.id === product.id);

        if (existingProduct) {
          const updatedCart = cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
          setCart(updatedCart);
        }
         if(product.quantity === 1){
          setCart([])
         }
    };

    const getTotalPrice = () => {
      return cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    };

  return (
    <div className="App">
      <h2 className="App-title">Конструктор піци</h2>
      <div className="table-wrapper">
        <Ingredients products={products} onButtonClick={addProduct} />
        <Check cart={cart} onButtonClick={removeProduct} getTotalPrice={getTotalPrice}/>
      </div>
    </div>
  );
}

export default App;



