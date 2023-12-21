import '../../styles/components/footer/footer.scss';
import SocialButtons from '../buttons/social';

const Footer = () => {
  return(
    <> 
    <footer className="footer">
      <h2>LEVEGETALIEN</h2>
      <div className="container">
        <div className="footerContent">
          <section className="footerContent__info">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum commodi dolores qui praesentium esse aperiam debitis facere enim eaque. Fugit eveniet quibusdam, laboriosam suscipit nisi ipsa quia amet ullam iure? </p>
          </section>
          <section className="footerContent__menu"></section>
          <section className="footerContent__social">
            <SocialButtons social="social" />
          </section>
        </div>
      </div>
      <span className='footer__copy'>&copy; 2023 - <a href="#">Contact</a></span>
    </footer>
    </>
  )
}
export default Footer
