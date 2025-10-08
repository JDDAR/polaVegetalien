import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  // --- LÓGICA PARA LEER TODOS LOS PRODUCTOS (GET) ---
  if (req.method === 'GET') {
    try {
      const { rows: products } = await sql`SELECT * FROM products ORDER BY name;`;
      return res.status(200).json(products);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      return res.status(500).json({ message: 'Error al leer los datos de los productos.' });
    }
  }

 // --- LÓGICA PARA CREAR UN NUEVO PRODUCTO (POST) ---
  if (req.method === 'POST') {
    try {
      const { name, description, price, stock, categoryId, isPublic } = req.body;

    // Validación simple
      if (!name || !price || !categoryId) {
        return res.status(400).json({ message: 'Nombre, precio y categoría son requeridos.' });
      }

      const { rows: [newProduct] } = await sql`
        INSERT INTO products (name, description, price, stock, "categoryId", "isPublic")
        VALUES (${name}, ${description}, ${price}, ${stock}, ${categoryId}, ${isPublic})
        RETURNING *;
      `;

      return res.status(201).json(newProduct);

    } catch (error) {
      console.error('Error al crear el producto:', error);
      return res.status(500).json({ message: 'Error en el servidor al crear el producto.' });
    }
  }

  // Si no es GET o POST, devolvemos un error
  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
