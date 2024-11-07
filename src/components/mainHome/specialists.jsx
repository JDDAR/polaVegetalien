import "../../styles/components/specialists/_specialists.scss";
import TextInfoHome from "../textInfo/textInfoHome";
import TitleHome from "../titles/titleHome";

import chef03 from "../../assets/img/Specialist/chef03.png";

const Specialists = () => {
  return (
    <>
      <section className="">
        <div className="specialistsContainer">
          <TitleHome
            title=""
            titleText="Viens me dire que ton estomac travaille et que ton ego restaure le tien "
          />
          <section className="specialistsContainer__content-specialists">
            <div className="specialistsContainer__content-info">
              <TextInfoHome
                titleText='" Je adore le chocolat "'
                textInfoLeft="Chef Felipe"
              />
            </div>
            <div className="specialistsContainer__specialists-img">
              <span>
                <img src={chef03} alt="" />
              </span>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Specialists;
