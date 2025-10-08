import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
const { id } = req.query;

  // --- LÓGICA PARA ACTUALIZAR UN PRODUCTO (PUT) ---
  if (req.method === 'PUT') {
    try {
      const { name, description, price, stock, categoryId, isPublic } = req.body;

      // Para hacer la actualización más flexible, primero obtenemos los datos actuales
      const { rows: [product] } = await sql`SELECT * FROM products WHERE id = ${id};`;
      if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado.' });
      }

     // Creamos el objeto con los datos actualizados, usando los datos viejos si no se proveen nuevos
      const updatedData = {
        name: name ?? product.name,
        description: description ?? product.description,
        price: price ?? product.price,
        stock: stock ?? product.stock,
        categoryId: categoryId ?? product.categoryId,
        isPublic: isPublic ?? product.isPublic,
      };

      const { rows: [updatedProduct] } = await sql`
        UPDATE products
        SET
          name = ${updatedData.name},
          description = ${updatedData.description},
          price = ${updatedData.price},
          stock = ${updatedData.stock},
          "categoryId" = ${updatedData.categoryId},
          "isPublic" = ${updatedData.isPublic}
        WHERE id = ${id}
        RETURNING *;
      `;

       return res.status(200).json(updatedProduct);

    } catch (error) {
      console.error('Error al actualizar el producto:', error);
      return res.status(500).json({ message: 'Error en el servidor al actualizar el producto.' });
    }
 }

  // --- LÓGICA PARA BORRAR UN PRODUCTO (DELETE) ---
  if (req.method === 'DELETE') {
    try {
      const result = await sql`DELETE FROM products WHERE id = ${id};`;

      if (result.rowCount === 0) {
        return res.status(404).json({ message: 'Producto no encontrado.' });
      }

      return res.status(200).json({ message: 'Producto eliminado exitosamente.' });

    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      return res.status(500).json({ message: 'Error en el servidor al eliminar el producto.' });
    }
  }

  res.setHeader('Allow', ['PUT', 'DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
