import {useSelector} from "react-redux"
import {Routes, Route} from "react-router-dom";

import MainHome from "./components/mainHome"
import MenuSpecific from "./components/menuSpecific/menuSpecific";
import ModalMenu from "./components/modals/modalMenu"


function App() {
  const {isOpen} = useSelector((store) => store.modalMenu);
  return (
    <>
      {isOpen && <ModalMenu />}
      <Routes>
        <Route>
          <Route path="/" element = { <MainHome /> } />
          <Route path="menu/:menuSpecific" element={ <MenuSpecific />} />
        </Route>
    </Routes>
    </>
  )
}
export default App
