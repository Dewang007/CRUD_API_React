import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

const List = ({ products, onEdit, onDelete }) => {
  const [page, setPage] = useState(1);
  const productsPerPage = 1;

  const handleChange = (e, value) => {
    setPage(value);
  };

  const indexOfLastProduct = page * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="p-4 bg-slate-100 rounded-lg">
      {currentProducts.map((product) => (
        <TableContainer key={product.id} component={Paper}>
          <div className="m-5">
            <Typography color={"black"} variant="h6" gutterBottom>
              {product.title}
            </Typography>
            <Typography color={"black"} variant="body1" gutterBottom>
              {product.description}
            </Typography>
            <Typography color={"black"} variant="body1" gutterBottom>
              Price: {"$" + product.price}
            </Typography>
            <Typography color={"black"} variant="body1" gutterBottom>
              Category: {product.category}
            </Typography>
            <img
              src={product.image}
              alt={product.title}
              className="mt-1 w-24 h-24 object-cover"
            />
          </div>

          <div className="p-4 flex items-center">
            <Stack direction="row" spacing={2}>
              <Button
                onClick={() => onEdit(product)}
                className="text-white rounded mr-2"
                variant="outlined"
              >
                Edit
              </Button>

              <Button
                onClick={() => onDelete(product.id)}
                variant="outlined"
                color="error"
                className="text-white rounded"
              >
                Delete
              </Button>
            </Stack>
          </div>
        </TableContainer>
      ))}
      <div className="mt-4 flex justify-center">
        <Pagination
          count={Math.ceil(products.length / productsPerPage)}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </div>
    </div>
  );
};

export default List;
