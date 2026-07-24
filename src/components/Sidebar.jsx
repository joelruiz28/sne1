export default function Sidebar(){

const menu=[
{
icon:"📊",
name:"Dashboard"
},
{
icon:"🏢",
name:"Empresas"
},
{
icon:"💼",
name:"Vacantes"
},
{
icon:"👥",
name:"Personas"
},
{
icon:"📅",
name:"Atenciones"
},
{
icon:"📈",
name:"Reportes"
},
{
icon:"⚙️",
name:"Configuración"
}
];


return(

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



<nav>


{
menu.map((item,index)=>(

<div
key={index}
className="
flex
items-center
gap-4
px-4
py-3
rounded-xl
hover:bg-slate-700
cursor-pointer
mb-2
transition
"
>

<span className="text-xl">
{item.icon}
</span>


<span>
{item.name}
</span>


</div>

))
}


</nav>


</aside>

)

}