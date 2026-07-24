import {
  User,
  Users,
  UserPlus,
  BriefcaseBusiness,
  Link2,
  Search,
  Download,
  ChevronDown,
  CalendarDays,
  Filter,
  MapPin,
  GraduationCap,
  Eye,
  BadgeCheck,
  Phone,
  Mail
} from "lucide-react";

export default function BuscadoresEmpleo() {
  const buscadores = [
    {
      id: 1,
      nombre: "Juan Pérez Gómez",
      edad: 29,
      sexo: "Masculino",
      municipio: "Tuxtla Gutiérrez",
      escolaridad: "Licenciatura",
      estatus: "Disponible",
      telefono: "9611234567",
      correo: "juan@gmail.com"
    },
    {
      id: 2,
      nombre: "Ana López Ruiz",
      edad: 24,
      sexo: "Femenino",
      municipio: "Tapachula",
      escolaridad: "Bachillerato",
      estatus: "Vinculado",
      telefono: "9621234567",
      correo: "ana@gmail.com"
    },
    {
      id: 3,
      nombre: "Carlos Méndez",
      edad: 35,
      sexo: "Masculino",
      municipio: "Comitán",
      escolaridad: "Ingeniería",
      estatus: "Colocado",
      telefono: "9635552222",
      correo: "carlos@gmail.com"
    }
  ];

  function Card({ icon: Icon, title, value, color }) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border p-5 hover:shadow-lg transition">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <h2 className="text-3xl font-bold mt-2">{value}</h2>
          </div>
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${color}`}>
            <Icon size={28} className="text-white" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-gray-500">Dashboard / Buscadores de Empleo</p>
          <h1 className="text-4xl font-bold mt-2">👥 Buscadores de Empleo</h1>
          <p className="text-gray-500 mt-2">
            Administración de personas registradas en búsqueda de empleo.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border rounded-xl px-5 py-3 flex items-center gap-2">
            <CalendarDays size={18} />
            Este Mes
            <ChevronDown size={16} />
          </button>
          <button className="bg-blue-600 text-white rounded-xl px-5 py-3 flex items-center gap-2">
            <Download size={18} />
            Exportar
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5 mb-8">
        <Card icon={Users} title="Personas Registradas" value="2,450" color="bg-blue-600" />
        <Card icon={UserPlus} title="Nuevos Registros" value="186" color="bg-green-600" />
        <Card icon={BriefcaseBusiness} title="Disponibles" value="1,832" color="bg-purple-600" />
        <Card icon={Link2} title="Vinculados" value="350" color="bg-orange-500" />
        <Card icon={BadgeCheck} title="Colocados" value="131" color="bg-emerald-600" />
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-sm border p-6 mb-8">
        <div className="grid xl:grid-cols-6 gap-4">
          <div className="xl:col-span-2">
            <label className="text-sm font-medium">Buscar Persona</label>
            <div className="relative mt-2">
              <Search size={18} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Nombre, CURP, Teléfono..."
                className="w-full border rounded-xl pl-10 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium">Municipio</label>
            <select className="w-full mt-2 border rounded-xl p-3">
              <option>Todos</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Escolaridad</label>
            <select className="w-full mt-2 border rounded-xl p-3">
              <option>Todas</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Sexo</label>
            <select className="w-full mt-2 border rounded-xl p-3">
              <option>Todos</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Estatus</label>
            <select className="w-full mt-2 border rounded-xl p-3">
              <option>Todos</option>
              <option>Disponible</option>
              <option>Vinculado</option>
              <option>Colocado</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <button className="bg-blue-50 text-blue-600 rounded-xl px-5 py-3 flex items-center gap-2">
            <Filter size={18} />
            Limpiar filtros
          </button>
        </div>
      </div>

      {/* Table - You need to add this section */}
      <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-4 text-sm font-medium text-gray-600">Nombre</th>
                <th className="text-left p-4 text-sm font-medium text-gray-600">Edad</th>
                <th className="text-left p-4 text-sm font-medium text-gray-600">Sexo</th>
                <th className="text-left p-4 text-sm font-medium text-gray-600">Municipio</th>
                <th className="text-left p-4 text-sm font-medium text-gray-600">Escolaridad</th>
                <th className="text-left p-4 text-sm font-medium text-gray-600">Estatus</th>
                <th className="text-left p-4 text-sm font-medium text-gray-600">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {buscadores.map((persona) => (
                <tr key={persona.id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-4">{persona.nombre}</td>
                  <td className="p-4">{persona.edad}</td>
                  <td className="p-4">{persona.sexo}</td>
                  <td className="p-4">{persona.municipio}</td>
                  <td className="p-4">{persona.escolaridad}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      persona.estatus === "Disponible" ? "bg-green-100 text-green-700" :
                      persona.estatus === "Vinculado" ? "bg-blue-100 text-blue-700" :
                      "bg-purple-100 text-purple-700"
                    }`}>
                      {persona.estatus}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}