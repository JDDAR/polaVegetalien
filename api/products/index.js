import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
   if (req.method !== 'GET') {
     res.setHeader('Allow', ['GET']);
     return res.status(405).end(`Method ${req.method} Not Allowed`);
   }

   try {
     const jsonDirectory = path.join(process.cwd(), 'public', 'api');
     const fileContents = await fs.readFile(path.join(jsonDirectory, 'products.json'), 'utf8');
     const data = JSON.parse(fileContents);
     res.status(200).json(data);
   } catch (error) {
     console.error(error);
     res.status(500).json({ message: 'Error al leer los datos de los productos.' });
   }
}
