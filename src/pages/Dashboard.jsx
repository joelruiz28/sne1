import DashboardCard from "../components/DashboardCard";
import AnalyticsCard from "../components/AnalyticsCard";
import RecentActivity from "../components/RecentActivity";


export default function Dashboard() {


const cards = [

{
icon:"🏢",
title:"Empresas con ofertas",
value:"250",
color:"blue"
},

{
icon:"💼",
title:"Vacantes disponibles",
value:"540",
color:"green"
},

{
icon:"👥",
title:"Personas en búsqueda",
value:"2,450",
color:"purple"
},

{
icon:"📅",
title:"Atenciones programadas",
value:"320",
color:"orange"
},

{
icon:"🔗",
title:"Personas vinculadas",
value:"350",
color:"cyan"
},

{
icon:"🎯",
title:"Personas colocadas",
value:"131",
color:"emerald"
},

{
icon:"👤",
title:"Personas atendidas",
value:"4,500",
color:"indigo"
},

{
icon:"🚫",
title:"Citas perdidas",
value:"85",
color:"red"
},

{
icon:"📋",
title:"Procesos no concretados",
value:"42",
color:"yellow"
},

{
icon:"⏳",
title:"Pendientes",
value:"120",
color:"gray"
},

{
icon:"📞",
title:"Contactos pendientes",
value:"95",
color:"pink"
}

];


return (

<div className="
p-8
bg-gray-100
min-h-screen
">


<div className="mb-8">

<h1 className="text-3xl font-bold">
📊 Dashboard General
</h1>

<p className="text-gray-500">
Resumen de actividad laboral
</p>

</div>



{/* TARJETAS PRINCIPALES */}

<div
className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
xl:grid-cols-4
gap-6
"
>


{
cards.map((card,index)=>(

<DashboardCard
key={index}
{...card}
/>

))
}


</div>



{/* ANALISIS */}

<div
className="
grid
grid-cols-1
xl:grid-cols-2
gap-6
mt-8
"
>



<AnalyticsCard
title="📈 Tendencia laboral"
>

<div
className="
h-64
flex
items-center
justify-center
bg-gray-50
rounded-xl
"
>

Gráfica mensual

</div>


</AnalyticsCard>





<AnalyticsCard
title="🎯 Resumen de colocaciones"
>


<div className="space-y-4">


<div className="flex justify-between">

<span>
Personas colocadas
</span>

<strong>
131
</strong>

</div>



<div className="flex justify-between">

<span>
Empresas participantes
</span>

<strong>
85
</strong>

</div>



<div className="flex justify-between">

<span>
Vacantes utilizadas
</span>

<strong>
210
</strong>

</div>


</div>


</AnalyticsCard>



</div>





{/* ACTIVIDAD */}

<RecentActivity/>


</div>


)

}