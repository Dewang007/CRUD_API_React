import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import useStyles from "../useStyle/FormStyles";

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

  const { classes } = useStyles();

  return (
    <TableContainer component={Paper}>
      <form className={classes.formContainer} onSubmit={handleSubmit}>
        <Grid container spacing={2} className={classes.gridContainer}>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.textField}
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
              className={classes.textField}
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
              className={classes.descriptionField}
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
              id="outlined-basic"
              placeholder="Brief description about your product"
              variant="outlined"
              fullWidth
              multiline
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.textField}
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
              className={classes.textField}
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
            <Button
              className={classes.submitButton}
              fullWidth
              type="submit"
              variant="contained"
              color="success"
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </TableContainer>
  );
};

export default Form;
