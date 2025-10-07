import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  // Obtenemos la ruta al archivo JSON
  const jsonFilePath = path.join(process.cwd(), 'public', 'api', 'categories.json');
  const { id } = req.query;
  const categoryId = parseInt(id, 10);

  // --- LÓGICA PARA ACTUALIZAR (PUT) ---
  if (req.method === 'PUT') {
    try {
      const { name: newName } = req.body; // Obtenemos el nuevo nombre del cuerpo de la petición

      if (!newName) {
        return res.status(400).json({ message: 'El nombre es requerido.' });
      }

      const fileContents = await fs.readFile(jsonFilePath, 'utf8');
      const categories = JSON.parse(fileContents);

      let categoryUpdated = false;
      const updatedCategories = categories.map(cat => {
        if (cat.id === categoryId) {
          categoryUpdated = true;
          return { ...cat, name: newName }; // Actualizamos el nombre
        }
        return cat;
      });

      if (!categoryUpdated) {
        return res.status(404).json({ message: 'Categoría no encontrada.' });
      }

      await fs.writeFile(jsonFilePath, JSON.stringify(updatedCategories, null, 2));

      // Devolvemos solo la categoría que fue actualizada
      const updatedCategory = updatedCategories.find(cat => cat.id === categoryId);
      return res.status(200).json(updatedCategory);

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error en el servidor al actualizar la categoría.' });
    }
  }

  // --- LÓGICA PARA BORRAR (DELETE) ---
  if (req.method === 'DELETE') {
    try {
      // 1. Obtenemos el ID desde la URL (ej: /api/categories/5)
      const { id } = req.query;
      const categoryIdToDelete = parseInt(id, 10);

      // 2. Leemos el archivo actual
      const fileContents = await fs.readFile(jsonFilePath, 'utf8');
      const categories = JSON.parse(fileContents);

      // 3. Filtramos el array para quitar la categoría con el ID correspondiente
      const newCategories = categories.filter(cat => cat.id !== categoryIdToDelete);

      // 4. Comprobamos si algo se eliminó realmente
      if (categories.length === newCategories.length) {
        return res.status(404).json({ message: 'Categoría no encontrada.' });
      }

      // 5. Escribimos el nuevo array de vuelta al archivo
      await fs.writeFile(jsonFilePath, JSON.stringify(newCategories, null, 2));

     // 6. Enviamos una respuesta de éxito
      return res.status(200).json({ message: `Categoría con ID ${categoryIdToDelete} eliminada.` });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error en el servidor al eliminar la categoría.' });
    }
  }
  
  // Si no es DELETE, devolvemos un error de método no permitido
  res.setHeader('Allow', ['PUT', 'DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
