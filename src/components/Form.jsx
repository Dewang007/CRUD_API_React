import React, { useState, useEffect } from 'react';

const Form = ({ onSave, currentProduct }) => {
  const [form, setForm] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: ''
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
      title: '',
      price: '',
      description: '',
      category: '',
      image: ''
    });
  };

  return (
    <form className="p-4 bg-gray-800 rounded-lg sticky top-0" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-white mb-2">Title</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="text-black w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-2">Price</label>
        <input
          type="text"
          name="price"
          value={form.price}
          onChange={handleChange}
          className="text-black w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-2">Description</label>
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          className="text-black w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-2">Category</label>
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          className="text-black w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-2">Image URL</label>
        <input
          type="text"
          name="image"
          value={form.image}
          onChange={handleChange}
          className="text-black w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="w-full p-2 bg-gray-600 text-white rounded">Save</button>
    </form>
  );
};

export default Form;
