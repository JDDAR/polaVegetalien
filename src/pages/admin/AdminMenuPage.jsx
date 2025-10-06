import HeaderPos from '../../components/headerPos/HeaderPos';
import Footer from '../../components/mainHome/footer';
import './adminMenuPage.scss';

const AdminMenuPage = () => {   

  return ( 
    <>
      <HeaderPos />
      <section className="containerAdminMenu">
        <div className="containerAdminMenu-title" >
          <h1>Gestión del menú </h1>
        </div>
        <div className="containerAdminMenu-categorias">
          <h2>Categorias</h2> 
        </div>  
        <div className="containerAdminMenu-productos">

        </div>
      </section>
      <Footer />
    </>
  )

}

export default AdminMenuPage;
