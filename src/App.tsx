import "./App.scss";
import Products from "./components/Products/Products";
import CartList from "./components/Cartlist/Carlist";
import Filter from "./components/Filter/Filter";
import FileUploader from "./components/FileUploader/FileUploader";
import { useState } from "react";

function App() {
  const [file, setFile] = useState(null);
  return (
    <div className="App">
      <header>
        <h1>"Alternova shop"</h1>
        <Filter />
        <FileUploader setFile={setFile} />
      </header>
      <section>
        <Products />
        <CartList />
      </section>
    </div>
  );
}

export default App;
