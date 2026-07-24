import {
  BriefcaseBusiness,
  Building2,
  Users,
  MapPin,
  CircleDollarSign,
  ArrowLeft,
  Search,
  SlidersHorizontal,
  Eye,
  Download,
  ChevronDown,
  GraduationCap,
  Car,
} from "lucide-react";


// ==========================================
// DATOS TEMPORALES
// ==========================================

const ofertas = [
  {
    iniciales: "EA",
    puesto: "Auxiliar Administrativo",
    empresa: "Empresa ABC, S.A. de C.V.",
    municipio: "Tuxtla Gutiérrez",
    categoria: "Administrativo",
    escolaridad: "Bachillerato",
    vacantes: 12,
    salario: "$9,000",
    licencia: "No",
    estatus: "Activa",
  },
  {
    iniciales: "OX",
    puesto: "Vendedor de Piso",
    empresa: "Cadena Comercial OXXO",
    municipio: "Tapachula",
    categoria: "Comercio",
    escolaridad: "Secundaria",
    vacantes: 20,
    salario: "$8,500",
    licencia: "No",
    estatus: "Activa",
  },
  {
    iniciales: "GG",
    puesto: "Repartidor",
    empresa: "Gas Galgo, S.A. de C.V.",
    municipio: "Huehuetán",
    categoria: "Operativo",
    escolaridad: "Secundaria",
    vacantes: 8,
    salario: "$10,500",
    licencia: "Sí",
    estatus: "Activa",
  },
  {
    iniciales: "GY",
    puesto: "Auxiliar de Estación",
    empresa: "Gasolinera Yaxchilán",
    municipio: "San Cristóbal de Las Casas",
    categoria: "Servicios",
    escolaridad: "Bachillerato",
    vacantes: 10,
    salario: "$9,200",
    licencia: "No",
    estatus: "Activa",
  },
];


// ==========================================
// TARJETA DE RESUMEN
// ==========================================

function StatCard({
  icon: Icon,
  title,
  value,
  iconBg,
  iconColor,
}) {

  return (

    <div className="
      bg-white
      border
      border-gray-100
      rounded-2xl
      p-5
      shadow-sm
    ">

      <div className="flex items-center gap-4">

        <div
          className={`
            w-12
            h-12
            rounded-xl
            flex
            items-center
            justify-center
            ${iconBg}
          `}
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

          <h3 className="
            text-2xl
            font-bold
            text-slate-800
            mt-1
          ">
            {value}
          </h3>

        </div>

      </div>

    </div>

  );

}


// ==========================================
// PÁGINA OFERTAS ACTIVAS
// ==========================================

