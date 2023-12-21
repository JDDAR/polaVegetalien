import Home from "./mainHome/home"
import ButtonModal from "./modals/buttonModal"
import NavHeader from "./mainHome/navHeader"
import OurWorkspace from "./mainHome/ourWorkspace"
import Specialists from "./mainHome/specialists"
import OurWork from "./mainHome/ourWork"
import Footer from "./mainHome/footer"
import SocialButtons from "./buttons/social"

const MainHome = () => {
  return (
     <>
      <SocialButtons social="socialHeader" />
      <ButtonModal />
      <NavHeader /> 
      <Home />
      <OurWorkspace />
      <Specialists /> 
      <OurWork />
      <Footer />
      
    </>
  )
}

export default MainHome 
