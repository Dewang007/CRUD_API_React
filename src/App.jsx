import React, { useState, useEffect } from "react";

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

  const handleEdit = (product) => {
    setCurrentProduct(product);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-gray-200">
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Form onSave={handleSave} currentProduct={currentProduct} />
            </div>
            <div className="h-screen overflow-y-auto">
              <List
                products={products}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
