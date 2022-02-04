import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpener, setCartOpener] = React.useState(false);

  React.useEffect(() => {
    fetch("https://61fa2a3031f9c2001759668d.mockapi.io/sneakers")
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, []);

  const onAddToCart = (obj) => {
    const index = cartItems.findIndex((item) => item.id === obj.id);
    if (index === -1) {
      setCartItems((prevValue) => [...prevValue, obj]);
    } else {
      const newArr = [...cartItems];
      newArr.splice(index, 1);
      setCartItems(newArr);
    }
  };

  const onDeleteFromCart = (obj) => {
    const index = cartItems.findIndex((item) => item.id === obj.id);
    const newArr = [...cartItems];
    newArr.splice(index, 1);
    setCartItems(newArr);
  };

  return (
    <div className="wrapper clear">
      {cartOpener ? (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpener(false)}
          onDelete={onDeleteFromCart}
        />
      ) : null}

      <Header openCart={() => setCartOpener(true)} />

      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex justify-start flex-wrap">
          {items.map((el) => {
            return (
              <Card
                id={el.id}
                key={el.id}
                title={el.title}
                price={el.price}
                imageUrl={el.imageUrl}
                onPlus={onAddToCart}
                onFavorite={() => console.log("Нажали на сердце")}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
