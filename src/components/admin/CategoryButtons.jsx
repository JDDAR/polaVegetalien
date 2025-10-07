import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminMenuData, setSelectedCategory } from "../../features/adminMenu/adminMenuSlice";
import { RiEditLine, RiDeleteBinLine, RiAddCircleLine } from "react-icons/ri";
import './categotyButtons.scss'
import { openModal } from "../../features/modals/modalSlice";

const CategoryButtons = () => {  
  const dispatch = useDispatch();
  const { categories, status, selectedCategoryId } = useSelector((state) => state.adminMenu);
  
  useEffect(() => { 
    if(status === 'idle') { 
      dispatch(fetchAdminMenuData());
    }
  }, [status, dispatch]);

  const handleDelete = (e, category) => {
    e.stopPropagation();
    dispatch(openModal({
      title: 'Confirmar Eliminación',
      contentKey: 'DELETE_CATEGORY_CONFIRM',
      data: category,
    }));
  };

  const handleEdit = (e, category) => {
    e.stopPropagation();
    dispatch(openModal({
      title: 'Editar Categoría',
      contentKey: 'EDIT_CATEGORY_FORM',
      data: category,
    }));
  };  

  const handleCreate = () => {
    dispatch(openModal( { 
      title: 'Crear Nueva Categoria',
      contentKey: 'CREATE_CATEGORY_FORM',
      data: null,
    }));
  };

  return( 
    <>
      <div className="create-category-container">
        <h3>CATEGORIAS</h3>
        <button onClick={handleCreate} className="create-category-button">
          <RiAddCircleLine /> Crear Categoria
        </button>
      </div>
      <div className="containerCategories">
        { status === 'loading' && <p className="containerCategories-message">Cargando Categorías...</p> }
        { status === 'failed' && <p className="containerCategories-message error">Error al cargar las categorías...</p> }
        { status === 'succeeded' && categories.map((category) => ( 
          <div
            key={category.id}  
            className={`containerCategories-btn ${category.id === selectedCategoryId ? 'active' : ''}`}
            onClick={() => dispatch(setSelectedCategory(category.id))}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                dispatch(setSelectedCategory(category.id));
              }
            }}
          >
            <span className="containerCategories-btn-text">{category.name}</span>
            
            <div className="containerCategories-btn-actions">
              <button 
                className="containerCategories-btn-actions-icon edit"
                onClick={(e) => handleEdit(e, category)}
                title="Editar categoría"
              >
                <RiEditLine />
              </button>
              <button 
                className="containerCategories-btn-actions-icon delete"
                onClick={(e) => handleDelete(e, category)}
                title="Eliminar categoría"
              >
                <RiDeleteBinLine />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default CategoryButtons;
