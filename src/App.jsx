import { useEffect, useState } from "react";
import "./App.css";

function App() {
   const [dado, setDado] = useState({ endereco: "" });
   const [classe, setClasse] = useState(true);

   async function getApi() {
      const response = await fetch("https://ip4.seeip.org/json");
      const data = await response.json();

      const endereco = data.ip;
      setDado({ ...dado, endereco });
   }

   useEffect(() => {
      getApi();
   }, []);

   function showIp() {
      setClasse(false);
   }

   return (
      <div className="App">
         <button onClick={showIp}>Ver IP</button>
         <p className={classe ? "hidden" : "show"}>{dado.endereco}</p>
      </div>
   );
}

export default App;
