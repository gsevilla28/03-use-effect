import React, { useEffect } from "react";

export const AvisoComponent = () => {
  useEffect(() => {
    //DETECtar cuando el componente se monta
    alert("el aviso component se ha montado");

    //cuando se desmonta
    return () => {
      alert("Componente desmontado");
    };
  }, []); // se ejeucta una vex cuando el array está vacio(LOAD)

  return (
    <div>
      <hr />
      <h3>Saludos Gerardo</h3>
      <button onClick={() => alert("Bienvenido")}>Mostrar Alerta</button>
    </div>
  );
};
