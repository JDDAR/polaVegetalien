import "../../styles/components/footer/footer.scss";
import SocialButtons from "../buttons/social";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <h2>Le végétalien</h2>
        <div className="container">
          <div className="footerContent">
            <section className="footerContent__info">
              <p>
                {" "}
                La pastelería se especializa en ofrecer repostería francesa
                típica, adaptada al mundo vegano. El menú, que estará disponible
                en línea, incluye tartas, pasteles y otros postres elaborados
                bajo estrictos estándares de calidad y creatividad culinaria
              </p>
            </section>
            <section className="footerContent__menu"></section>
            <section className="footerContent__social">
              <SocialButtons social="social" />
            </section>
          </div>
        </div>
        <span className="footer__copy">
          &copy; 2023 - <a href="#">Contact</a>
        </span>
      </footer>
    </>
  );
};
export default Footer;
