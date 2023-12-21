import { useDispatch } from "react-redux";
import { openModalMenu } from "../../features/modals/modalMenuSlice";

import '../../styles/components/modals/buttonModal.scss'


const ButtonModal = () => {

  const dispath = useDispatch();

  return(
  <>
    <div className="container">
    <section className="buttonModal">  
      <button className='menuModal' onClick={() => dispath(openModalMenu())} >Menu</button> 
    </section>
    </div>
  </>
  )

}
export default ButtonModal
