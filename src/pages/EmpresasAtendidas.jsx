import {
  Building2,
  BriefcaseBusiness,
  Users,
  CircleDollarSign,
  CalendarDays,
  ArrowLeft,
  Search,
  SlidersHorizontal,
  Eye,
  Download,
  ChevronDown,
} from "lucide-react";


// ==========================================
// DATOS TEMPORALES
// ==========================================

const empresas = [
  {
    iniciales: "GG",
    nombre: "Gas Galgo, S.A. de C.V.",
    municipio: "Huehuetán",
    vacantes: 18,
    colocaciones: 14,
    contacto: "9621399527",
    correo: "cecilia.gordillo@gasgalgo.com.mx",
    consejero: "BEATRIZ M. MENDEZ G.",
    estatus: "Activa",
  },
  {
    iniciales: "OX",
    nombre: "Cadena Comercial OXXO S.A. de C.V.",
    municipio: "Tapachula",
    vacantes: 35,
    colocaciones: 27,
    contacto: "9621555428",
    correo: "monica.davila@oxxo.com",
    consejero: "MANUEL A. RAMOS Z.",
    estatus: "Activa",
  },
  {
    iniciales: "GY",
    nombre: "Gasolinera Yaxchilán (SCLC)",
    municipio: "San Cristóbal de Las Casas",
    vacantes: 10,
    colocaciones: 8,
    contacto: "9611122586",
    correo: "rhfacturas2024@gmail.com",
    consejero: "NEISY G. AGUILAR M.",
    estatus: "Activa",
  },
  {
    iniciales: "OT",
    nombre: "Otros Empleadores",
    municipio: "Tuxtla Gutiérrez",
    vacantes: 123,
    colocaciones: 148,
    contacto: "0000000000",
    correo: "contacto@empresa.com",
    consejero: "VARIOS",
    estatus: "Activa",
  },
];


// ==========================================
// COMPONENTE TARJETA
// ==========================================

