import { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ProductsContext from "../../contexts/Products/productsContext";

const Filter = () => {
  const productCtx = useContext(ProductsContext);
  const fiterTypes = [
    ...new Set(productCtx?.products?.map(({ type }) => type)),
  ];
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter Products
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {fiterTypes.map((type, id) => (
          <Dropdown.Item
            onClick={() =>
              productCtx?.dispatch({ type: "FILTER_PRODUCT", filter: type })
            }
            key={id}
          >
            {type}
          </Dropdown.Item>
        ))}
        <Dropdown.Item
          onClick={() => productCtx?.dispatch({ type: "SHOW_PRODUCTS" })}
        >
          show all products
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Filter;
