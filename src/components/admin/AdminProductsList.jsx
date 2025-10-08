import React, { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RiEditLine, RiDeleteBinLine } from 'react-icons/ri';
import './adminProductsList.scss';
import { fetchProductsAsync, updateProductStatusAsync } from '../../features/products/productsSlice';
import { openModal } from '../../features/modals/modalSlice'; // NUEVA IMPORTACIÓN

const AdminProductsList = () => {
  const { items: products, status } = useSelector((state) => state.products);
  const { selectedCategoryId, categories } = useSelector((state) => state.adminMenu);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProductsAsync());
    }
  }, [status, dispatch]);

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
    dispatch(openModal({
      title: 'Editar Producto',
      contentKey: 'EDIT_PRODUCT_FORM',
      data: product
    }));
  };

  // MODIFICADO: Implementamos la lógica para abrir el modal
  const handleDelete = (product) => {
    dispatch(openModal({
      title: 'Confirmar Eliminación',
      contentKey: 'DELETE_PRODUCT_CONFIRM',
      data: product // Pasamos el objeto completo del producto
    }));
  };

  const handleCreate = () => {
    dispatch(openModal({
      title: 'Agregar Nuevo Producto',
      contentKey: 'CREATE_PRODUCT_FORM',
    }));
  };

  const toggleProductStatus = (product) => {
    dispatch(updateProductStatusAsync({ id: product.id, isPublic: !product.isPublic }));
  };

  return (
    // ... El resto del JSX no cambia ...
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
          <button className="add-product-button" onClick={handleCreate}>
            + AGREGAR PRODUCTO
          </button>
        </div>
      </div>

     {!selectedCategoryId && status !== 'loading' && (
        <div className="empty-state">
          <p>Selecciona una categoría para ver sus productos.</p>
        </div>
      )}

      {status === 'loading' && (
        <div className="empty-state">
         <p>Cargando productos...</p>
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
            <div key={product.id} className={`product-card ${!product.isPublic ? 'inactive' : ''}`}>
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
                <span className="product-price">$ {product.price ? product.price.toLocaleString() : '0.00'}</span>

               <div className="product-status">
                  <span className={`status-label ${product.isPublic ? 'active' : 'inactive'}`}>
                    {product.isPublic ? 'Activo' : 'Inactivo'}
                   </span>
                 <button
                    onClick={() => toggleProductStatus(product)}
                    className={`toggle-switch ${product.isPublic ? 'active' : ''}`}
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
