import AdminProductsList from '../../components/admin/AdminProductsList';
import CategoryButtons from '../../components/admin/CategoryButtons';
import HeaderPos from '../../components/headerPos/HeaderPos';
import Footer from '../../components/mainHome/footer';
import './adminMenuPage.scss';

const AdminMenuPage = () => {   

  return ( 
    <>
      <HeaderPos />
      <section className="containerAdminMenu">
        <div className="containerAdminMenu-title" >
          <h1>GESTIÓN DEL MENÚ</h1>
        </div>
        <div className="containerAdminMenu-categorias">
          <CategoryButtons />
        </div>  
        <div className="containerAdminMenu-productos">
          <AdminProductsList />
        </div>
      </section>
      <Footer />
    </>
  )

}

export default AdminMenuPage;
