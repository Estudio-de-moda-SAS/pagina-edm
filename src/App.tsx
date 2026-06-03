import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Inicio from "./pages/Inicio";
import NuestrasMarcas from "./pages/NuestrasMarcas";
import LineaEtica from "./pages/LineaEtica";
import NotificacionesJudiciales from "./pages/NotificacionesJudiciales";
import PoliticaCookies from "./pages/PoliticaCookies";
import NuestraCultura from "./pages/NuestraCultura";
import ProteccionDenunciante from "./pages/ProteccionDenunciante";
import Comunicate from "./pages/Comunicate";
import FormularioEtica from "./pages/FormularioEtica";
/*Marcas*/
import Diesel from "./pages/Diesel"; 
import Girbaud from "./pages/Girbaud";
import Superdry from "./pages/Superdry";  
import Kipling from "./pages/Kipling";  
import NewBalance from "./pages/New-balance";  
import Pilatos from "./pages/Pilatos";  
import Replay from "./pages/Replay"; 
import Footer from "./components/footer/Footer";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Login from "./components/auth/Login";
import Auditoria from "./components/auditoria/Auditoria";
import AuthPopup from "./pages/AuthPopup";

function AppRoutes() {
  useLocation();
  const isPopupWindow = typeof window !== "undefined" && !!window.opener;

  if (isPopupWindow) {
    return <AuthPopup />;
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nuestras-marcas" element={<NuestrasMarcas />} />
        <Route path="/linea-etica" element={<LineaEtica />} />
        <Route path="/notificaciones-judiciales" element={<NotificacionesJudiciales />} />
        <Route path="/nuestra-cultura" element={<NuestraCultura />} />
        <Route path="/politica-cookies" element={<PoliticaCookies />} />
        <Route path="/comunicate" element={<Comunicate />} />
        <Route path="/proteccion-denunciante" element={<ProteccionDenunciante />} />
         <Route path="/diesel" element={<Diesel/>} />
           <Route path="/girbaud" element={<Girbaud/>} />
           <Route path="/superdry" element={<Superdry/>} />
           <Route path="/kipling" element={<Kipling/>} />
        <Route path="/New-balance" element={<NewBalance/>} />
        <Route path="/pilatos" element={<Pilatos/>} />
        <Route path="/replay" element={<Replay/>} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/auditoria" element={<Auditoria />} />
        </Route>
        <Route path="/formulario-etica" element={<FormularioEtica />} />
      </Routes>

      <Footer/>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
