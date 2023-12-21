import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";


import "../../styles/components/buttons/social.scss"

const SocialButtons = (props) => {


  return(
  <>

    <section className={props.social}>
      <a href="#"><RiFacebookFill className="socialIcon"  /></a> 
      <a href="#"><RiInstagramFill className="socialIcon" /></a>
      <a href="#"><RiWhatsappFill className="socialIcon" /></a>
      <a href="#"><RiTwitterFill className="socialIcon" /></a>
    </section>
  </>
  )
}

export default SocialButtons
