import React, { useState, useEffect } from "react";
import Product from "./Product";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        } else {
          console.log("Products fetched");
        }
        const prods = await response.json();

        console.log(prods);

        // Add a quantity property initialized to 0 to each product object
        const productsWithQuantity = prods.products.map((product) => ({
          ...product,
          quantity: 0,
        }));

        console.log(productsWithQuantity);

        setProducts(productsWithQuantity);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();

    return () => {
      // Cleanup function (equivalent to componentWillUnmount)
    };
  }, []);

  const handleIncrement = (product, maxValue) => {
    const updatedProducts = products.map((p) =>
      p.id === product.id && p.quantity < maxValue
        ? { ...p, quantity: p.quantity + 1 }
        : p
    );
    setProducts(updatedProducts);
  };

  const handleDecrement = (product, minValue) => {
    const updatedProducts = products.map((p) =>
      p.id === product.id && p.quantity > minValue
        ? { ...p, quantity: p.quantity - 1 }
        : p
    );
    setProducts(updatedProducts);
  };

  const handleDelete = (product) => {
    if (
      window.confirm("Are you sure you want to delete this from your cart?")
    ) {
      const updatedProducts = products.filter((p) => p.id !== product.id);
      setProducts(updatedProducts);
    }
  };

  return (
    <div>
      <h2>Shop Now</h2>

      <div className="row">
        {products.map((prod) => (
          <Product
            key={prod.id}
            product={prod}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
          >
            <button className="btn btn-primary">Buy Now</button>
          </Product>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
