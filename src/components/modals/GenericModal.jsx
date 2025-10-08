import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../features/modals/modalSlice';
import { createCategoryAsync, deleteCategoryAsync, updateCategoryAsync } from '../../features/adminMenu/adminMenuSlice';
import { deleteProductAsync } from '../../features/products/productsSlice';
import './genericModal.scss';
import ProductForm from './ProductForm';

// --- Componente para el contenido de confirmación de borrado de Categoría ---
const DeleteCategoryConfirm = ({ category, dispatch }) => {
 const handleDelete = () => {
    dispatch(deleteCategoryAsync(category.id));
    dispatch(closeModal());
  };

 return (
    <>
     <p>¿Estás seguro de que quieres eliminar la categoría "<strong>{category.name}</strong>"?</p>
      <div className="modal-actions">
        <button onClick={() => dispatch(closeModal())} className="button-secondary">Cancelar</button>
        <button onClick={handleDelete} className="button-danger">Eliminar</button>
      </div>
    </>
  );
};

// --- Componente para el contenido de confirmación de borrado de Producto ---
const DeleteProductConfirm = ({ product, dispatch }) => {
  const handleDelete = () => {
    dispatch(deleteProductAsync(product.id));
    dispatch(closeModal());
  };

  return (
    <>
      <p>¿Estás seguro de que quieres eliminar el producto "<strong>{product.name}</strong>"?</p>
      <p className="modal-warning">Esta acción no se puede deshacer.</p>
      <div className="modal-actions">
        <button onClick={() => dispatch(closeModal())} className="button-secondary">Cancelar</button>
        <button onClick={handleDelete} className="button-danger">Eliminar Producto</button>
      </div>
    </>
  );
};


// --- Componente para el formulario de edición de Categoría ---
const EditCategoryForm = ({ category, dispatch }) => {
  const [name, setName] = useState(category.name);

  const handleSave = () => {
    dispatch(updateCategoryAsync({ id: category.id, name }));
    dispatch(closeModal());
  };

  return (
     <>
       <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
        <label>Nombre de la categoría:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />
      </form>
      <div className="modal-actions">
        <button onClick={() => dispatch(closeModal())} className="button-secondary">Cancelar</button>
        <button onClick={handleSave} className="button-primary">Guardar Cambios</button>
      </div>
   </>
  );
};

//-- Componente formulario de creación de Categoría --//
const CreateCategoryForm = ({dispatch}) => {
  const [name, setName] = useState('');

  const handleCreate = () => {
    if(name.trim() === '') return;
    dispatch(createCategoryAsync({name}));
    dispatch(closeModal());
  }
  return(
    <>
      <form onSubmit={(e) => { e.preventDefault(); handleCreate(); }}>
        <label>Nombre de la nueva categoria</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} autoFocus placeholder='Ej: Postres veganos' />
      </form>
      <div className='modal-actions'>
        <button onClick={() => dispatch(closeModal())} className='button-secondary'>Cancelar</button>
        <button onClick={handleCreate} className='button-primary'>Crear</button>
      </div>
    </>
  )
}

// --- Componente principal del Modal ---
const ModalContent = ({ contentKey, data, dispatch }) => {
  // LÍNEA CORREGIDA: Obtenemos las categorías aquí para pasarlas al formulario
  const { categories } = useSelector((state) => state.adminMenu);

  switch (contentKey) {
    case 'DELETE_CATEGORY_CONFIRM':
      return <DeleteCategoryConfirm category={data} dispatch={dispatch} />;
    case 'EDIT_CATEGORY_FORM':
      return <EditCategoryForm category={data} dispatch={dispatch} />;
    case 'CREATE_CATEGORY_FORM':
      return <CreateCategoryForm dispatch={dispatch}/>;
    case 'DELETE_PRODUCT_CONFIRM':
      return <DeleteProductConfirm product={data} dispatch={dispatch} />;
    case 'CREATE_PRODUCT_FORM':
      return <ProductForm categories={categories} />;
    case 'EDIT_PRODUCT_FORM':
      return <ProductForm product={data} categories={categories} />;
    default:
      return null;
  }
 };

const GenericModal = () => {
   const dispatch = useDispatch();
  const { isOpen, title, contentKey, data } = useSelector((state) => state.modal);

  if (!isOpen) return null;

  const handleClose = () => dispatch(closeModal());
  const handleModalContentClick = (e) => e.stopPropagation();

   return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={handleModalContentClick}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={handleClose} className="close-button">&times;</button>
        </div>
        <div className="modal-body">
          <ModalContent contentKey={contentKey} data={data} dispatch={dispatch} />
        </div>
      </div>
    </div>
 );
};

export default GenericModal;
