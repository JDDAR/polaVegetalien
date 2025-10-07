import axios from 'axios';

const apiClient = axios.create({

  baseURL: '/api/',
  headers: {
    'Content-Type': 'application/json',
  }

});

/**
  * Obtiene la lista de todas las categorías desde categories.json.
  * @returns {Promise} Una promesa de Axios con los datos de las categorías.
  */
export const getCategories = () => {
   return apiClient.get('categories');
};

/**
   * Obtiene la lista de todos los productos desde products.json.
   * @returns {Promise} Una promesa de Axios con los datos de los productos.
   */
export const getProducts = () => {
   return apiClient.get('products');
};

/**
  * @returns {Promise} Una promesa que se resuelve inmediatamente.
  */
export const deleteCategory = (categoryId) => {
  return apiClient.delete(`categories/${categoryId}`);
};

/**
  * @returns {Promise<{data: {id: number, name: string}}>} Una promesa que devuelve la categoría "actualizada".
  */
export const updateCategory = ({ id, name }) => {
  return apiClient.put(`categories/${id}`, {name});
};

/**
  * Crea una nueva categoría.
  * @param {{name: string}} categoryData - El nombre de la nueva categoría.
  * @returns {Promise} Una promesa de Axios con los datos de la categoría creada.
  */
export const createCategory = ({ name }) => {
  return apiClient.post('categories', { name });
};


export default apiClient;

