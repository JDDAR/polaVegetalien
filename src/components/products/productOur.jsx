import { useState } from "react";
import "../../styles/components/products/productsOur.scss";

import { FaWhatsapp } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";

const ProductOur = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  // Define el número de WhatsApp y construye el mensaje con los detalles del producto
  const getWhatsAppLink = (product) => {
    const whatsappNumber = "573213120825"; // Reemplaza con el número de WhatsApp
    const message = `Hola, me interesa el producto ${product.title}, de tipo ${product.type}, con un precio de $${product.price}.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      {products.map((product) => (
        <section key={product.id} className="productContainer">
          <div className="productContainer__product-img">
            <img src={product.img} alt={product.title} />
          </div>
          <div className="productContainer__product-info">
            <h2>{product.title}</h2>
            <span>{product.type}</span>
            <button
              className="buttonModalProducts"
              onClick={() => openModal(product)}
            >
              <AiFillEye />
            </button>
            <section className="productContainer__product-price">
              <span></span>
            </section>
          </div>
        </section>
      ))}

      {selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-content-img">
              <img src={selectedProduct.img} alt={selectedProduct.title} />
            </div>
            <div className="modal-content-info">
              <div className="modal-content-info-titleDescripcion">
                <h2>{selectedProduct.title}</h2>
                <p>{selectedProduct.description}</p>
              </div>
              <span></span>
              {/* Botón para redirigir a WhatsApp */}
              <a
                href={getWhatsAppLink(selectedProduct)}
                target="_blank"
                rel="noopener noreferrer"
                className="buttonPrimary"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductOur;
