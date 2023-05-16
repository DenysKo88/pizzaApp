import './App.scss';
import './pages/ingredients/ingredients';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Ingredients } from './pages/ingredients/ingredients';
import { Check } from './pages/check/check';
import { Order } from './pages/order/order';
import { Thanks } from './pages/thanks/thanks';
import { Problem } from './pages/Problem/problem';
import { useState } from "react";




const products = [
  {
    name: "Основа",
    price: 50,
    id: 1,
    quantity: 1
  },
  {
    name: "Мнєсо",
    price: 25,
    id: 2,
    quantity: 0
  },
  {
    name: "Цибуля",
    price: 12,
    id: 3,
    quantity: 0
  },
  {
    name: "Ананас",
    price: 15,
    id: 4,
    quantity: 0
  },
  {
    name: "Сир",
    price: 15,
    id: 5,
    quantity: 0
  },
  {
    name: "Ковбаска",
    price: 25,
    id: 6,
    quantity: 0
  },
  {
    name: "Помідорчики",
    price: 17,
    id: 7,
    quantity: 0
  },
  {
    name: "Грибочки",
    price: 15,
    id: 8,
    quantity: 0
  },
];



const App = () => {
    const [cart, setCart] = useState([products.find((item) => item.id === 1)]);
    const [showThanks, setShowThanks] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);





    const addProduct = (product) => {
        const existingProduct = cart.find((item) => item.id === product.id)

        if (existingProduct) {
            const updatedCart = cart.map((item) =>
            item.id === product.id && (product.id !== 1 || product.quantity < 1)
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
            setCart(updatedCart);
        } 
        else {
            const newProduct = { ...product, quantity: 1 };
            setCart([...cart, newProduct]);
        }
    }




    const removeProduct = (product) => {
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct || product.quantity > 0) {
        const updatedCart = cart.map((item) =>item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }: item).filter((item) => item.quantity > 0);
        setCart(updatedCart);
        }
    };


    const getTotalPrice = () => {
      return cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    };

    const handleConfirmPayment = () => {
        setShowConfirmation(true);
    }

    const handleConfirm = () => {
        setShowThanks(true);
    }

    if (showThanks) {
        return <Thanks />;
    }

    if (showConfirmation) {
        return (
          <Order
            getTotalPrice={getTotalPrice()}
            cart={cart}
            handleConfirm={handleConfirm}
          />
        );
    }

  return (
    <Router>
      <div className="App">
        <h2 className="App-title">Конструктор піци</h2>
        <div className="table-wrapper">
          <Ingredients products={products} onButtonClick={addProduct} />
          <Check
            cart={cart}
            onButtonClick={removeProduct}
            getTotalPrice={getTotalPrice}
            handleConfirmPayment={handleConfirmPayment}
          />
        </div>
        <Problem/>
        {/* <NameForm 
            handleButtonClick={handleButtonClick}
            lastNameHandler={lastNameHandler} 
            firstNameHandler={firstNameHandler}
            blurHandler={blurHandler}
            handleSubmit={handleSubmit}
            firstNameError={firstNameError}
            lastNameError={lastNameError}
            firstNameDirty={firstNameDirty}
            lastNameDirty={lastNameDirty}
            firstName={firstName}
            lastName={lastName}
        />
        <Complaint />
        <Info />
        <Results
            data={{firstName, lastName}}
            handleButtonClick={handleButtonClick}
        /> */}
        {/* <Order getTotalPrice={getTotalPrice()} cart={cart} handleConfirm={handleConfirm} /> */}
        {/* <Thanks /> */}
      </div>
    </Router>
  );
}

export default App;



