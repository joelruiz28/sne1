export default function Header(){

return(

<header
className="
h-20
bg-white
border-b
flex
items-center
justify-between
px-8
"
>


<div>

<h2
className="
text-xl
font-bold
"
>
Dashboard General
</h2>


<p
className="
text-gray-500
text-sm
"
>
Resumen de actividad laboral
</p>


</div>



<div className="flex items-center gap-5">


<input

className="
border
rounded-xl
px-4
py-2
w-72
"

placeholder="🔍 Buscar..."

 />


<div
className="
bg-gray-100
px-4
py-2
rounded-xl
"
>

👤 Usuario

</div>


</div>


</header>


)

}