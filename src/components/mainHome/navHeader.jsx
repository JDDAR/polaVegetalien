import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import '../../styles/components/navHeader/_navHeader.scss';


const NavHeader = () => {

      const [isOpen, setIsOpen] = useState(false)

  window.addEventListener("scroll", function(){
    const header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 0);
    header.classList.toggle("sticky__logo", window.scrollY > 0);
    header.classList.toggle("sticky__nav", window.scrollY > 0)
  })

return ( 
  <>
    <section > 
      <header className='container navContainer'>
        <div className="stickyHeader">
          <section className="stickyHeader__logo">
            <hr/>
              <h2>LeVegetalien</h2>
             <hr/> 
          </section>
          <nav className={`stickyHeader__nav ${isOpen && "open"}`}> 
            <NavLink  className='stickyHeader__link' to="/" >Inicio</NavLink>
            <NavLink  className='stickyHeader__link'  to="/menu/macarons" >Macarons</NavLink>
            <NavLink  className='stickyHeader__link' to="/menu/tarts" >Tarts</NavLink>
            <NavLink  className='stickyHeader__link' to="/menu/drinks" >Drinks</NavLink>
            <NavLink  className='stickyHeader__link' to="/menu/boulangerie" >Boulangerie</NavLink>
            <NavLink  className='stickyHeader__link' to="/menu/pettit" >Pettit</NavLink>
            <NavLink  className='stickyHeader__link' to="/menu/eclair" >Eclair</NavLink>
            <NavLink  className='stickyHeader__link' to="/menu/cakes" >Cackes</NavLink>
          </nav>
          <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
          </div>

        </div>
      </header>
    </section>
    </>
  )
}
export default NavHeader