export default function OfertasActivas() {

  return (

    <div className="
      min-h-screen
      bg-gray-50
      p-6
      md:p-8
    ">


      {/* ================================= */}
      {/* ENCABEZADO */}
      {/* ================================= */}

      <div className="
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between
        gap-5
        mb-8
      ">


        <div>

          <div className="
            flex
            items-center
            gap-2
            text-sm
            text-gray-500
            mb-4
          ">

            <button className="
              hover:text-blue-600
            ">
              <ArrowLeft size={20} />
            </button>

            <span>
              Dashboard
            </span>

            <span>
              /
            </span>

            <span className="
              font-semibold
              text-slate-800
            ">
              Ofertas Activas
            </span>

          </div>



          <div className="
            flex
            items-center
            gap-4
          ">


            <div className="
              w-14
              h-14
              bg-blue-50
              rounded-full
              flex
              items-center
              justify-center
            ">

              <BriefcaseBusiness
                size={28}
                className="text-blue-600"
              />

            </div>



            <div>

              <h1 className="
                text-3xl
                font-bold
                text-slate-800
              ">
                Ofertas Activas
              </h1>

              <p className="
                text-gray-500
                mt-1
              ">
                Consulta el detalle de las ofertas laborales actualmente disponibles.
              </p>

            </div>

          </div>

        </div>



        <div className="
          flex
          gap-3
        ">


          <button className="
            bg-white
            border
            rounded-xl
            px-5
            py-3
            flex
            items-center
            gap-2
          ">

            <BriefcaseBusiness size={18} />

            Ofertas activas

            <ChevronDown size={16} />

          </button>



          <button className="
            bg-blue-600
            text-white
            rounded-xl
            px-5
            py-3
            flex
            items-center
            gap-2
            hover:bg-blue-700
          ">

            <Download size={18} />

            Exportar

            <ChevronDown size={16} />

          </button>


        </div>


      </div>



      {/* ================================= */}
      {/* TARJETAS RESUMEN */}
      {/* ================================= */}

      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-5
        gap-5
        mb-6
      ">


        <StatCard
          icon={BriefcaseBusiness}
          title="Total Ofertas"
          value="540"
          iconBg="bg-blue-50"
          iconColor="text-blue-600"
        />


        <StatCard
          icon={Users}
          title="Vacantes Disponibles"
          value="780"
          iconBg="bg-emerald-50"
          iconColor="text-emerald-500"
        />


        <StatCard
          icon={Building2}
          title="Empresas Participantes"
          value="250"
          iconBg="bg-purple-50"
          iconColor="text-purple-600"
        />


        <StatCard
          icon={MapPin}
          title="Municipios"
          value="15"
          iconBg="bg-orange-50"
          iconColor="text-orange-500"
        />


        <StatCard
          icon={CircleDollarSign}
          title="Salario Promedio"
          value="$9,450"
          iconBg="bg-yellow-50"
          iconColor="text-yellow-500"
        />


      </div>



      {/* ================================= */}
      {/* FILTROS */}
      {/* ================================= */}

      <div className="
        bg-white
        border
        border-gray-100
        rounded-2xl
        p-5
        mb-6
        shadow-sm
      ">


        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-6
          gap-4
        ">


          {/* BUSCAR */}

          <div className="xl:col-span-2">

            <label className="
              text-sm
              font-medium
              text-gray-700
            ">
              Buscar oferta
            </label>


            <div className="
              relative
              mt-2
            ">


              <Search
                size={18}
                className="
                  absolute
                  left-3
                  top-3
                  text-gray-400
                "
              />


              <input
                type="text"
                placeholder="Buscar por puesto o empresa"
                className="
                  w-full
                  border
                  rounded-xl
                  pl-10
                  pr-4
                  py-3
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              />


            </div>

          </div>



          {/* MUNICIPIO */}

          <div>

            <label className="text-sm font-medium">
              Municipio
            </label>

            <select className="
              w-full
              mt-2
              border
              rounded-xl
              px-4
              py-3
            ">

              <option>Todos</option>
              <option>Tuxtla Gutiérrez</option>
              <option>Tapachula</option>
              <option>Huehuetán</option>
              <option>San Cristóbal de Las Casas</option>

            </select>

          </div>



          {/* CATEGORIA */}

          <div>

            <label className="text-sm font-medium">
              Categoría
            </label>

            <select className="
              w-full
              mt-2
              border
              rounded-xl
              px-4
              py-3
            ">

              <option>Todas</option>
              <option>Administrativo</option>
              <option>Comercio</option>
              <option>Operativo</option>
              <option>Servicios</option>

            </select>

          </div>



          {/* ESCOLARIDAD */}

          <div>

            <label className="text-sm font-medium">
              Escolaridad
            </label>

            <select className="
              w-full
              mt-2
              border
              rounded-xl
              px-4
              py-3
            ">

              <option>Todas</option>
              <option>Primaria</option>
              <option>Secundaria</option>
              <option>Bachillerato</option>
              <option>Licenciatura</option>

            </select>

          </div>



          {/* LICENCIA */}

          <div>

            <label className="text-sm font-medium">
              Licencia
            </label>

            <select className="
              w-full
              mt-2
              border
              rounded-xl
              px-4
              py-3
            ">

              <option>Todos</option>
              <option>Requerida</option>
              <option>No requerida</option>

            </select>

          </div>


        </div>



        <div className="
          flex
          justify-end
          mt-4
        ">


          <button className="
            flex
            items-center
            gap-2
            bg-blue-50
            text-blue-600
            px-4
            py-2
            rounded-xl
          ">

            <SlidersHorizontal size={17} />

            Limpiar filtros

          </button>


        </div>


      </div>



      {/* ================================= */}
      {/* TABLA DE OFERTAS */}
      {/* ================================= */}

      <div className="
        bg-white
        border
        border-gray-100
        rounded-2xl
        shadow-sm
        overflow-hidden
        mb-6
      ">


        <div className="overflow-x-auto">


          <table className="
            w-full
            text-sm
          ">


            <thead className="
              bg-gray-50
              border-b
            ">


              <tr>

                <th className="text-left px-5 py-4">
                  Puesto
                </th>

                <th className="text-left px-5 py-4">
                  Empresa
                </th>

                <th className="text-left px-5 py-4">
                  Municipio
                </th>

                <th className="text-left px-5 py-4">
                  Categoría
                </th>

                <th className="text-left px-5 py-4">
                  Escolaridad
                </th>

                <th className="text-center px-5 py-4">
                  Vacantes
                </th>

                <th className="text-center px-5 py-4">
                  Salario
                </th>

                <th className="text-center px-5 py-4">
                  Licencia
                </th>

                <th className="text-center px-5 py-4">
                  Estatus
                </th>

                <th className="text-center px-5 py-4">
                  Acción
                </th>

              </tr>


            </thead>



            <tbody>


              {ofertas.map((oferta, index) => (

                <tr
                  key={index}
                  className="
                    border-b
                    last:border-0
                    hover:bg-gray-50
                  "
                >


                  {/* PUESTO */}

                  <td className="px-5 py-4">

                    <div className="
                      flex
                      items-center
                      gap-3
                    ">


                      <div className="
                        w-9
                        h-9
                        rounded-full
                        bg-blue-50
                        text-blue-600
                        flex
                        items-center
                        justify-center
                        font-semibold
                      ">

                        {oferta.iniciales}

                      </div>


                      <span className="
                        font-semibold
                        text-slate-700
                      ">

                        {oferta.puesto}

                      </span>


                    </div>

                  </td>



                  {/* EMPRESA */}

                  <td className="px-5 py-4">
                    {oferta.empresa}
                  </td>



                  {/* MUNICIPIO */}

                  <td className="px-5 py-4">
                    {oferta.municipio}
                  </td>



                  {/* CATEGORIA */}

                  <td className="px-5 py-4">

                    <span className="
                      bg-purple-50
                      text-purple-600
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-semibold
                    ">

                      {oferta.categoria}

                    </span>

                  </td>



                  {/* ESCOLARIDAD */}

                  <td className="px-5 py-4">

                    <div className="
                      flex
                      items-center
                      gap-2
                    ">

                      <GraduationCap
                        size={16}
                        className="text-gray-400"
                      />

                      {oferta.escolaridad}

                    </div>

                  </td>



                  {/* VACANTES */}

                  <td className="
                    px-5
                    py-4
                    text-center
                    font-bold
                    text-blue-600
                  ">

                    {oferta.vacantes}

                  </td>



                  {/* SALARIO */}

                  <td className="
                    px-5
                    py-4
                    text-center
                    font-semibold
                    text-emerald-600
                  ">

                    {oferta.salario}

                  </td>



                  {/* LICENCIA */}

                  <td className="
                    px-5
                    py-4
                    text-center
                  ">


                    <span className={`
                      inline-flex
                      items-center
                      gap-1
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-semibold

                      ${
                        oferta.licencia === "Sí"
                          ? "bg-orange-50 text-orange-600"
                          : "bg-gray-100 text-gray-500"
                      }
                    `}>


                      <Car size={13} />

                      {oferta.licencia === "Sí"
                        ? "Requerida"
                        : "No requerida"
                      }


                    </span>


                  </td>



                  {/* ESTATUS */}

                  <td className="
                    px-5
                    py-4
                    text-center
                  ">


                    <span className="
                      bg-emerald-50
                      text-emerald-600
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-semibold
                    ">

                      {oferta.estatus}

                    </span>


                  </td>



                  {/* ACCIÓN */}

                  <td className="
                    px-5
                    py-4
                    text-center
                  ">


                    <button className="
                      w-9
                      h-9
                      rounded-xl
                      border
                      flex
                      items-center
                      justify-center
                      hover:bg-blue-50
                    ">


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
      {/* ANALISIS */}
      {/* ================================= */}

      <div className="
        grid
        grid-cols-1
        xl:grid-cols-3
        gap-6
      ">


        {/* CATEGORÍAS */}

        <div className="
          bg-white
          border
          rounded-2xl
          p-6
          shadow-sm
        ">


          <h3 className="
            font-bold
            text-slate-800
            mb-6
          ">

            Ofertas por categoría

          </h3>



          <div className="space-y-5">


            {[
              ["Administrativo", 180],
              ["Servicios", 150],
              ["Comercio", 120],
              ["Operativo", 90],
            ].map(([nombre, valor]) => (

              <div key={nombre}>


                <div className="
                  flex
                  justify-between
                  text-sm
                  mb-2
                ">

                  <span>
                    {nombre}
                  </span>

                  <strong>
                    {valor}
                  </strong>

                </div>


                <div className="
                  h-3
                  bg-gray-100
                  rounded-full
                ">


                  <div
                    className="
                      h-3
                      bg-blue-500
                      rounded-full
                    "
                    style={{
                      width: `${(valor / 180) * 100}%`
                    }}
                  />


                </div>


              </div>

            ))}


          </div>


        </div>



        {/* MUNICIPIOS */}

        <div className="
          bg-white
          border
          rounded-2xl
          p-6
          shadow-sm
        ">


          <h3 className="
            font-bold
            text-slate-800
            mb-6
          ">

            Ofertas por municipio

          </h3>



          <div className="space-y-5">


            {[
              ["Tuxtla Gutiérrez", 220],
              ["Tapachula", 150],
              ["San Cristóbal", 90],
              ["Otros municipios", 80],
            ].map(([nombre, valor]) => (


              <div key={nombre}>


                <div className="
                  flex
                  justify-between
                  text-sm
                  mb-2
                ">

                  <span>
                    {nombre}
                  </span>

                  <strong>
                    {valor}
                  </strong>

                </div>


                <div className="
                  h-3
                  bg-gray-100
                  rounded-full
                ">


                  <div
                    className="
                      h-3
                      bg-emerald-500
                      rounded-full
                    "
                    style={{
                      width: `${(valor / 220) * 100}%`
                    }}
                  />


                </div>


              </div>


            ))}


          </div>


        </div>



        {/* ESCOLARIDAD */}

        <div className="
          bg-white
          border
          rounded-2xl
          p-6
          shadow-sm
        ">


          <h3 className="
            font-bold
            text-slate-800
            mb-6
          ">

            Ofertas por escolaridad

          </h3>



          <div className="
            flex
            flex-col
            gap-5
          ">


            {[
              ["Secundaria", 220],
              ["Bachillerato", 190],
              ["Licenciatura", 100],
              ["Primaria", 30],
            ].map(([nombre, valor]) => (


              <div
                key={nombre}
                className="
                  flex
                  items-center
                  justify-between
                  p-3
                  bg-gray-50
                  rounded-xl
                "
              >


                <div className="
                  flex
                  items-center
                  gap-3
                ">

                  <GraduationCap
                    size={20}
                    className="text-blue-500"
                  />

                  <span>
                    {nombre}
                  </span>

                </div>


                <strong>
                  {valor}
                </strong>


              </div>


            ))}


          </div>


        </div>


      </div>


    </div>

  );

}