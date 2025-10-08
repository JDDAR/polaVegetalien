import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../features/modals/modalSlice';
import { createProductAsync, updateProductAsync } from '../../features/products/productsSlice';

const ProductForm = ({ product, categories }) => {
  const dispatch = useDispatch();
  const isEditMode = !!product; // Si hay un producto, estamos en modo edición

  const [formData, setFormData] = useState({
    name: product?.name || '',
    description: product?.description || '',
    price: product?.price || 0,
    stock: product?.stock || 0,
    categoryId: product?.categoryId || categories[0]?.id || '',
    isPublic: product?.isPublic ?? true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock, 10),
      categoryId: parseInt(formData.categoryId, 10),
    };

    if (isEditMode) {
      dispatch(updateProductAsync({ id: product.id, ...dataToSend }));
    } else {
      dispatch(createProductAsync(dataToSend));
    }
    dispatch(closeModal());
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <div className="form-group">
        <label htmlFor="name">Nombre del Producto</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="description">Descripción</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange} />
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="price">Precio</label>
          <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} step="0.01" required />
        </div>
        <div className="form-group">
          <label htmlFor="stock">Stock</label>
          <input type="number" id="stock" name="stock" value={formData.stock} onChange={handleChange} step="1" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="categoryId">Categoría</label>
        <select id="categoryId" name="categoryId" value={formData.categoryId} onChange={handleChange} required>
    {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>
      <div className="form-group form-toggle">
        <label htmlFor="isPublic">¿Producto Activo?</label>
        <input type="checkbox" id="isPublic" name="isPublic" checked={formData.isPublic} onChange={handleChange} />
      </div>
      <div className="modal-actions">
        <button type="button" onClick={() => dispatch(closeModal())} className="button-secondary">Cancelar</button>
        <button type="submit" className="button-primary">{isEditMode ? 'Guardar Cambios' : 'Crear Producto'}</button>
      </div>
    </form>
  );
};

export default ProductForm;
