import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import MainHome from "./components/mainHome";
import MenuSpecific from "./components/menuSpecific/menuSpecific";
import ModalMenu from "./components/modals/modalMenu";
import NoMath from "./components/noMatches/NoMatch";
import { LoginPage } from "./components/login/LoginPages";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminPage from "./pages/admin/AdminPage";
import AdminMenuPage from "./pages/admin/AdminMenuPage";
import GenericModal from "./components/modals/GenericModal";

function App() {
  const { isOpen } = useSelector((store) => store.modalMenu);
  return (
    <>
      {isOpen && <ModalMenu />}
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/vegetalien/menu/:menuSpecific" element={<MenuSpecific />} />
        <Route path="/login" element={<LoginPage /> } />

        {/* RUTAS PROTEGIDAS */}
        <Route element={<ProtectedRoute/>}>
          {/* Si el usuario no está registrado se redirige a login */}
          <Route path="/admin" element={ <AdminPage />} />
          <Route path="/admin/menu" element={<AdminMenuPage />} />
        </Route>
        <Route path="*" element={<NoMath />} />

      </Routes>
      <GenericModal />
    </>
  );
}
export default App;
