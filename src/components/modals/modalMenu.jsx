import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { closeModalMenu } from "../../features/modals/modalMenuSlice";
import "../../styles/components/modals/modalMenu.scss";

const ModalMenu = () => {
  const { productsData } = useSelector((store) => store.productsData);
  const dispath = useDispatch();

  return (
    <>
      <aside
        className="modalContainer"
        onClick={() => dispath(closeModalMenu())}
      >
        <div className="modalContainer__modal">
          {/* ----------------------------- */}
          <article className="menu1 article-one">
            <div className="imgContainer">
              <div className="gradientImg"></div>
              <img
                src="https://images.pexels.com/photos/2014693/pexels-photo-2014693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="menuModalInfo">
              <h3>Macarons</h3>
              {productsData
                .filter((type) => {
                  return type.type === "macarons";
                })
                .map((type) => (
                  <ul key={type.id}>
                    <li>{type.title}</li>
                  </ul>
                ))}
            </div>
            <div className="menuHover">
              <NavLink
                to="/Vegetalien/menu/macarons"
                className="buttonMenuModal"
              >
                {" "}
                Saber mas
              </NavLink>
            </div>
          </article>

          {/* ----------------------------- */}

          <article className="menu2 article-one">
            <div className="imgContainer">
              <div className="gradientImg"></div>
              <img
                src="https://images.pexels.com/photos/3081657/pexels-photo-3081657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="menuModalInfo">
              <h3>Pettit</h3>
              {productsData
                .filter((type) => {
                  return type.type === "pettit";
                })
                .map((type) => (
                  <ul key={type.id}>
                    <li>{type.title}</li>
                  </ul>
                ))}
            </div>
            <div className="menuHover">
              <NavLink to="/Vegetalien/menu/pettit" className="buttonMenuModal">
                {" "}
                Saber mas
              </NavLink>
            </div>
          </article>

          {/* ----------------------------- */}
          <article className="menu3 article-one">
            <div className="imgContainer">
              <div className="gradientImg"></div>
              <img
                src="https://images.pexels.com/photos/8365696/pexels-photo-8365696.jpeg"
                alt=""
              />
            </div>
            <div className="menuModalInfo">
              <h3>Eclairs</h3>
              {productsData
                .filter((type) => {
                  return type.type === "eclair";
                })
                .map((type) => (
                  <ul key={type.id}>
                    <li>{type.title}</li>
                  </ul>
                ))}
            </div>
            <div className="menuHover">
              <NavLink to="/Vegetalien/menu/eclair" className="buttonMenuModal">
                {" "}
                Saber mas
              </NavLink>
            </div>
          </article>

          {/* ----------------------------- */}
          <article className="menu4 article-two">
            <div className="imgContainer">
              <div className="gradientImg"></div>
              <img
                src="https://images.pexels.com/photos/4916558/pexels-photo-4916558.jpeg"
                alt=""
              />
            </div>
            <div className="menuModalInfo">
              <h3>Boulangerie</h3>
              {productsData
                .filter((type) => {
                  return type.type === "boulangerie";
                })
                .map((type) => (
                  <ul key={type.id}>
                    <li>{type.title}</li>
                  </ul>
                ))}
            </div>
            <div className="menuHover">
              <NavLink
                to="/Vegetalien/menu/boulangerie"
                className="buttonMenuModal"
              >
                {" "}
                Saber mas
              </NavLink>
            </div>
          </article>

          {/* ----------------------------- */}
          <article className="menu5 article-two">
            <div className="imgContainer">
              <div className="gradientImg"></div>
              <img
                src="https://images.pexels.com/photos/2693448/pexels-photo-2693448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="menuModalInfo">
              <h3>Tarts</h3>
              {productsData
                .filter((type) => {
                  return type.type === "tarts";
                })
                .map((type) => (
                  <ul key={type.id}>
                    <li>{type.title}</li>
                  </ul>
                ))}
            </div>
            <div className="menuHover">
              <NavLink to="/Vegetalien/menu/tarts" className="buttonMenuModal">
                {" "}
                Saber mas
              </NavLink>
            </div>
          </article>

          {/*----------------------------------------*/}

          <article className="menu6 article-two">
            <div className="imgContainer">
              <div className="gradientImg"></div>
              <img
                src="https://images.pexels.com/photos/1190165/pexels-photo-1190165.jpeg"
                alt=""
              />
            </div>
            <div className="menuModalInfo">
              <h3>Drinks</h3>
              {productsData
                .filter((type) => {
                  return type.type === "drinks";
                })
                .map((type) => (
                  <ul key={type.id}>
                    <li>{type.title}</li>
                  </ul>
                ))}
            </div>
            <div className="menuHover">
              <NavLink to="/Vegetalien/menu/drinks" className="buttonMenuModal">
                {" "}
                Saber mas
              </NavLink>
            </div>
          </article>

          {/*.-----------------------------------------------*/}
          <article className="menu7 article-two">
            <div className="imgContainer">
              <div className="gradientImg"></div>
              <img
                src="https://images.pexels.com/photos/827516/pexels-photo-827516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="menuModalInfo">
              <h3>Cakes</h3>
              {productsData
                .filter((type) => {
                  return type.type === "cakes";
                })
                .map((type) => (
                  <ul key={type.id}>
                    <li>{type.title}</li>
                  </ul>
                ))}
            </div>
            <div className="menuHover">
              <NavLink to="/Vegetalien/menu/cakes" className="buttonMenuModal">
                {" "}
                Saber mas
              </NavLink>
            </div>
          </article>
        </div>
      </aside>
    </>
  );
};
export default ModalMenu;
