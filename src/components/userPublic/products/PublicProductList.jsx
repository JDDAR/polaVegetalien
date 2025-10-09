import React from 'react';
import './publicProductList.scss';

const PublicProductList = ({ products, selectedCategory, categories }) => {

  console.log('Productos recibidos por PublicProductList:', products);
  console.log('Categoría seleccionada:', selectedCategory);

  // 1. LÓGICA DE FILTRADO
  const filteredProducts = products.filter(product => {
    // Condición 1: El producto debe estar publicado.
    const isPublished = product.isPublic === true;

    // Condición 2: El producto debe pertenecer a la categoría seleccionada.
         // Si la categoría es 'todos', esta condición siempre es verdadera.
    const inSelectedCategory = selectedCategory === 'todos' || product.categoryId === selectedCategory;

    console.log(
        `Producto: "${product.name}" | Publicado: ${isPublished} | En Categoría: ${inSelectedCategory} -> ¿Se muestra? ${isPublished && inSelectedCategory}`
   );

    // El producto se muestra solo si ambas condiciones son verdaderas.
    return isPublished && inSelectedCategory;
  });

  // 2. LÓGICA DE RENDERIZADO
  return (
    <div className="public-product-list">
      {/* Si después de filtrar no hay productos, muestra un mensaje */}
      {filteredProducts.length === 0 ? (
        <p className="no-products-message">No hay productos disponibles en esta categoría.</p>
      ) : (
        // Si hay productos, los mapeamos y renderizamos
        filteredProducts.map(product => {
          const category = categories.find(cat => cat.id === product.categoryId);

          return (
          <div key={product.id} className="public-product-card">
            <div className="product-info">
              <div className='product-info-title'>
              <h3 className="product-name">{product.name}</h3>
                {category && <p className="product-category">{category.name}</p>}
              </div>

              <p className="product-description">{product.description}</p>
              <span className="product-price">${product.price}</span>
            </div>
          </div>
         )}
      ))}
   </div>
  );
};
export default PublicProductList;
