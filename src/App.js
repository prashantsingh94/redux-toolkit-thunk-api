import Counter from "./Counter";
import "./styles.css";
import { fetchProducts } from "./fetchDataSlice";
import { useDispatch, useSelector } from "react-redux";
export default function App() {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector((store) => store.products);
  //console.log(isLoading);
  //console.log(products);
  return (
    <div className="App">
      <h1>Redux Toolkit Couter Application</h1>
      <Counter />
      <button onClick={() => dispatch(fetchProducts("1"))}>
        Fetch Book Products
      </button>
    </div>
  );
}
