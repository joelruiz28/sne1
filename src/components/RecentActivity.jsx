export default function RecentActivity(){


const data=[

{
name:"Juan Pérez",
action:"Fue colocado",
date:"21/07/2026"
},

{
name:"Empresa ABC",
action:"Nueva vacante registrada",
date:"20/07/2026"
},

{
name:"Ana López",
action:"Nueva atención",
date:"20/07/2026"
}

]


return(

<div
className="
bg-white
rounded-2xl
border
shadow-sm
p-6
mt-6
"
>


<h3
className="
font-bold
text-lg
mb-5
"
>

📋 Actividad reciente

</h3>



<table
className="
w-full
"
>


<thead>

<tr
className="
text-left
text-gray-500
"
>

<th>
Persona
</th>

<th>
Actividad
</th>

<th>
Fecha
</th>


</tr>

</thead>



<tbody>


{
data.map((item,index)=>(


<tr
key={index}
className="
border-t
"
>

<td className="py-3">
{item.name}
</td>


<td>
{item.action}
</td>


<td>
{item.date}
</td>


</tr>


))
}


</tbody>


</table>



</div>


)

}