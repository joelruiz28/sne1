export default function AnalyticsCard({
title,
children
}){


return(

<div
className="
bg-white
rounded-2xl
border
shadow-sm
p-6
"
>


<h3
className="
font-bold
text-lg
mb-5
"
>

{title}

</h3>


{children}


</div>

)

}