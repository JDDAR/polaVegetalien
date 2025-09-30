export default function handler(request, response) {
  if ( request.method !== 'POST' ) {
    return response.status(405).json({ message: '¡ Metodo no permitido !'});
  }

  //'request.body' -> contiene el usuario y lacontraseña que enviar ale formulario
  const {username, password} = request.body;

  //'process.env'-> es como se accede a las variables creadas en vercel
  const adminUser = process.env.ADMIN_USER;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!username || !password || !adminUser || !adminPassword) {
    return response.status(400).json({message : 'Faltan credenciales ó el servidor no está configurado. '});
  }

  //Comparamos con lo que se envia del formulario con las credenciales de seguras
  if (username === adminUser && password === adminPassword) {
    return response.status(200).json({ message:'¡BIEN! Autenticación exitosa' });
  }else{
    return response.status(401).json({ message: '¡LO SIENTO! Credenciales Invalidas '});
  }
}