function StatCard({
  icon: Icon,
  title,
  value,
  iconBg,
  iconColor,
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">

      <div className="flex items-center gap-4">

        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg}`}
        >
          <Icon
            size={24}
            className={iconColor}
          />
        </div>

        <div>

          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mt-1">
            {value}
          </h3>

        </div>

      </div>

    </div>
  );
}


// ==========================================
// PÁGINA
// ==========================================

export default function EmpresasAtendidas() {

  return (

    <div className="min-h-screen bg-gray-50 p-6 md:p-8">

      {/* ================================= */}
      {/* ENCABEZADO */}
      {/* ================================= */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

        <div>

          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">

            <button className="hover:text-blue-600">
              <ArrowLeft size={20} />
            </button>

            <span>
              Dashboard
            </span>

            <span>
              /
            </span>

            <span className="font-semibold text-slate-800">
              Empresas Atendidas
            </span>

          </div>


          <div className="flex items-center gap-4">

            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center">

              <Building2
                size={28}
                className="text-blue-600"
              />

            </div>


            <div>

              <h1 className="text-3xl font-bold text-slate-800">
                Empresas Atendidas
              </h1>

              <p className="text-gray-500 mt-1">
                Consulta el detalle de las empresas que han sido atendidas.
              </p>

            </div>

          </div>

        </div>


        <div className="flex gap-3">

          <button className="bg-white border rounded-xl px-5 py-3 flex items-center gap-2">

            <CalendarDays size={18} />

            Este Mes

            <ChevronDown size={16} />

          </button>


          <button className="bg-blue-600 text-white rounded-xl px-5 py-3 flex items-center gap-2 hover:bg-blue-700">

            <Download size={18} />

            Exportar

            <ChevronDown size={16} />

          </button>

        </div>

      </div>



      {/* ================================= */}
      {/* TARJETAS */}
      {/* ================================= */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5 mb-6">


        <StatCard
          icon={Building2}
          title="Total Empresas"
          value="4"
          iconBg="bg-blue-50"
          iconColor="text-blue-600"
        />


        <StatCard
          icon={BriefcaseBusiness}
          title="Vacantes Publicadas"
          value="186"
          iconBg="bg-emerald-50"
          iconColor="text-emerald-500"
        />


        <StatCard
          icon={Users}
          title="Colocaciones"
          value="197"
          iconBg="bg-purple-50"
          iconColor="text-purple-600"
        />


        <StatCard
          icon={CircleDollarSign}
          title="Salario Promedio"
          value="$9,450"
          iconBg="bg-yellow-50"
          iconColor="text-yellow-500"
        />


        <StatCard
          icon={CalendarDays}
          title="Primer Contacto"
          value="06/01/2026"
          iconBg="bg-red-50"
          iconColor="text-red-500"
        />

      </div>



      {/* ================================= */}
      {/* FILTROS */}
      {/* ================================= */}

      <div className="bg-white border border-gray-100 rounded-2xl p-5 mb-6 shadow-sm">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4">


          <div className="xl:col-span-2">

            <label className="text-sm font-medium text-gray-700">
              Buscar empresa
            </label>

            <div className="relative mt-2">

              <Search
                size={18}
                className="absolute left-3 top-3 text-gray-400"
              />

              <input
                type="text"
                placeholder="Escribe el nombre de la empresa"
                className="w-full border rounded-xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

          </div>


          <div>

            <label className="text-sm font-medium">
              Municipio
            </label>

            <select className="w-full mt-2 border rounded-xl px-4 py-3">
              <option>Todos</option>
              <option>Tuxtla Gutiérrez</option>
              <option>Tapachula</option>
              <option>Huehuetán</option>
            </select>

          </div>


          <div>

            <label className="text-sm font-medium">
              Unidad
            </label>

            <select className="w-full mt-2 border rounded-xl px-4 py-3">
              <option>Todas</option>
            </select>

          </div>


          <div>

            <label className="text-sm font-medium">
              Consejero
            </label>

            <select className="w-full mt-2 border rounded-xl px-4 py-3">
              <option>Todos</option>
            </select>

          </div>


          <div>

            <label className="text-sm font-medium">
              Estatus
            </label>

            <select className="w-full mt-2 border rounded-xl px-4 py-3">
              <option>Todos</option>
              <option>Activa</option>
              <option>Inactiva</option>
            </select>

          </div>

        </div>


        <div className="flex justify-end mt-4">

          <button className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-xl">

            <SlidersHorizontal size={17} />

            Limpiar filtros

          </button>

        </div>

      </div>



      {/* ================================= */}
      {/* TABLA */}
      {/* ================================= */}

      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden mb-6">

        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-gray-50 border-b">

              <tr>

                <th className="text-left px-5 py-4">
                  Empresa
                </th>

                <th className="text-left px-5 py-4">
                  Municipio
                </th>

                <th className="text-center px-5 py-4">
                  Vacantes
                </th>

                <th className="text-center px-5 py-4">
                  Colocaciones
                </th>

                <th className="text-left px-5 py-4">
                  Contacto
                </th>

                <th className="text-left px-5 py-4">
                  Correo
                </th>

                <th className="text-left px-5 py-4">
                  Consejero
                </th>

                <th className="text-center px-5 py-4">
                  Estatus
                </th>

                <th className="text-center px-5 py-4">
                  Acciones
                </th>

              </tr>

            </thead>


            <tbody>

              {empresas.map((empresa, index) => (

                <tr
                  key={index}
                  className="border-b last:border-0 hover:bg-gray-50"
                >

                  <td className="px-5 py-4">

                    <div className="flex items-center gap-3">

                      <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-semibold">

                        {empresa.iniciales}

                      </div>

                      <span className="font-semibold text-slate-700">
                        {empresa.nombre}
                      </span>

                    </div>

                  </td>


                  <td className="px-5 py-4">
                    {empresa.municipio}
                  </td>


                  <td className="px-5 py-4 text-center font-bold text-blue-600">
                    {empresa.vacantes}
                  </td>


                  <td className="px-5 py-4 text-center font-bold text-emerald-600">
                    {empresa.colocaciones}
                  </td>


                  <td className="px-5 py-4">
                    {empresa.contacto}
                  </td>


                  <td className="px-5 py-4">
                    {empresa.correo}
                  </td>


                  <td className="px-5 py-4">
                    {empresa.consejero}
                  </td>


                  <td className="px-5 py-4 text-center">

                    <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {empresa.estatus}
                    </span>

                  </td>


                  <td className="px-5 py-4 text-center">

                    <button className="w-9 h-9 rounded-xl border flex items-center justify-center hover:bg-blue-50">

                      <Eye
                        size={18}
                        className="text-blue-600"
                      />

                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>



      {/* ================================= */}
      {/* GRÁFICAS VISUALES */}
      {/* ================================= */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">


        <div className="bg-white border rounded-2xl p-6 shadow-sm">

          <h3 className="font-bold text-slate-800 mb-6">
            Empresas con más colocaciones
          </h3>

          <div className="space-y-5">

            {[
              ["Otros Empleadores", 148],
              ["Cadena Comercial OXXO", 27],
              ["Gas Galgo", 14],
              ["Gasolinera Yaxchilán", 8],
            ].map(([nombre, valor]) => (

              <div key={nombre}>

                <div className="flex justify-between text-sm mb-2">

                  <span>
                    {nombre}
                  </span>

                  <strong>
                    {valor}
                  </strong>

                </div>

                <div className="h-3 bg-gray-100 rounded-full">

                  <div
                    className="h-3 bg-purple-500 rounded-full"
                    style={{
                      width: `${(valor / 148) * 100}%`
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>



        <div className="bg-white border rounded-2xl p-6 shadow-sm">

          <h3 className="font-bold text-slate-800 mb-6">
            Vacantes por empresa
          </h3>

          <div className="space-y-5">

            {[
              ["Otros Empleadores", 123],
              ["Cadena Comercial OXXO", 35],
              ["Gas Galgo", 18],
              ["Gasolinera Yaxchilán", 10],
            ].map(([nombre, valor]) => (

              <div key={nombre}>

                <div className="flex justify-between text-sm mb-2">

                  <span>
                    {nombre}
                  </span>

                  <strong>
                    {valor}
                  </strong>

                </div>

                <div className="h-3 bg-gray-100 rounded-full">

                  <div
                    className="h-3 bg-emerald-500 rounded-full"
                    style={{
                      width: `${(valor / 123) * 100}%`
                    }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>



        <div className="bg-white border rounded-2xl p-6 shadow-sm">

          <h3 className="font-bold text-slate-800 mb-6">
            Empresas por municipio
          </h3>

          <div className="flex flex-col items-center justify-center h-56">

            <div className="w-36 h-36 rounded-full border-[28px] border-purple-500 relative">

              <div className="absolute inset-[-28px] rounded-full border-[28px] border-emerald-400 border-l-transparent border-b-transparent" />

            </div>

            <div className="flex gap-4 mt-5 text-sm">

              <span>
                🟣 Tapachula 2
              </span>

              <span>
                🟢 Huehuetán 1
              </span>

            </div>

          </div>

        </div>


      </div>


    </div>

  );

}