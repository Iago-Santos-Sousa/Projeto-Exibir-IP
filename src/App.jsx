import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./Loading";

function App() {
   const [dado, setDado] = useState({ endereco: "" });
   const [classe, setClasse] = useState(true);
   const [loading, setLoading] = useState(false);

   async function getApi() {
      const response = await fetch("https://ip4.seeip.org/json");
      const data = await response.json();
      const endereco = data.ip;
      setDado({ ...dado, endereco });
      setLoading(true);
   }

   useEffect(() => {
      setTimeout(() => {
         getApi();
      }, 3000);
   }, []);

   return (
      <div className="App">
         <button onClick={() => setClasse(false)}>Ver IP</button>

         <div className={classe ? "hidden" : "show result"}>
            {loading ? dado.endereco : <Loading />}
         </div>
      </div>
   );
}

export default App;
