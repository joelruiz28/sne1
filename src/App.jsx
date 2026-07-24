import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import EmpresasAtendidas from "./pages/EmpresasAtendidas";
import OfertasActivas from "./pages/OfertasActivas";
import BuscadoresEmpleo from "./pages/BuscadoresEmpleo";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1">
        <Header />

        <div className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/empresas" element={<EmpresasAtendidas />} />
            <Route path="/ofertas" element={<OfertasActivas />} />
            <Route path="/buscadores" element={<BuscadoresEmpleo />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;