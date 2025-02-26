const productsData = [
  {
    id: 1,
    title: "Croissant",
    price: 90,
    img: "https://images.pexels.com/photos/24838082/pexels-photo-24838082/free-photo-of-desayuno-panaderia-dulce-almendra.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    amount: 1,
    type: "boulangerie",
    description:
      "Un clásico francés, elaborado con capas de masa hojaldrada y mantequilla de alta calidad. Crujiente por fuera y suave por dentro, es perfecto para disfrutar solo o acompañado de mermeladas y cremas",
  },
  {
    id: 2,
    title: "Pain au Chocolat",
    price: 90,
    img: "https://images.pexels.com/photos/8909323/pexels-photo-8909323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    amount: 1,
    type: "boulangerie",
    description:
      "Explora la diferencia entre nuestras dos versiones del pan de chocolate. El 'pan au chocolat', elaborado con masa hojaldrada tradicional, y el 'pan abu chocolat', con una técnica de preparación diferente que resalta un sabor más profundo y una textura más esponjosa.",
  },

  {
    id: 3,
    title: "Paris-Brest",
    price: 90,
    img: "https://images.pexels.com/photos/5436431/pexels-photo-5436431.jpeg",
    amount: 1,
    type: "boulangerie",
    description:
      "Inspirado en la clásica tarta francesa, nuestro Paris-Brest es una rueda de masa choux rellena de crema de praliné de avellanas, con almendras tostadas en la parte superior, creando una combinación de texturas y sabores inigualables.",
  },

  {
    id: 4,
    title: "Pan de Chocolate",
    price: 90,
    img: "https://images.pexels.com/photos/6829492/pexels-photo-6829492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    amount: 1,
    type: "boulangerie",
    description:
      "El pan de chocolate,  es un bocado ligero, esponjoso y delicioso, relleno de barras de chocolate y con ganache de chocolate amargo al 70% ",
  },
  {
    id: 5,
    title: "Milhojas (Mille-feuille)",
    price: 90,
    img: "https://images.pexels.com/photos/11922700/pexels-photo-11922700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    amount: 1,
    type: "boulangerie",
    description:
      "Capas finas de hojaldre intercaladas con crema pastelera suave y aromática, decoradas con azúcar glas. Esta creación ligera y delicada es un verdadero tributo a la repostería francesa",
  },

  /*------ Eclairs ---------*/

  {
    id: 6,
    title: "Chocolate",
    price: 800,
    img: "https://images.pexels.com/photos/18330355/pexels-photo-18330355/free-photo-of-comida-desierto-panaderia-chocolate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    amount: 1,
    type: "eclair",
    description:
      "Un eclair clásico relleno de crema de chocolate negro, cubierto con un glaseado brillante de chocolate. Su masa choux ligera y crujiente crea un contraste perfecto con el relleno cremoso",
  },
  {
    id: 7,
    title: "Arequipe",
    price: 800,
    img: "https://images.pexels.com/photos/5665687/pexels-photo-5665687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    amount: 1,
    type: "eclair",
    description:
      "Eclair relleno de una suave crema de arequipe colombiano, cubierto con un glaseado dulce que realza el sabor caramelizado del relleno.",
  },
  {
    id: 8,
    title: "Piña",
    price: 800,
    img: "https://images.unsplash.com/photo-1613992612826-b799b2458dff?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    amount: 1,
    type: "eclair",
    description:
      "Este eclair tropical está relleno de una delicada crema de piña que captura el equilibrio perfecto entre dulzura y acidez. Coronado con un glaseado brillante y pequeños trozos de piña caramelizada que intensifican su frescura.",
  },
  {
    id: 9,
    title: "Maracuya",
    price: 800,
    img: "https://images.unsplash.com/photo-1643136364310-3aa870f4f3f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    amount: 1,
    type: "eclair",
    description:
      "Un eclair refrescante con un relleno cremoso de maracuyá, que ofrece un sabor cítrico y exótico. Su cobertura de glaseado suave resalta la acidez vibrante del fruto, ideal para quienes buscan una experiencia dulce y tropical.",
  },
  {
    id: 10,
    title: "Frambuesa",
    price: 800,
    img: "https://images.unsplash.com/photo-1567266231925-e5525a582655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    amount: 1,
    type: "eclair",
    description:
      "Relleno de una crema suave de frambuesa, este eclair combina el dulzor natural de la fruta con un toque de acidez. Adornado con un glaseado rosado brillante y pedacitos de frambuesa liofilizada, es perfecto para los amantes de los sabores frutales intensos.",
  },

  /*-------------Cakes -----------*/
  {
    id: 11,
    title: "Ópera",
    price: 90,
    img: "https://images.pexels.com/photos/20818067/pexels-photo-20818067/free-photo-of-postre-pastel-fotografia-de-comida-enfoque-selectivo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    amount: 1,
    type: "cakes",
    description:
      "Un clásico pastel francés de capas finas de bizcocho de almendra empapado en café, alternadas con ganache de chocolate y crema de mantequilla de café. Su acabado de glaseado de chocolate brillante y su equilibrio de sabores lo convierten en un placer para los amantes del café y el chocolate",
  },
  {
    id: 12,
    title: "Charter Hotel",
    price: 90,
    img: "https://images.unsplash.com/photo-1569896254409-ac66c17041d2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    amount: 1,
    type: "cakes",
    description:
      "Un pastel elegante y sofisticado, con capas de bizcocho ligero, mousse de chocolate y una suave crema de vainilla. Ideal para celebraciones especiales, gracias a su presentación refinada y su combinación de sabores",
  },
  {
    id: 13,
    title: "Cheesecake",
    price: 90,
    img: "https://images.pexels.com/photos/13715795/pexels-photo-13715795.jpeg",
    amount: 1,
    type: "cakes",
    description:
      "Disponible en chocolate y mango que son los sabores favoritos de la casa, perfectos para finalizar una comida con un toque dulce. Cada semana un sabor nuevo",
  },

  /*------------Pettit------------*/
  {
    id: 14,
    title: "BonBon",
    price: 90,
    img: "https://images.pexels.com/photos/15420473/pexels-photo-15420473/free-photo-of-comida-dulce-papel-bandeja.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    amount: 1,
    type: "pettit",
    description:
      "Pequeñas delicias de chocolate rellenas con ganache de diferentes sabores, desde frambuesa hasta caramelo salado. Cada bonbon está recubierto de una fina capa de chocolate brillante, para un acabado perfecto.",
  },
  {
    id: 15,
    title: "Chocolate Barras",
    price: 90,
    img: "https://images.pexels.com/photos/4110088/pexels-photo-4110088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    amount: 1,
    type: "pettit",
    description:
      "Disponibles en diferentes tamaños (grandes, medianas y pequeñas), estas barras de chocolate están hechas con cacao de la más alta calidad, ofreciendo desde variedades puras hasta combinaciones con frutos secos y frutas confitadas",
  },
  /*-----------------Tarts-----------*/
  {
    id: 16,
    title: "Chocolate",
    price: 90,
    img: "https://images.pexels.com/photos/691152/pexels-photo-691152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    amount: 1,
    type: "tarts",
    description:
      "Una tarta lujosa con una base de masa crujiente y un rico relleno de ganache de chocolate oscuro, elaborado con cacao de la mejor calidad. Cada porción ofrece una textura suave y aterciopelada, ideal para un deleite con café o té.",
  },
  {
    id: 17,
    title: "Black and White (Especial de la casa)",
    price: 90,
    img: "https://images.pexels.com/photos/8670439/pexels-photo-8670439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    amount: 1,
    type: "tarts",
    description:
      "Nuestra tarta estrella, una combinación perfecta de chocolate blanco y negro en capas que alternan sobre una base crujiente. Cada bocado es un equilibrio de sabores y texturas, con un contraste entre la dulzura del chocolate blanco y la profundidad del negro.",
  },
  {
    id: 18,
    title: "Frambuesa",
    price: 90,
    img: "https://images.pexels.com/photos/17402675/pexels-photo-17402675/free-photo-of-comida-plato-postre-pastel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    amount: 1,
    type: "tarts",
    description:
      "Una tarta fresca con un relleno de crema de frambuesa vibrante, cubierta con frambuesas frescas. Su base crocante complementa la acidez de la fruta, creando una experiencia afrutada y refrescante.",
  },
  {
    id: 19,
    title: "Maracuya",
    price: 90,
    img: "https://images.pexels.com/photos/15913636/pexels-photo-15913636/free-photo-of-comida-plato-dulce-pastel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    amount: 1,
    type: "tarts",
    description:
      "Esta tarta exótica presenta una base crujiente y un cremoso relleno de Maracuya, aportando notas tropicales únicas. Perfecta para quienes buscan algo diferente y refrescante",
  },
  {
    id: 20,
    title: "Mango",
    price: 90,
    img: "https://images.pexels.com/photos/2335682/pexels-photo-2335682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    amount: 1,
    type: "tarts",
    description:
      "Una tarta de mango que combina la dulzura de la fruta madura con un relleno cremoso y suave. Su base ligera y crocante equilibra la textura y el sabor, haciendo de esta tarta un deleite tropical.",
  },
  {
    id: 21,
    title: "Arequipe",
    price: 90,
    img: "https://images.pexels.com/photos/19244738/pexels-photo-19244738/free-photo-of-azucar-postre-dulce-delicioso.jpeg",
    amount: 1,
    type: "tarts",
    description:
      "Una deliciosa tarta de arequipe con una base crujiente que se deshace en la boca, rellena de un dulce y cremoso arequipe colombiano. Su sabor caramelizado ofrece un placer dulce irresistible.",
  },
  {
    id: 22,
    title: "Cereza",
    price: 90,
    img: "https://images.pexels.com/photos/1282279/pexels-photo-1282279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    amount: 1,
    type: "tarts",
    description:
      "Una tarta delicada con un relleno de cerezas maceradas en su jugo natural, cubierta con una fina capa de glaseado de cereza. La base de masa crujiente complementa la jugosidad y la dulzura de las cerezas.",
  },
  {
    id: 23,
    title: "Fresa",
    price: 90,
    img: "https://images.pexels.com/photos/4748359/pexels-photo-4748359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    amount: 1,
    type: "tarts",
    description:
      "Una tarta fresca y afrutada, con un relleno de crema de fresa natural y fresas frescas en la parte superior. Cada bocado ofrece un equilibrio perfecto entre la dulzura de la fruta y la suvidad de la crema",
  },

  /*..-------------Macarons_----------------*/
  {
    id: 24,
    title: "Chocolate",
    price: 90,
    img: "https://images.pexels.com/photos/8718009/pexels-photo-8718009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    amount: 1,
    type: "macarons",
    description:
      "Un macaron elaborado con una delicada mezcla de almendra molida y cacao puro, relleno con una ganache de chocolate negro. Su textura crujiente por fuera y suave por dentro crea una experiencia rica e indulgente para los amantes del chocolate. ",
  },
  {
    id: 25,
    title: "Black and White (Especial de la casa)",
    price: 90,
    img: "https://images.pexels.com/photos/7296682/pexels-photo-7296682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    amount: 1,
    type: "macarons",
    description:
      "Este macaron especial de la casa presenta un contraste visual y de sabor único, con capas de chocolate blanco y negro que se funden en el paladar. Su relleno de ganache aterciopelada equilibra la dulzura del chocolate blanco con la intensidad del chocolate negro, ofreciendo un deleite sofisticado.",
  },
  {
    id: 26,
    title: "Frambuesa",
    price: 90,
    img: "https://images.pexels.com/photos/13344223/pexels-photo-13344223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    amount: 1,
    type: "macarons",
    description:
      "Un macaron refrescante y afrutado, con un delicado relleno de crema de frambuesa hecho con fruta fresca. La acidez natural de la frambuesa se equilibra con un toque de dulzura, proporcionando un sabor vibrante y aromático.",
  },
  {
    id: 27,
    title: "Yuzu",
    price: 90,
    img: "https://images.pexels.com/photos/15898637/pexels-photo-15898637/free-photo-of-dulce-galletas-delicioso-fotografia-de-comida.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    amount: 1,
    type: "macarons",
    description:
      "Inspirado en la fruta cítrica asiática, el macaron de yuzu ofrece una combinación perfecta desabores ácidos y dulces. El relleno cremoso de yuzu destaca por su frescura, recordando a limón pero con un perfil más complejo y aromático.",
  },
  {
    id: 28,
    title: "Maracuya",
    price: 90,
    img: "https://images.pexels.com/photos/16946892/pexels-photo-16946892/free-photo-of-macarons-coloridos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    amount: 1,
    type: "macarons",
    description:
      "Un macaron exótico que captura el sabor distintivo de la Maracuya. Su relleno de crema suave y aromática aporta notas florales y afrutadas que transportan a un jardín tropical.",
  },
  /*- ------------------------DRINKS--*/
  {
    id: 29,
    title: "Té de Flor de Jamaica",
    price: 90,
    img: "https://images.pexels.com/photos/5946806/pexels-photo-5946806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    amount: 1,
    type: "drinks",
    description:
      "Una infusión de flor de jamaica de color rubí, conocida por sus propiedades antioxidantes y su sabor ligeramente ácido. Puede disfrutarse caliente o fría, ideal para refrescarse y revitalizarse a cualquier hora del día",
  },
  {
    id: 30,
    title: "Chocolate Caliente",
    price: 90,
    img: "https://images.pexels.com/photos/19271883/pexels-photo-19271883/free-photo-of-navidad-pasteles-y-chocolate-caliente.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    amount: 1,
    type: "drinks",
    description:
      "Un chocolate caliente espeso y cremoso, hecho con cacao puro y un toque especial de brownie en el fondo. Su textura densa y su sabor intenso hacen de esta bebida una experiencia reconfortante para los amantes del chocolate",
  },
  {
    id: 31,
    title: "Té de Jengibre",
    price: 90,
    img: "https://images.pexels.com/photos/227908/pexels-photo-227908.jpeg",
    amount: 1,
    type: "drinks",
    description:
      "Una infusión de jengibre fresco, con notas picantes y cítricas, ideal para revitalizar el cuerpo y la mente. Perfecto para disfrutar caliente, especialmente en los días fríos, o como acompañante de los postres del menú.",
  },
  {
    id: 32,
    title: "Café Americano y Espresso",
    price: 90,
    img: "https://images.pexels.com/photos/27548812/pexels-photo-27548812/free-photo-of-naturaleza-cafeina-cafe-relajacion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    amount: 1,
    type: "drinks",
    description:
      "Clásico café americano o espresso, preparado con granos de café de alta calidad, tostados artesanalmente para realzar sus sabores naturales. Su aroma profundo y su sabor equilibrado lo convierten en el acompañante ideal para cualquier ocasión",
  },
];

export default productsData;
