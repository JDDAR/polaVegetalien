import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProductsAsync } from '../../features/products/productsSlice';
import { fetchCategoriesAsync } from '../../features/categories/categorySlice';
import CategoryFilters from '../../components/userPublic/categories/CategoryFilters';
import PublicProductList from "../../components/userPublic/products/PublicProductList";
import './menupages.scss';

const MenuPage = () => { 
 
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const { items: products, status: productStatus } = useSelector((state) => state.products);
  const { items: categories, status: categoryStatus } = useSelector((state) => state.categories);

  useEffect(() => { 
      dispatch(fetchProductsAsync());
      dispatch(fetchCategoriesAsync());

      const handleFocus = () => {
        dispatch(fetchProductsAsync());
        dispatch(fetchCategoriesAsync());
      };
  
      window.addEventListener('focus', handleFocus);
  
      return () => {
        window.removeEventListener('focus', handleFocus);
      };
  }, [dispatch]);

  if (productStatus === 'loading' || categoryStatus === 'loading') {
    return <div>Cargando menú ...</div>;
  }

  return( 
    <>
      <div className="menu-page-container">
        <h1>Menu Principal</h1>

        <CategoryFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <PublicProductList 
          products = {products}
          categories={categories}
          selectedCategory={selectedCategory}
        /> 

      </div>
    </>
  )


}
export default MenuPage;
