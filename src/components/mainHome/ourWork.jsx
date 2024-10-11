import { useState } from "react";
import productsData from "../../data/productsData";

import ButtonFilter from "../buttons/buttonsFilter";
import ProductOur from "../products/productOur";
import TitleHome from "../titles/titleHome";

const OurWork = () => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const menuButtons = [
    "All",
    ...new Set(productsData.map((product) => product.type)),
  ];

  const filterType = (type) => {
    setActiveFilter(type);
    if (type === "All") {
      setFilteredProducts(productsData);
    } else {
      const newType = productsData.filter((product) => product.type === type);
      setFilteredProducts(newType);
    }
    setCurrentPage(1); // Reset page to 1 when filtering
  };

  // Calculate the indices of the first and last products on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="container">
      <div className="ourWorkContainer">
        <TitleHome
          title="Our Work"
          titleText="eque porro quisquam est qui dolorem"
        />

        <ButtonFilter
          menuButtons={menuButtons}
          filterType={filterType}
          active={activeFilter}
        />
        <section className="ourWorkContainer__productsOur">
          <ProductOur products={currentProducts} />
        </section>
        {/* Pagination Controls */}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
