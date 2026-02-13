import { useState, useEffect } from "react";
import Cards from "../components/Cards";

const url = "https://fakestoreapi.com/products";

export default function DisplayData() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network connection failed");

        const data = await response.json();
        setProducts(data);
      } catch (err) {

        setError("Something went wrong");
      }
    };

    getData();
  }, []); 

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Cards key={product.id} value={product} />
      ))}
    </div> 
 
   
  );
}
