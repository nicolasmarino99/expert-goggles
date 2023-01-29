import { useContext } from "react";
import "./App.css";
import { CardContainer, ListContainer } from "./containers/containers";
import Product from "./components/Product/Product";
import { IProduct } from "./@types/products";
import ProductsContext from "./contexts/Products/productsContext";
import CartContext from "./contexts/Cart/cartContext";
import Item from "./components/Cartlist/Item";

function App() {
  const productCtx = useContext(ProductsContext);
  const cartCtx = useContext(CartContext);
  console.log(productCtx?.products);
  return (
    <div className="App">
      <h1>"Alternova shop"</h1>
      <section>
        <CardContainer>
          {productCtx?.products?.map((products: IProduct, id) => (
            <Product {...products} key={id} />
          ))}
        </CardContainer>
        <ListContainer>
          {cartCtx?.carts.map((cart, id) => (
            <Item {...cart} key={id} />
          ))}
        </ListContainer>
      </section>
    </div>
  );
}

export default App;
