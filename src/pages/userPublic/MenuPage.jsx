import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProductsAsync } from '../../features/products/productsSlice';
import { fetchCategoriesAsync } from '../../features/categories/categorySlice';
import CategoryFilters from '../../components/userPublic/categories/CategoryFilters';
import PublicProductList from "../../components/userPublic/products/PublicProductList";
import HeaderMenuPublic from "../../components/userPublic/headerPublicMenu/HeaderMenuPublic";

import { SiCodechef } from "react-icons/si";


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
    return <div className="loading">
       <h1> <span> <SiCodechef />  </span>Cargando menú ... </h1>
    </div>;
  }

  return( 
    <>
      <div className="menu-page-container">
        <HeaderMenuPublic />
        <div className="menu-page-container-titleSection">
          <h1 className="title-section" >Menu Principal</h1>
        </div>
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
