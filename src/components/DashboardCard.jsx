export default function DashboardCard({
    icon,
    title,
    value,
    color
}) {


const colors = {

blue:"from-blue-500 to-blue-600",
green:"from-green-500 to-green-600",
purple:"from-purple-500 to-purple-600",
orange:"from-orange-500 to-orange-600",
cyan:"from-cyan-500 to-cyan-600",
emerald:"from-emerald-500 to-emerald-600",
indigo:"from-indigo-500 to-indigo-600",
red:"from-red-500 to-red-600",
yellow:"from-yellow-500 to-yellow-600",
gray:"from-gray-500 to-gray-600",
pink:"from-pink-500 to-pink-600"

};


return (

<div
className="
bg-white
rounded-2xl
border
p-6
shadow-sm
hover:shadow-xl
hover:-translate-y-1
transition-all
duration-300
cursor-pointer
group
"
>


<div className="flex justify-between items-start">


<div>

<p className="text-gray-500 text-sm">
{title}
</p>


<h2 className="
text-4xl
font-bold
mt-3
text-gray-800
">

{value}

</h2>


<div className="
flex
items-center
gap-2
mt-3
text-sm
text-green-600
">

↑ 12%

<span className="text-gray-400">
vs mes anterior
</span>

</div>


</div>



<div
className={`
w-16
h-16
rounded-2xl
bg-gradient-to-br
${colors[color]}
flex
items-center
justify-center
text-3xl
text-white
shadow-lg
group-hover:scale-110
transition
`}
>

{icon}

</div>


</div>




<div
className="
mt-6
flex
justify-between
items-center
"
>


<span
className="
text-blue-600
font-medium
text-sm
group-hover:underline
"
>

Ver análisis →

</span>



<span>

⋮

</span>


</div>


</div>

)

}