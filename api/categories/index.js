import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const jsonFilePath = path.join(process.cwd(), 'public', 'api', 'categories.json');

  // --- LÓGICA PARA LEER TODAS LAS CATEGORÍAS (GET) ---
  if (req.method === 'GET') {
    try {
      const fileContents = await fs.readFile(jsonFilePath, 'utf8');
      const data = JSON.parse(fileContents);
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
       return res.status(500).json({ message: 'Error al leer los datos de las categorías.' });
    }
  }

  // --- LÓGICA PARA CREAR UNA NUEVA CATEGORÍA (POST) ---
  if (req.method === 'POST') {
    try {
      const { name } = req.body; // Obtenemos el nombre del cuerpo de la petición

      if (!name || name.trim() === '') {
        return res.status(400).json({ message: 'El nombre es requerido.' });
      }

      const fileContents = await fs.readFile(jsonFilePath, 'utf8');
      const categories = JSON.parse(fileContents);

      // Calculamos el nuevo ID (el ID más alto + 1)
      const newId = Math.max(...categories.map(cat => cat.id), 0) + 1;

      const newCategory = {
        id: newId,
        name: name.trim(),
      };

      // Añadimos la nueva categoría a la lista
      categories.push(newCategory);

     // Escribimos la lista actualizada de vuelta al archivo
      await fs.writeFile(jsonFilePath, JSON.stringify(categories, null, 2));

      // Devolvemos la nueva categoría con un estado 201 (Creado)
      return res.status(201).json(newCategory);

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error en el servidor al crear la categoría.' });
    }
  }

  // Si no es GET o POST, devolvemos un error
  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
