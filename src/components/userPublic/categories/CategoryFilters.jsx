import React from 'react';
import './categoryFilters.scss';


const CategoryFilters = ({ categories, selectedCategory, onSelectCategory }) => {
  // Añadimos la categoría "Todos" al principio de la lista que recibimos
  const allCategories = [{ id: 'todos', name: 'Todos' }, ...categories];

  return (
    <div className="category-filters-container">
      {allCategories.map((category) => (
        <div
         key={category.id}
          // La clase 'active' se añade si la categoría coincide con la seleccionada
          className={`category-filter-item ${selectedCategory === category.id ? 'active' : ''}`}
          onClick={() => onSelectCategory(category.id)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onSelectCategory(category.id);
             }
           }}
         >
           <span>{category.name}</span>
         </div>
      ))}
   </div>
  );
};

export default CategoryFilters;
