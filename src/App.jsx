import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import OfertasActivas from "./pages/OfertasActivas";


function App(){

return(

<div className="flex min-h-screen bg-gray-100">

  <Sidebar />

  <main className="flex-1">

    <Header />

    <OfertasActivas />

  </main>

</div>

)

}


export default App;