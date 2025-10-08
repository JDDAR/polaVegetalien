import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  const { id } = req.query; // Obtenemos el ID desde la URL

  // --- LÓGICA PARA ACTUALIZAR UNA CATEGORÍA (PUT) ---
  if (req.method === 'PUT') {
    try {
      const { name } = req.body; // Obtenemos el nuevo nombre desde el cuerpo de la petición

      if (!name || name.trim() === '') {
        return res.status(400).json({ message: 'El nombre es requerido.' });
      }
      if (!id) {
        return res.status(400).json({ message: 'El ID de la categoría es requerido.' });
      }

      // Actualiza la categoría en la base de datos y devuelve el registro actualizado
      const { rows: [updatedCategory] } = await sql`
        UPDATE categories
        SET name = ${name.trim()}
        WHERE id = ${id}
        RETURNING *;
      `;

      if (!updatedCategory) {
        return res.status(404).json({ message: 'Categoría no encontrada.' });
      }

      return res.status(200).json(updatedCategory);

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error en el servidor al actualizar la categoría.' });
    }
  }

  // --- LÓGICA PARA BORRAR UNA CATEGORÍA (DELETE) ---
  if (req.method === 'DELETE') {
    try {
      if (!id) {
        return res.status(400).json({ message: 'El ID de la categoría es requerido.' });
      }

      // Borra la categoría de la base de datos
      const result = await sql`
        DELETE FROM categories
        WHERE id = ${id};
      `;
      // `rowCount` nos dice cuántas filas fueron afectadas. Si es 0, no se encontró.
      if (result.rowCount === 0) {
        return res.status(404).json({ message: 'Categoría no encontrada.' });
      }

      return res.status(200).json({ message: 'Categoría eliminada exitosamente.' });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error en el servidor al eliminar la categoría.' });
    }
  }

  // Si no es PUT o DELETE, devolvemos un error
  res.setHeader('Allow', ['PUT', 'DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
