import "./App.scss";
import Products from "./components/Products/Products";
import CartList from "./components/Cartlist/Carlist";
import Filter from "./components/Filter/Filter";

function App() {
  return (
    <div className="App">
      <h1>"Alternova shop"</h1>
      <Filter />
      <section>
        <Products />
        <CartList />
      </section>
    </div>
  );
}

export default App;
