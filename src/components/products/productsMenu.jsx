import {useSelector} from "react-redux"

import '../../styles/components/products/productsMenu.scss'

const ProductMenu = (props) => {
  const { productsData } = useSelector((store)=>store.productsData)
  
  const typeMenu = props.typeMenu

  return(
  <>
    {
    productsData.filter((type) => {
      return type.type ===  typeMenu
    }).map((info) => ( 
    <section className="productMenu" key={info.id}>
      <div className="productMenu__img">
        <img src={info.img} alt=""/>  
      </div>
        <div className="productMenu__info">
            <h3>{info.title}</h3>
            <span>{info.type}</span>
            <p>{info.description}</p>
        </div>
        <div className="productMenu__button">
          <span>Contactar</span>
          <span className="productMenu__button__price">$ {info.price}</span>
        </div>
    </section>
    ))
    }
  </>
  )
}

export default ProductMenu
