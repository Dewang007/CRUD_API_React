import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Form from "./components/Form";
import List from "./components/List";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  // limitProduct,
} from "./api";

const App = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      // const limitData = await limitProduct();
      setProducts(data);
      // setProducts(limitData);
    };
    fetchProducts();
  }, []);

  const handleSave = async (product) => {
    if (product.id) {
      const updatedProduct = await updateProduct(product.id, product);
      setProducts(
        products.map((p) => (p.id === product.id ? updatedProduct : p))
      );
    } else {
      const newProduct = await createProduct(product);
      setProducts([newProduct, ...products]);
    }
    setCurrentProduct(null);
  };

  const handleEdit = async (product) => {
    await setCurrentProduct(product);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Form onSave={handleSave} currentProduct={currentProduct} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <List
            products={products}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
