import React, { useEffect, useState } from "react";

const Vehiculos = () => {
  const [nombreVehiculo, setnombreVehiculo] = useState("Este es el valor inicial");

  useEffect(() => {
    console.log("Hola");
  }, []);

  useEffect(() => {
    console.log(
      "Esta es una función que se ejecuta cada vez que cambia el valor nombreVehiculo"
    );
    console.log("El valor de la variable es ", nombreVehiculo);
  }, [nombreVehiculo]);

  return (
    <form className="flex flex-col ">
      <h2>Formulario de creación de vehículos</h2>
      <input
        onChange={(e) => {
          setnombreVehiculo(e.target.value);
        }}
        value={nombreVehiculo}
        type="text"
        placeholder="Nombre del vehiculo"
      />
      <input
        onChange={(e) => {
          console.log(e.target.value);
        }}
        type="text"
        placeholder="Marca del vehículo"
      />
      <input type="text" placeholder="Modelo" />
      <button
        onClick={() => {
          console.log(
            "El valor de la varible nombreVehiculo es ",
            nombreVehiculo
          );
        }}
        type="button"
        className="bg-indigo-500 text-white"
      >
        Enviar datos
      </button>
    </form>
  );
};

export default Vehiculos;
