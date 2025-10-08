import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
   // --- LÓGICA PARA LEER TODAS LAS CATEGORÍAS (GET) ---
  if (req.method === 'GET') {
    try {
      const { rows: categories } = await sql`SELECT * FROM categories;`;
      return res.status(200).json(categories);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al obtener las categorías de la base de datos.' });
    }
  }

   // --- LÓGICA PARA CREAR UNA NUEVA CATEGORÍA (POST) ---
   if (req.method === 'POST') {
     try {
       const { name } = req.body;

       if (!name || name.trim() === '') {
         return res.status(400).json({ message: 'El nombre es requerido.' });
       }

      // Inserta la nueva categoría en la base de datos y devuelve el registro creado
      const { rows: [newCategory] } = await sql`
        INSERT INTO categories (name)
        VALUES (${name.trim()})
        RETURNING *;
      `;

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
