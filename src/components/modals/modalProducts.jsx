import { useDispatch, useSelector } from "react-redux";
import { closeModalProducts } from "../../features/modals/modalProductSlice";

const ModalProducts = () => {
  const dispatch = useDispatch();
  const { isOpen, selectedProduct } = useSelector(
    (state) => state.modalProducts,
  );

  if (!isOpen || !selectedProduct) return null;

  const whatsappNumber = "573123250664"; // Reemplaza con el número de WhatsApp
  const whatsappMessage = `Hola, me interesa el producto ${selectedProduct.title} de tipo ${selectedProduct.type}`;

  return (
    <aside
      className="modalContainer"
      onClick={() => dispatch(closeModalProducts())}
    >
      <div
        className="modalContainer__modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{selectedProduct.title}</h2>
        <img src={selectedProduct.img} alt={selectedProduct.title} />
        <p>Tipo: {selectedProduct.type}</p>
        <p>Precio: {selectedProduct.price}</p>
        <button onClick={() => dispatch(closeModalProducts())}>Cerrar</button>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contactar por WhatsApp
        </a>
      </div>
    </aside>
  );
};

export default ModalProducts;
