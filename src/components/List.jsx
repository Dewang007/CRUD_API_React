import React from "react";

const List = ({ products, onEdit, onDelete }) => {
  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex items-center justify-between p-4 mb-2 bg-gray-700 rounded-lg"
        >
          <div>
            <h3 className="text-white font-bold">{product.title}</h3>
            <p className="text-gray-300">{product.description}</p>
            <p className="text-gray-300">Price: {product.price}</p>
            <p className="text-gray-300">Category: {product.category}</p>
            <img
              src={product.image}
              alt={product.title}
              className="mt-1 w-24 h-24 object-cover"
            />
          </div>

          <div className="flex items-center">
            <button
              onClick={() => onEdit(product)}
              className="p-2 bg-blue-500 text-white rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(product.id)}
              className="p-2 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
