import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DetalleAlmacen from "./Detalles";
import Edit from "./Login/Edit";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Main from "./Main";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detalles/:id" element={<DetalleAlmacen />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
