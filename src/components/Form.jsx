import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Form = ({ onSave, currentProduct }) => {
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    if (currentProduct) {
      setForm(currentProduct);
    }
  }, [currentProduct]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    setForm({
      title: "",
      price: "",
      description: "",
      category: "",
      image: "",
    });
  };

  return (
    <TableContainer component={Paper}>
      <form
        className="p-4 bg-slate-100 rounded-lg sticky top-0"
        onSubmit={handleSubmit}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              id="outlined-basic"
              label="Title"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              name="price"
              value={form.price}
              onChange={handleChange}
              id="outlined-basic"
              label="Price"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
              id="outlined-basic"
              // label="description"
              placeholder="Brief description about your product"
              variant="outlined"
              fullWidth
              multiline
              // rows={5}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              id="outlined-basic"
              label="category"
              variant="outlined"
              fullWidth
              
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
              id="outlined-basic"
              label="Image URL"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button fullWidth type="submit" variant="contained" color="success">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </TableContainer>
  );
};

export default Form;
