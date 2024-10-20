import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavHeader from "../mainHome/navHeader";

import "../../styles/components/menuSpecific/menuSpecific.scss";
import ButtonModal from "../modals/buttonModal";
import ProductMenu from "../products/productsMenu";
import Footer from "../mainHome/footer";
import SocialButtons from "../buttons/social";

const MenuSpecific = () => {
  const { menuSpecificData } = useSelector((store) => store.menuSpecificData);

  const params = useParams();
  const typeMenu = params.menuSpecific;

  return (
    <>
      <SocialButtons social="socialHeader" />
      <ButtonModal />
      <NavHeader />
      <section className="menuSpecificContainer">
        {menuSpecificData
          .filter((type) => {
            return type.type === typeMenu;
          })
          .map((info) => (
            <div className="menuSpecific-bg" key={info.id}>
              <span className="gradientImg"></span>
              <img src={info.img_URL} alt="" />
            </div>
          ))}
        <div className="container menuSpecific ">
          {menuSpecificData
            .filter((type) => {
              return type.type === typeMenu;
            })
            .map((info) => (
              <header className="menuSpecific__header" key={info.id}>
                <h2>{params.menuSpecific}</h2>
                <p>{info.description}</p>
              </header>
            ))}

          <section className="menuSpecific__products-container">
            <ProductMenu typeMenu={typeMenu} />
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MenuSpecific;
