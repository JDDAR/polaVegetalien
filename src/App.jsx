import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import MainHome from "./components/mainHome";
import MenuSpecific from "./components/menuSpecific/menuSpecific";
import ModalMenu from "./components/modals/modalMenu";
import NoMath from "./components/noMatches/NoMatch";

function App() {
  const { isOpen } = useSelector((store) => store.modalMenu);
  return (
    <>
      {isOpen && <ModalMenu />}
      <Routes>
        <Route>
          <Route path="/" element={<MainHome />} />
          <Route
            path="/vegetalien/menu/:menuSpecific"
            element={<MenuSpecific />}
          />
          <Route path="*" element={<NoMath />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
