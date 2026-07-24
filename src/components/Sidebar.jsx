import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menu = [
    {
      icon: "📊",
      name: "Dashboard",
      path: "/",
    },
    {
      icon: "🏢",
      name: "Empresas",
      path: "/empresas",
    },
    {
      icon: "💼",
      name: "Vacantes",
      path: "/ofertas",
    },
    {
      icon: "👥",
      name: "Personas",
      path: "/buscadores",
    },
    {
      icon: "📅",
      name: "Atenciones",
      path: "/atenciones",
    },
    {
      icon: "📈",
      name: "Reportes",
      path: "/reportes",
    },
    {
      icon: "⚙️",
      name: "Configuración",
      path: "/configuracion",
    },
  ];

  return (
    <aside
      className="
      w-72
      bg-slate-900
      text-white
      min-h-screen
      p-6
      "
    >
      <h1
        className="
        text-2xl
        font-bold
        mb-10
        "
      >
        🏢 Sistema Laboral
      </h1>

      <nav className="space-y-2">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-slate-700"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}