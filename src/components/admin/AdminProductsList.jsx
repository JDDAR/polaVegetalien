import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RiEditLine, RiDeleteBinLine } from 'react-icons/ri';
import './adminProductsList.scss';

const AdminProductsList = () => {
  const { products, selectedCategoryId, status, categories } = useSelector((state) => state.adminMenu);
  
  const filteredProducts = useMemo(() => {
    if (!selectedCategoryId) {
      return [];
    }
    return products.filter(product => product.categoryId === selectedCategoryId);
  }, [products, selectedCategoryId]);

  const selectedCategoryName = useMemo(() => {
    const category = categories.find(cat => cat.id === selectedCategoryId);
    return category ? category.name : '';
  }, [categories, selectedCategoryId]);

  const handleEdit = (product) => {
    console.log('Editar producto:', product);
    // Aquí abrirás el modal de editar
  };

  const handleDelete = (product) => {
    console.log('Eliminar producto:', product);
    // Aquí abrirás el modal de confirmar eliminación
  };

  const toggleProductStatus = (product) => {
    console.log('Toggle status:', product);
    // Aquí cambiarás el estado activo/inactivo
  };

  return (
    <div className="products-list-container">
      <div className="products-list-header">
        <div className="products-list-header-title">
          <h3>PRODUCTOS</h3>
          {selectedCategoryName && (
            <span className="category-badge">{selectedCategoryName}</span>
          )}
        </div>
        
        <div className="products-list-header-actions">
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Buscar producto..."
              className="search-input"
            />
          </div>
          <button className="add-product-button">
            + AGREGAR PRODUCTO
          </button>
        </div>
      </div>

      {!selectedCategoryId && status === 'succeeded' && (
        <div className="empty-state">
          <p>Selecciona una categoría para ver sus productos.</p>
        </div>
      )}

      {selectedCategoryId && filteredProducts.length === 0 && status === 'succeeded' && (
        <div className="empty-state">
          <p>No hay productos en esta categoría.</p>
        </div>
      )}

      {filteredProducts.length > 0 && (
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className={`product-card ${!product.active ? 'inactive' : ''}`}>
              <div className="product-card-header">
                <h4 className="product-card-title">{product.name}</h4>
                <div className="product-card-actions">
                  <button 
                    className="action-icon edit"
                    onClick={() => handleEdit(product)}
                    title="Editar producto"
                  >
                    <RiEditLine />
                  </button>
                  <button 
                    className="action-icon delete"
                    onClick={() => handleDelete(product)}
                    title="Eliminar producto"
                  >
                    <RiDeleteBinLine />
                  </button>
                </div>
              </div>

              <p className="product-card-description">{product.description}</p>

              <div className="product-card-footer">
                <span className="product-price">$ {product.price.toLocaleString()}</span>
                
                <div className="product-status">
                  <span className={`status-label ${product.active ? 'active' : 'inactive'}`}>
                    {product.active ? 'Activo' : 'Inactivo'}
                  </span>
                  <button
                    onClick={() => toggleProductStatus(product)}
                    className={`toggle-switch ${product.active ? 'active' : ''}`}
                  >
                    <span className="toggle-slider"></span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminProductsList;
