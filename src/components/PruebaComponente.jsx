import React, { useState, useEffect } from "react";
import { AvisoComponent } from "./AvisoComponent";

export const PruebaComponente = () => {
  const [usuario, setUsuario] = useState("Gerardo");
  const [fecha, setFecha] = useState("01-01-1990");
  const [contador, setContador] = useState(0);

  const modUsuario = (e) => {
    setUsuario(e.target.value);
    // console.log("se ha realizado un cambio");
  };
  const cambiarFecha = () => {
    setFecha(Date.now());
  };

  //   solo se ejecuta al cargar la aplicacion
  useEffect(() => {
    console.log("haz cargado prueba componente");
  }, []);

  //se ejecuta solo si cambio el nombre
  useEffect(() => {
    setContador(contador + 1);
    console.log(`haz modificado el usuario, modificado: ${contador}`);
  }, [fecha, usuario]);

  return (
    <div>
      <h1>Use Effect</h1>
      <strong className="label">{usuario}</strong>
      <strong>{fecha}</strong>
      <p>
        <input
          type="text"
          name=""
          id=""
          onChange={modUsuario}
          placeholder="Cambia el nombre"
        />
        <button onClick={cambiarFecha}>cambiar fecha</button>
      </p>
      {usuario === "GERARDO" && <AvisoComponent />}
    </div>
  );
};
