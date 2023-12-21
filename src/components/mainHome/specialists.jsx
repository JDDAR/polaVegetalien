import '../../styles/components/specialists/_specialists.scss'
import TextInfoHome from '../textInfo/textInfoHome'
import TitleHome from '../titles/titleHome'



const Specialists = () => {
  return ( 
    <>
    <section className="container">
    <div className="specialistsContainer">
        <TitleHome 
            title="Art Specialists"
            titleText="eque porro quisquam est qui dolorem"
          />
    <section className="specialistsContainer__content-specialists">

        <div className="specialistsContainer__content-info">
            <TextInfoHome 
                titleText = 'Nombre del chef '
                textInfoLeft='Lorem Ipsum es simplemente el texto de relleno de
                        las imprentas y archivos de texto. Lorem Ipsum ha 
                        sido el texto de relleno estándar de las industrias
                        desde el año 1500, cuando un impresor (N. del T. 
                        persona que se dedica a la imprenta) desconocido 
                        usó una galería de textos y los mezcló de tal '
                
                src='#'
                button='Contactar'
              />
        </div>
        <div className="specialistsContainer__specialists-img">
          <span>
            <img src="https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg" alt=""/>
          </span>
        </div>
    </section>
    </div>
    </section>
    </>
  )
}

export default Specialists
