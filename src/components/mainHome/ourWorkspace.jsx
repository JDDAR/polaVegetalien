import {useSelector} from 'react-redux'
import '../../styles/components/ourWorkspace/_ourWorkspace.scss'
import TextInfoHome from '../textInfo/textInfoHome';
import TitleHome from '../titles/titleHome'




const OurWorkspace = () => {

  const { ourWorkSpaceData } = useSelector((store) => store.ourWorkSpaceData);


  return ( 
    <>
    <section className="container">
    <div className="ourWorkSpaceContainer"> 
    <div className="">
       <TitleHome 
          title="OurWorkspace"
          titleText="eque porro quisquam est qui dolorem"
        />
    </div>
      
    { 
      ourWorkSpaceData.map((info) => (  
    <section key={info.id} className="ourWorkSpaceContainer__container-info">

        <div className="ourWorkSpaceContainer__img-our">
          <div className="img_0102">
                <span className='img1'><img src={info.imgURL_1} alt=""/></span>
                <span className='img2'><img src= {info.imgURL_2} alt=""/></span>
          </div>  
          <div className="img_03">   
              <span className='img3'><img src={info.imgURL_3} alt=""/></span>
          </div>
        </div>
        <div className="ourWorkSpaceContainer__info-our">
          <section className="infoText"> 
           <TextInfoHome 
              titleText='Este es el titlulo'
              textInfoLeft='Lorem Ipsum es simplemente el texto de relleno de
                        las imprentas y archivos de texto. Lorem Ipsum ha 
                        sido el texto de relleno estándar de las industrias
                        desde el año 1500, cuando un impresor (N. del T. 
                        persona que se dedica a la imprenta) desconocido 
                        usó una galería de textos y los mezcló de tal '
              src='#'
              button='Ubication'
            /> 
          </section>
        </div>


    </section>
      ))
     }
    </div>
    </section>
    </>
  )
}

export default OurWorkspace
