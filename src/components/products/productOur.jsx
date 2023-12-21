import '../../styles/components/products/productsOur.scss'

const ProductOur = ({type}) => {
  
  return(
    <>
    { 
      type.map((product) => (  
      <section key={product.id} className="productContainer">
          <div className="productContainer__product-img">
                <img src={product.img} alt=""/>
          </div>
        <div className="productContainer__product-info">
          <h2>{product.title}</h2>
          <span>{product.type}</span>
          <section className="productContainer__product-price">
              <span>{product.price}</span>
              <span><a href="">Know more</a></span>
          </section>
        </div>
      </section>
      ))
     }

    </>

  )

}

export default ProductOur
